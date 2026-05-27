const express = require('express');
const path = require('path');
const mongodb = require('mongodb');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// CONEXÃO MONGODB
const uri = 'mongodb+srv://felipeje005_db_user:Jeferson74@felipe.0h0ujsv.mongodb.net/?appName=Felipe';

const MongoClient = mongodb.MongoClient;

MongoClient.connect(uri, function(err, client) {

    if(err) {
        console.log(err);
    }

    console.log('Banco conectado!');

    const db = client.db('blogDB');

    const posts = db.collection('posts');


    // Página inicial → Projects
    app.get('/', function(req, res) {

        res.sendFile(
            path.join(__dirname, 'public', 'Projects.html')
        );

    });


    // Página do blog
    app.get('/blog', function(req, res) {

        posts.find().toArray(function(err, items) {

            if(err) {

                console.log(err);

                res.send('Erro ao buscar posts!');

            } else {

                res.render('blog.ejs', {
                    posts: items
                });

            }

        });

    });


    // Página de cadastro de post
    app.get('/cadastrar_post', function(req, res) {

        res.sendFile(
            path.join(
                __dirname,
                'public',
                'cadastrar_post.html'
            )
        );

    });


    // Cadastrar novo post
    app.post('/cadastrar_post', function(req, res) {

        var data = {

            db_titulo: req.body.titulo,
            db_resumo: req.body.resumo,
            db_conteudo: req.body.conteudo

        };

        posts.insertOne(data, function(err) {

            if(err) {

                console.log(err);

                res.send('Erro ao cadastrar post!');

            } else {

                res.redirect('/blog');

            }

        });

    });


    // Porta 80
    app.listen(80, function() {

        console.log(
            '🚀 Servidor rodando em http://localhost'
        );

    });

});