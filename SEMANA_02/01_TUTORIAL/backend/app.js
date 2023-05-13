const express = require('express'); 
var app = express()
var port = process.env.PORT || 3000
var bodyParser = requir('body-parser') //importa o módulo que é utilizado para analisar as requisições sobre o corpo
var sqlite3 = require('sqlite3').verbose()
var DBPATH = 'seuBD.db'
var db = new.sqlite3.Database(DBPATH) //recebe os dados do banco e os coloca dentro da variável, o banco de dados está aberto 

app.use(bodyParser.json()) //indica para o servidor que ele deve ler os dados em json
app.use(bodyParser.urlcoded({extended: true})) 

app.get("/", function(req, res)
{
    res.header("Access-Control-Allow-Origin", "*")
    res.send("Salvei aqui ;)")

})

app.listen(port, () = >
{
    console.log(`Servidor rodando na porta ${port}`)
})