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
//R do CRUD, read, usando método GET 
// GET all experiences
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
  // GET all Mauri
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