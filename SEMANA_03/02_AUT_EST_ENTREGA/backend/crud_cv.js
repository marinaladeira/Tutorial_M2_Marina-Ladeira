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

// Endpoint para postar experiências associadas a uma pessoa
app.post('/inserirpessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200; //quando o status dá certo, ao contrário é o 404
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    sql = "INSERT INTO Experiência (Empresa, Data, Descrição, User_id) VALUES ('" + req.body.nome +"', '" + req.body.user_id +"', '" + req.body.Cargo + "', '" + req.body.Cargo + "')";
    console.log(sql);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    res.write('<p> "Experiências inseridas com sucesso!</p><a href="/">VOLTAR</a>');
    db.close();
    res.end();
});

