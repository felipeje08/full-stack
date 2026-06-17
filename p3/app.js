var http = require('http');
var express = require('express');
var path = require('path');
var mongodb = require('mongodb');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var server = http.createServer(app);


// ==================================
// CONEXÃO MONGODB
// ==================================

const uri =
'mongodb://Felipe:Jeferson74@ac-mwfp3ya-shard-00-00.0h0ujsv.mongodb.net:27017,ac-mwfp3ya-shard-00-01.0h0ujsv.mongodb.net:27017,ac-mwfp3ya-shard-00-02.0h0ujsv.mongodb.net:27017/?ssl=true&replicaSet=atlas-41ei53-shard-0&authSource=admin&appName=Felipe';

const MongoClient = mongodb.MongoClient;

var cadastrar = null; // null até o banco conectar

MongoClient.connect(uri, function(err, client) {

    if (err) {

        console.log('Erro ao conectar ao banco:', err.message);
        console.log('Servidor rodará sem banco de dados.');

    } else {

        console.log('Banco conectado!');
        const db = client.db('provaDB');
        cadastrar = db.collection('cadastrar');

    }

});


// ==================================
// HOME — localhost
// ==================================

app.get('/', function(req, res) {

    if (!cadastrar) {

        return res.render('home.ejs', {
            cadastrar: [],
            total: 0
        });

    }

    cadastrar.find().toArray(function(err, items) {

        if (err) {

            console.log(err);

            return res.render('home.ejs', {
                cadastrar: [],
                total: 0
            });

        }

        // Soma todos os acompanhantes da lista
        var total = 0;

        items.forEach(function(item) {
            total += Number(item.db_acompanhantes) || 0;
        });

        res.render('home.ejs', {
            cadastrar: items,
            total: total
        });

    });

});


// ==================================
// CADASTRAR convidado
// ==================================

app.post('/cadastrar', function(req, res) {

    if (!cadastrar) {

        return res.render('resposta.ejs', {
            resposta: 'Erro: banco de dados não conectado!'
        });

    }

    var data = {
        db_nome:          req.body.nome,
        db_acompanhantes: req.body.acompanhantes
    };

    cadastrar.insertOne(data, function(err) {

        if (err) {

            console.log(err);

            res.render('resposta.ejs', {
                resposta: 'Erro ao cadastrar!'
            });

        } else {

            res.render('resposta.ejs', {
                resposta: 'Convidado incluído com sucesso!'
            });

        }

    });

});


// ==================================
// PORTA 80
// ==================================

app.listen(80, function() {

    console.log('Servidor rodando na porta 80');

});

// ==================================
// PACOTES NECESSÁRIOS
// ==================================
//
// Antes de tudo, inicie o projeto
// rodando no terminal:
//
//   npm init -y
//   → Cria o arquivo package.json
//     (o -y responde "sim" para tudo
//      automaticamente)
//
// Depois instale todos os pacotes
// de uma vez:
//
//   npm install
//
// Ou instale um por um:
//
//   npm install express
//   → Servidor web / rotas / formulários
//
//   npm install ejs
//   → Motor de templates para renderizar
//     arquivos .ejs como HTML dinâmico
//
//   npm install mongodb@4.12
//   → Conexão com o banco MongoDB Atlas
//
//   npm install http
//   → Módulo nativo do Node.js (não precisa
//     instalar, já vem com o Node)
//
//   npm install path
//   → Módulo nativo do Node.js (não precisa
//     instalar, já vem com o Node)
//
// Para rodar o servidor:
//
//   node app.js
//
// Acesse no navegador:
//
//   http://localhost:porta/pasta
//
// ==================================