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
    const nome = req.body.nome;
    const imo = req.body.imo;
    const bandeira = req.body.bandeira;
    const status = req.body.status;
    const usuario = req.body.usuario;

    db.query('INSERT INTO NAVIO (NOME_NAVIO, IMO_NAVIO, BANDEIRA, STATUS, USUARIO) VALUES (?,?,?,?,?)',
        [nome, imo, bandeira, status, usuario], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('navio adicionado!');
            }
        }
    )
});

//EMPRESAS
app.get("/empresas", (req, res) => {
    db.query("SELECT COD_EMPRESA, NOME_EMPRESA FROM EMPRESA;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//AGENTES
app.get("/agentes", (req, res) => {
    db.query("SELECT * FROM AGENTE;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
//BERÇOS
app.get("/bercos", (req, res) => {
    db.query("select * FROM BERCO;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
//CLIENTES
app.get("/clientes", (req, res) => {
    db.query("select * FROM CLIENTE;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
//NCM
app.get("/ncm", (req, res) => {
    db.query("select * FROM NCM;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
//PRODUTOS
app.get("/produtos", (req, res) => {
    db.query("select * FROM PRODUTO;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


//OPERAÇÃO
app.get("/operacao", (req, res) => {
    db.query(`
                SELECT op.COD_OPERACAO,
                nv.NOME_NAVIO,
                be.NOME_BERCO,
                op.STATUS_OPERACAO
            FROM operacaogranel.OPERACAO op
            INNER JOIN operacaogranel.NAVIO nv
                ON nv.COD_NAVIO = op.COD_NAVIO
            INNER JOIN operacaogranel.BERCO be
                ON be.COD_BERCO = op.COD_BERCO;
    `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/operacao/criar', (req, res) => {
    const empresa = req.body.empresa;
    const navio = req.body.navio;
    const rap = req.body.rap;
    const agente = req.body.agente;
    const berco = req.body.berco;
    const eta = req.body.eta;
    const previsao = req.body.previsao;
    const status = req.body.status;
    const usuario = req.body.usuario;
    const data = req.body.data;

    db.query(`INSERT INTO OPERACAO
    (COD_EMPRESA, COD_NAVIO, RAP, COD_AGENTE, COD_BERCO, ETA, ATRACACAO_PREV, STATUS_OPERACAO, USUARIO, DAT_CADASTRO)
     VALUES (?,?,?,?,?,?,?,?,?,?);
     `,
        [empresa, navio, rap, agente, berco, eta, previsao, status, usuario, data],
        (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('operação adicionada!');
            }
        }
    )
});

app.put('/operacao/concluir/docs', (req, res) => {
    const id = req.body.id;
    const status = req.body.nome;

    db.query("UPDATE OPERACAO SET STATUS_OPERACAO = 'AGUARDANDO ATRACAÇÃO' WHERE COD_OPERACAO = ?",
        [id,status],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send(result)
            } else {
                res.send(result)
            }
        }
    )
})

app.put('/operacao/registrar/atracacao', (req, res) => {
    const date = req.body.date;
    const id = req.body.id;

    db.query("UPDATE OPERACAO SET ATRACACAO = ?, STATUS_OPERACAO = 'OPERANDO' WHERE COD_OPERACAO = ?",
        [date,id],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send(result)
            } else {
                res.send(result)
            }
        }
    )
})

//CARGA
app.post('/carga/criar', (req, res) => {
    const operacao = req.body.operacao;
    const tipo = req.body.tipo;
    const numero = req.body.numero;
    const emissao = req.body.emissao;
    const cliente = req.body.cliente;
    const referencia = req.body.referencia;
    const produto = req.body.produto;
    const ncm = req.body.ncm;
    const perigo = req.body.perigo;
    const manifestado = req.body.manifestado;
    const status = req.body.status;
    const usuario = req.body.usuario;

    db.query(`
            INSERT INTO CARGA (
                COD_OPERACAO,
                TIPO_DOC,
                NUMERO_DOC,
                DATA_EMISSAO,
                COD_CLIENTE,
                REFERENCIA,
                COD_PRODUTO,
                NCM,
                IND_CARGAIMO,
                QTDE_MANIFESTADA,
                STATUS_CARGA,
                USUARIO
            )VALUES(?,?,?,?,?,?,?,?,?,?,?,?);`,
        [operacao, tipo, numero, emissao, cliente, referencia, produto, ncm, perigo, manifestado, status, usuario],
        (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('carga adicionada!');
            }
        }
    )
});

app.get('/carga/busca/:id', (req, res) => {
    const id = req.params.id;
    db.query(`
            SELECT 
            CA.COD_CARGA,
            CA.COD_OPERACAO,
            NV.NOME_NAVIO,
            NV.IMO_NAVIO,
            NV.BANDEIRA,
            NV.STATUS,
            CA.TIPO_DOC AS TIPO,
            CA.NUMERO_DOC AS NUMERO,
            CA.REFERENCIA,
            CL.NOME_CLIENTE AS IMPORTADOR,
            CA.DATA_EMISSAO,
            PR.PRODUTO,
            CA.NCM,
            CA.IND_CARGAIMO AS PERIGOSO,
            CA.QTDE_MANIFESTADA
        FROM operacaogranel.CARGA CA
        INNER JOIN operacaogranel.OPERACAO OP
        ON OP.COD_OPERACAO = CA.COD_OPERACAO
        INNER JOIN operacaogranel.NAVIO NV
        ON NV.COD_NAVIO =  OP.COD_NAVIO
        INNER JOIN operacaogranel.CLIENTE CL
        ON CL.COD_CLIENTE = CA.COD_CLIENTE
        INNER JOIN operacaogranel.PRODUTO PR
        ON PR.COD_PRODUTO = CA.COD_PRODUTO
        WHERE CA.COD_OPERACAO = ?
    `,
        id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})


app.delete('/carga/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM CARGA WHERE COD_CARGA = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log('carga DELETADA!');
        }
    })
})



//VEICULOS
app.post('/motorista/criar', (req, res) => {
    const nome = req.body.nome
    const cnh = req.body.cnh
    const cpf = req.body.cpf
    const usuario = req.body.usuario

    db.query('INSERT INTO MOTORISTA (NOME_MOTORISTA, CPF_MOTORISTA, CNH_MOTORISTA, USUARIO) VALUES (?,?,?,?)',
        [nome, cpf, cnh, usuario], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('motorista adicionado!');
            }
        }
    )
})

app.get('/motorista/busca/:cpf', (req, res) => {

    const cpf = req.params.cpf;

    db.query('select * from MOTORISTA where CPF_MOTORISTA = ?',
        cpf, (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send(result)
                console.log(result);
            }
        }
    )
})





//RODAR API
app.listen(8080, () => { console.log("servidor rodando na porta 8080...") });