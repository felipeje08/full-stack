const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

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

    const db = client.db('lab10DB');

    const usuarios = db.collection('usuarios');
    const carros = db.collection('carros');


    // ==========================================
    // PÁGINA INICIAL
    // ==========================================

    app.get('/', function(req, res) {

        res.sendFile(
            path.join(__dirname, 'public', 'Projects.html')
        );

    });


    // ==========================================
    // USUÁRIOS
    // ==========================================

    // Página cadastro usuário
    app.get('/cadastro_usuario', function(req, res) {

        res.sendFile(
            path.join(
                __dirname,
                'public',
                'cadastro_usuario.html'
            )
        );

    });


    // Página login usuário
    app.get('/login_usuario', function(req, res) {

        res.sendFile(
            path.join(
                __dirname,
                'public',
                'login_usuario.html'
            )
        );

    });


    // Cadastrar usuário
    app.post('/cadastrar_usuario', function(req, res) {

        var data = {

            db_nome: req.body.nome,
            db_login: req.body.login,
            db_senha: req.body.senha

        };

        usuarios.insertOne(data, function(err) {

            if(err) {

                console.log(err);

                res.send(
                    'Erro ao cadastrar usuário!'
                );

            } else {

                res.redirect('/login_usuario');

            }

        });

    });


    // Login usuário
    app.post('/logar_usuario', function(req, res) {

        var data = {

            db_login: req.body.login,
            db_senha: req.body.senha

        };

        usuarios.find(data).toArray(
            function(err, items) {

            if(items.length == 0) {

                res.send(
                    'Usuário/senha não encontrado!'
                );

            } else if(err) {

                res.send(
                    'Erro ao logar usuário!'
                );

            } else {

                res.redirect('/carros');

            }

        });

    });


    // ==========================================
    // CARROS
    // ==========================================

    // Página listar carros
    app.get('/carros', function(req, res) {

        carros.find().toArray(
            function(err, items) {

            if(err) {

                console.log(err);

                res.send(
                    'Erro ao buscar carros!'
                );

            } else {

                res.render('carros.ejs', {
                    carros: items
                });

            }

        });

    });


    // Página gerenciar carros
    app.get('/gerenciar_carros', function(req, res) {

        carros.find().toArray(
            function(err, items) {

            if(err) {

                console.log(err);

                res.send(
                    'Erro ao buscar carros!'
                );

            } else {

                res.render(
                    'gerenciar_carros.ejs',
                    {
                        carros: items
                    }
                );

            }

        });

    });


    // Página cadastrar carro
    app.get('/cadastrar_carro', function(req, res) {

        res.sendFile(
            path.join(
                __dirname,
                'public',
                'cadastrar_carro.html'
            )
        );

    });


    // CREATE carro
    app.post('/cadastrar_carro',
    function(req, res) {

        var data = {

            db_marca: req.body.marca,
            db_modelo: req.body.modelo,
            db_ano: req.body.ano,
            db_qtde_disponivel:
            parseInt(req.body.qtde)

        };

        carros.insertOne(data,
        function(err) {

            if(err) {

                console.log(err);

                res.send(
                    'Erro ao cadastrar carro!'
                );

            } else {

                res.redirect(
                    '/gerenciar_carros'
                );

            }

        });

    });


    // Página atualizar carro
    app.get('/atualizar_carro/:id',
    function(req, res) {

        var id = req.params.id;

        carros.find({
            _id: new ObjectId(id)
        }).toArray(function(err, items) {

            res.render(
                'atualizar_carro.ejs',
                {
                    carro: items[0]
                }
            );

        });

    });


    // UPDATE carro
    app.post('/atualizar_carro/:id',
    function(req, res) {

        var id = req.params.id;

        var data = {

            db_marca: req.body.marca,
            db_modelo: req.body.modelo,
            db_ano: req.body.ano,
            db_qtde_disponivel:
            parseInt(req.body.qtde)

        };

        carros.updateOne(

            {
                _id: new ObjectId(id)
            },

            {
                $set: data
            },

            function(err) {

                if(err) {

                    console.log(err);

                    res.send(
                        'Erro ao atualizar!'
                    );

                } else {

                    res.redirect(
                        '/gerenciar_carros'
                    );

                }

            }

        );

    });


    // DELETE carro
    app.get('/remover_carro/:id',
    function(req, res) {

        var id = req.params.id;

        carros.deleteOne(

            {
                _id: new ObjectId(id)
            },

            function(err) {

                if(err) {

                    console.log(err);

                    res.send(
                        'Erro ao remover!'
                    );

                } else {

                    res.redirect(
                        '/gerenciar_carros'
                    );

                }

            }

        );

    });


    // VENDER carro
    app.get('/vender_carro/:id',
    function(req, res) {

        var id = req.params.id;

        carros.find({
            _id: new ObjectId(id)
        }).toArray(function(err, items) {

            var carro = items[0];

            if(
                carro.db_qtde_disponivel
                <= 0
            ) {

                res.redirect('/carros');

            } else {

                carros.updateOne(

                    {
                        _id:
                        new ObjectId(id)
                    },

                    {
                        $inc: {
                            db_qtde_disponivel: -1
                        }
                    },

                    function(err) {

                        if(err) {

                            console.log(err);

                        }

                        res.redirect(
                            '/carros'
                        );

                    }

                );

            }

        });

    });


    // ==========================================
    // PORTA
    // ==========================================

    app.listen(80, function() {

        console.log(
            '🚀 Servidor rodando em http://localhost'
        );

    });

});