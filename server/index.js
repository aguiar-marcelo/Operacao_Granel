const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// CONEXÃO COM BANCO
const db = mysql.createConnection({
    user: 'ogdev',
    host: '10.10.10.34',
    password: 'r0dr!m@r',
    database: 'operacaogranel'
})

//TESTE DE CONEXÃO
db.connect(function (err) {
    if (err) { throw err }
    else {
        console.log("Conectado a base de dados!")
    }
})


//READ
app.get("/users", (req, res) => {
    db.query("SELECT * FROM USUARIO", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
});


//RODAR API
app.listen(8080, () => { console.log("servidor rodando na porta 8080...") });