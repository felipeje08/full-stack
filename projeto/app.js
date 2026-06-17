// ============================================================
// PASSO 1 — Importar as bibliotecas necessárias
// ============================================================
const express    = require('express');
const path       = require('path');
var mongodb      = require('mongodb');
const MongoClient = mongodb.MongoClient;

const app = express();

// ============================================================
// PASSO 2 — String de conexão com o MongoDB Atlas
// ✏️  Já está com a sua string — não precisa mudar
// ============================================================
const uri = `mongodb+srv://felipeje005_db_user:Jeferson74@felipe.0h0ujsv.mongodb.net/?appName=Felipe`;

const client = new MongoClient(uri, { useNewUrlParser: true });

// ============================================================
// PASSO 3 — Configurar o Express
// (NÃO precisa mudar nada aqui)
// ============================================================
app.use(express.urlencoded({ extended: true })); // lê os dados do formulário (req.body)
app.use(express.static(path.join(__dirname, 'public'))); // serve o CSS da pasta public
app.set('view engine', 'ejs');                           // diz que as páginas são .ejs
app.set('views', path.join(__dirname, 'views'));          // pasta onde estão os .ejs

// ============================================================
// PASSO 4 — Conectar ao banco e iniciar o servidor
// ✏️  Mude "meubanco" para o nome do banco que o professor pedir
// ✏️  Mude "itens" para o nome da coleção que o professor pedir
//     (coleção = onde os registros ficam salvos, como uma tabela)
// ============================================================
client.connect(function(err) {
  if (err) {
    console.log('Erro ao conectar:', err);
    return;
  }

  console.log('✅ MongoDB conectado!');

  // ✏️ Mude "meubanco" para o nome do banco
  const db = client.db('meubanco');

  // ✏️ Mude "itens" para o nome da coleção
  const colecao = db.collection('itens');

  // ============================================================
  // ROTA 1 — GET /
  // Quando alguém digita "localhost" no navegador, cai aqui
  // Busca tudo do banco com find() e abre o home.ejs
  // ============================================================
  app.get('/', function(req, res) {
    colecao.find().toArray(function(err, itens) {
      if (err) {
        res.status(500).send('Erro ao buscar dados');
        return;
      }
      res.render('home', { itens: itens });
    });
  });

  // ============================================================
  // ROTA 2 — POST /cadastrar
  // Quando o formulário é enviado, cai aqui
  // Salva no banco e abre o resposta.ejs
  // ✏️  Mude os campos para bater com os name="" do formulário
  // ============================================================
  app.post('/cadastrar', function(req, res) {
    // ✏️ Mude para os campos do SEU formulário:
    const campo1 = req.body.campo1;
    const campo2 = req.body.campo2;
    const campo3 = req.body.campo3;

    // ✏️ Mude os campos aqui também
    const novoItem = {
      campo1: campo1,
      campo2: campo2,
      campo3: campo3
    };

    colecao.insertOne(novoItem, function(err, result) {
      if (err) {
        res.status(500).send('Erro ao salvar');
        return;
      }
      // Envia os dados para o resposta.ejs mostrar
      res.render('resposta', { campo1: campo1, campo2: campo2, campo3: campo3 });
    });
  });

  // ============================================================
  // PASSO FINAL — Iniciar o servidor na porta 80
  // Porta 80 = pode acessar só com "localhost" no navegador
  // ⚠️  No Windows: abrir o terminal como Administrador
  // ============================================================
  app.listen(80, function() {
    console.log('🚀 Servidor rodando em http://localhost');
  });

});
