const express = require('express');
const path = require('path');
const mongodb = require('mongodb');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// CONEXÃO MONGODB
const uri =
'mongodb+srv://felipeje005_db_user:Jeferson74@felipe.0h0ujsv.mongodb.net/?appName=Felipe';

const MongoClient = mongodb.MongoClient;

MongoClient.connect(uri,
function(err, client) {

    if(err) {

        console.log(err);

    } else {

        console.log(
            'Banco conectado!'
        );

    }

    const db =
    client.db('provaDB');

    const filmes =
    db.collection('filmes');


    // ==================================
    // HOME
    // localhost
    // ==================================

    app.get('/',
    function(req, res) {

        filmes.find().toArray(
        function(err, items) {

            if(err) {

                console.log(err);

                res.send(
                    'Erro ao buscar filmes!'
                );

            } else {

                res.render(
                    'home.ejs',
                    {
                        filmes: items
                    }
                );

            }

        });

    });


    // ==================================
    // CADASTRAR FILME
    // ==================================

    app.post('/cadastrar_filme',
    function(req, res) {

        var data = {

            db_nome:
            req.body.nome,

            db_categoria:
            req.body.categoria,

            db_descricao:
            req.body.descricao

        };

        filmes.insertOne(
        data,
        function(err) {

            if(err) {

                console.log(err);

                res.render(
                    'resposta.ejs',
                    {
                        resposta:
                        'Erro ao cadastrar!'
                    }
                );

            } else {

                res.render(
                    'resposta.ejs',
                    {
                        resposta:
                        'Filme cadastrado com sucesso!'
                    }
                );

            }

        });

    });


    // ==================================
    // PORTA 80
    // ==================================

    app.listen(80,
    function() {

        console.log(
            '🚀 Servidor rodando em http://localhost'
        );

    });

});