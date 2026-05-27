const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// GET '/' → abre Projects.html (página inicial)
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});


// GET '/cadastra' → abre Cadastro.html
app.get('/cadastra', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});


// GET '/login' → abre Login.html
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});


// POST '/cadastrar_usuario'
app.post('/cadastrar_usuario', function(req, res) {

  var nome = req.body.nome;
  var login = req.body.login;
  var senha = req.body.senha;

  res.render('resposta.ejs', {
    resposta: 'Usuário cadastrado com sucesso!'
  });

});


// POST '/logar_usuario'
app.post('/logar_usuario', function(req, res) {

  var login = req.body.login;
  var senha = req.body.senha;

  res.render('resposta.ejs', {
    resposta: 'Usuário logado com sucesso!'
  });

});


// Porta 80 = localhost
app.listen(80, function() {
  console.log('🚀 Servidor rodando em http://localhost');
});