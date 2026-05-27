const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ARRAYS (sem banco de dados)
var usuarios = [];
var produtos = [];


// =====================================
// PÁGINA INICIAL
// =====================================

app.get('/', function(req, res) {

    res.sendFile(
        path.join(
            __dirname,
            'public',
            'Projects.html'
        )
    );

});


// =====================================
// USUÁRIOS
// =====================================

// Página cadastro usuário
app.get('/cadastro_usuario',
function(req, res) {

    res.sendFile(
        path.join(
            __dirname,
            'public',
            'cadastro_usuario.html'
        )
    );

});


// Cadastrar usuário
app.post('/cadastrar_usuario',
function(req, res) {

    // Verifica limite
    if(usuarios.length >= 10) {

        res.send(
            'Limite de usuários atingido!'
        );

    } else {

        var data = {

            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha

        };

        usuarios.push(data);

        res.send(
            'Usuário cadastrado com sucesso!'
        );

    }

});


// Página listar usuários
app.get('/listar_usuarios',
function(req, res) {

    res.render(
        'listar_usuarios.ejs',
        {
            usuarios: usuarios
        }
    );

});


// =====================================
// PRODUTOS
// =====================================

// Página cadastro produto
app.get('/cadastro_produto',
function(req, res) {

    res.sendFile(
        path.join(
            __dirname,
            'public',
            'cadastro_produto.html'
        )
    );

});


// Cadastrar produto
app.post('/cadastrar_produto',
function(req, res) {

    // Verifica limite
    if(produtos.length >= 10) {

        res.send(
            'Limite de produtos atingido!'
        );

    } else {

        var data = {

            nome: req.body.nome,
            preco: req.body.preco,
            descricao:
            req.body.descricao

        };

        produtos.push(data);

        res.send(
            'Produto cadastrado com sucesso!'
        );

    }

});


// Página listar produtos
app.get('/listar_produtos',
function(req, res) {

    res.render(
        'listar_produtos.ejs',
        {
            produtos: produtos
        }
    );

});


// =====================================
// PORTA 80
// =====================================

app.listen(80, function() {

    console.log(
        '🚀 Servidor rodando em http://localhost'
    );

});