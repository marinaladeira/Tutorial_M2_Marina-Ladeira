//Instanciar o que permite a criação do endpoint = objeto do express
const express = require('express');

//Instanciando o que vai me permitir manipular o banco de dados e o próprio banco de dados
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/ponderada1.db';
const app = express();
app.use(express.json());

// Início CRUD
// C do CRUD, create, usando método POST
// Endpoint para postar informações associadas a uma pessoa
app.post('/inserirpessoa', urlencodedParser, (req, res) => {
  res.statusCode = 200; //quando o status dá certo, ao contrário é o 404
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  sql = "INSERT INTO Mauri (nome, user_id, Cargo) VALUES ('" + req.body.nome +"', '" + req.body.user_id +"', '" + req.body.Cargo + "')";
  console.log(sql);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  res.write('<p> "Mauri INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close();
  res.end();
});

// Endpoint para postar realizações associadas a uma pessoa
app.post('/inserirpessoa', urlencodedParser, (req, res) => {
  res.statusCode = 200; //quando o status dá certo, ao contrário é o 404
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  sql = "INSERT INTO Realizações (Nome, Data, Descrição, User_id) VALUES ('" + req.body.nome +"', '" + req.body.user_id +"', '" + req.body.Cargo + "', '" + req.body.Cargo + "')";
  console.log(sql);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  res.write('<p> "Realizações inseridas com sucesso!</p><a href="/">VOLTAR</a>');
  db.close();
  res.end();
});

// Endpoint para adicionar formações associadas a pessoa
app.post('/inserirpessoa', urlencodedParser, (req, res) => {
  res.statusCode = 200; //quando o status dá certo, ao contrário é o 404
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  sql = "INSERT INTO Formação (Título, Data, Instituição, user_id) VALUES ('" + req.body.nome +"', '" + req.body.user_id +"', '" + req.body.Cargo + "', '" + req.body.Cargo + "')";
  console.log(sql);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  res.write('<p> "Formações inseridas com sucesso!</p><a href="/">VOLTAR</a>');
  db.close();
  res.end();
});

//R do CRUD, read, usando método GET 
// Recupera as experiências do banco de dados com GET
router.get('/experiences', (req, res) => {
  db.query('SELECT * FROM Experiências', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;

// GET REALIZAÇÕES
router.get('/realizacoes', (req, res) => {
    db.query('SELECT * FROM Realizações', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  module.exports = router;

// GET  Mauri
router.get('/Mauri', (req, res) => {
    db.query('SELECT * FROM Mauri', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  module.exports = router;
// GET FORMAÇÃO
router.get('/formacao', (req, res) => {
    db.query('SELECT * FROM Formação', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  module.exports = router;
  
//U do crud, UPDATE 
// Atualiza os dados da tabela Mauri
app.put('/Mauri/:id', urlencodedParser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var id = req.params.id;
    var nome = req.body.nome;
    var user_id = req.body.user_id;
    var Cargo = req.body.Cargo;
    var sql = "UPDATE Mauri SET nome = ?, user_id = ?, Cargo = ? WHERE id = ?";
    db.run(sql, [nome, user_id, Cargo, id], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(204);
    });
    db.close();
});

// Atualiza Realizações
app.put('/realizacoes/:id', urlencodedParser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var id = req.params.id;
    var nome = req.body.nome;
    var Data = req.body.Data;
    var Descrição = req.body.Descrição;
    var User_id = req.body.User_id;
    var sql = "UPDATE Realizações SET Nome = ?, Data = ?, Descrição = ?, User_id = ? WHERE id = ?";
    db.run(sql, [nome, Data, Descrição, User_id, id], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(204);
    });
    db.close();
});

//Atualiza Formação
app.put('/formacao/:id', urlencodedParser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var id = req.params.id;
    var Título = req.body.Título;
    var Data = req.body.Data;
    var Instituição = req.body.Instituição;
    var user_id = req.body.user_id;
    var sql = "UPDATE Formação SET Título = ?, Data = ?, Instituição = ?, user_id = ? WHERE id = ?";
    db.run(sql, [Título, Data, Instituição, user_id, id], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(204);
    });
    db.close();
});

// Atualiza Experiências
app.put('/experiencias/:id', urlencodedParser, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var id = req.params.id;
    var titulo = req.body.titulo;
    var data = req.body.data;
    var descricao = req.body.descricao;
    var sql = "UPDATE Experiências SET Título = ?, Data = ?, Descrição = ? WHERE id = ?";
    db.run(sql, [titulo, data, descricao, id], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
    db.close();
});

//D do CRUD, deleta as informações inseridas 
// DELETE Mauri 
app.delete('/Mauri/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var id = req.params.id;
  var sql = "DELETE FROM Mauri WHERE id = ?";
  db.run(sql, [id], (err) => {
      if (err) {
          throw err;
      }
      res.sendStatus(204);
  });
  db.close();
});

// DELETE Realizações
app.delete('/realizacoes/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var id = req.params.id;
  var sql = "DELETE FROM Realizações WHERE id = ?";
  db.run(sql, [id], (err) => {
      if (err) {
          throw err;
      }
      res.sendStatus(204);
  });
  db.close();
});

// DELETE Formação
app.delete('/formacao/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var id = req.params.id;
  var sql = "DELETE FROM Formação WHERE id = ?";
  db.run(sql, [id], (err) => {
      if (err) {
          throw err;
      }
      res.sendStatus(204);
  });
  db.close();
});

// DELETE Experiências
app.delete('/experiences/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var id = req.params.id;
  var sql = "DELETE FROM Experiências WHERE id = ?";
  db.run(sql, [id], (err) => {
      if (err) {
          throw err;
      }
      res.sendStatus(204);
  });
  db.close();
});
