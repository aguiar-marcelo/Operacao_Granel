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



//NAVIOS
app.get("/navio", (req, res) => {
    db.query("SELECT * FROM NAVIO", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)            
        }
    })
})

app.post('/navio/criar', (req, res) => {
    const nome = req.body.nome
    const imo = req.body.imo
    const bandeira = req.body.tipo

    db.query('INSERT INTO NAVIO (NOME_NAVIO, IMO_NAVIO, BANDEIRA) VALUES (?,?,?)',
        [nome, imo, bandeira], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('navio adicionado!');
            }
        }
    )
})

//RODAR API
app.listen(8080, () => { console.log("servidor rodando na porta 8080...") });