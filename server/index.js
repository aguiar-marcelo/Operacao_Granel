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
//AGENTE

app.get("/agentes", (req, res) => {
    db.query("select * FROM AGENTE;", (err, result) => {
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

//MOTIVOS DE PARLISACAO
app.get("/motivos", (req, res) => {
    db.query(`select * from MOTIVO_PAR;`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//MOTIVOS DE PARALISACAO
app.get("/motivos", (req, res) => {
    db.query(`select * from MOTIVO_PAR;`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//COMPLEMENTO DE PARALISACAO
app.get("/complementos", (req, res) => {
    db.query(`select * from COMPLEMENTO_PAR;`, (err, result) => {
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
        [id, status],
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

app.put('/operacao/status/paralisado', (req, res) => {
    const id = req.body.id;

    db.query("UPDATE OPERACAO SET STATUS_OPERACAO = 'PARALISADO' WHERE COD_OPERACAO = ?",
        id,
        (err, result) => {
            if (err) {
                console.log(err)
                res.send(result)
            } else {
                res.send(result)
                console.log('status alterado')

            }
        }
    )
})

app.put('/operacao/registrar/atracacao', (req, res) => {
    const date = req.body.date;
    const id = req.body.id;

    db.query("UPDATE OPERACAO SET ATRACACAO = ?, STATUS_OPERACAO = 'OPERANDO' WHERE COD_OPERACAO = ?",
        [date, id],
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

//PERIODOS
app.get("/periodos/horarios", (req, res) => {
    db.query("select * from PERIODO;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

app.post('/periodo/criar', (req, res) => {
    const operacao = req.body.operacao;
    const periodo = req.body.periodo;
    const inicio = req.body.inicio;
    const berco = req.body.berco;
    const qtbordo = req.body.qtbordo;
    const qtterra = req.body.qtterra;
    const porao = req.body.porao;
    const moega = req.body.moega;
    const conexo = req.body.conexo;
    const requisicao = req.body.requisicao;
    const gerador = req.body.gerador;
    const grab = req.body.grab;
    const usuario = req.body.usuario;
    const dtcadastro = req.body.dtcadastro;
    db.query(`
            INSERT INTO PERIODO_OPERACAO (
                    COD_OPERACAO,
                    COD_PERIODO,
                    DAT_INI_PERIODO,
                    COD_BERCO,
                    QTDE_BORDO,
                    QTDE_TERRA,
                    PORAO,
                    COD_MOEGA,
                    CONEXO,
                    REQUISICAO,
                    GERADOR,
                    GRAB,
                    USUARIO,
                    DAT_CADASTRO
            )VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
        [operacao, periodo, inicio, berco, qtbordo, qtterra, porao, moega, conexo, requisicao, gerador, grab, usuario, dtcadastro],
        (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('periodo iniciado!');
            }
        }
    )
});

app.get('/periodo/busca/:id', (req, res) => { //verifica se existe operação aberta na op. que for fornecida
    const id = req.params.id;
    db.query(`SELECT COUNT(1) as EXISTE FROM PERIODO_OPERACAO WHERE DAT_FIM_PERIODO IS NULL AND COD_OPERACAO = ?`,
        id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})


app.get('/periodo/dashboard/:id', (req, res) => { //DADOS DO DASH
    const id = req.params.id;
    db.query(`
            SELECT
            OP.SEQ_PERIODO_OP,
            OP.COD_OPERACAO,
            N.NOME_NAVIO,
            P.STATUS_OPERACAO,
            PE.DEN_PERIODO,
            SUM(CA.QTDE_MANIFESTADA) as MANIFESTADO,
            OP.DAT_INI_PERIODO AS INI_PERIODO,
            BE.NOME_BERCO,
            MO.DESC_EQUIPAMENTO AS MOEGA
        FROM
            PERIODO_OPERACAO OP
            INNER JOIN PERIODO PE ON PE.COD_PERIODO = OP.COD_PERIODO
            INNER JOIN OPERACAO P ON P.COD_OPERACAO = OP.COD_OPERACAO
            INNER JOIN CARGA CA ON CA.COD_OPERACAO = OP.COD_OPERACAO
            INNER JOIN NAVIO N ON N.COD_NAVIO = P.COD_NAVIO
            INNER JOIN BERCO BE ON BE.COD_BERCO = OP.COD_BERCO
            INNER JOIN EQUIPAMENTO MO ON MO.COD_EQUIPAMENTO = OP.COD_MOEGA
        WHERE
            OP.DAT_FIM_PERIODO IS NULL
            AND OP.COD_OPERACAO = ?;
    `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.put('/periodo/finalizar', (req, res) => {
    const id = req.body.id;
    const data = req.body.data;

    db.query("UPDATE PERIODO_OPERACAO SET DAT_FIM_PERIODO = ? WHERE SEQ_PERIODO_OP = ?;",
        [data, id],
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

//VEICULOS QUE JA FIZERAM TARA
app.get('/dashboard/veiculos/:id', (req, res) => {
    const id = req.params.id;
    db.query(`
    SELECT 
CA.ID_CARREGAMENTO,
MT.NOME_MOTORISTA,
CA.PLACA_CAVALO,
CA.PESO_TARA,
CA.PLACA_CARRETA,
CA.DATA_CADASTRO 
FROM CARREGAMENTO CA
INNER JOIN MOTORISTA MT ON MT.COD_MOTORISTA = CA.COD_MOTORISTA
    WHERE COD_OPERACAO = ? and STATUS_CARREG = 1;
    `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

//TOTAL DESCARREGADO NA OPERAÇÃO
app.get('/dashboard/descarregado/:id', (req, res) => {
    const id = req.params.id;
    db.query(`
    select SUM(PESO_CARREGADO) as DESCARREGADO from CARREGAMENTO
    where COD_OPERACAO = ?;
    `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

// PARALISAÇÃO
app.post('/paralisacao/criar', (req, res) => {
    const operacao = req.body.operacao;
    const periodo = req.body.periodo;
    const motivo = req.body.motivo;
    const complemento = '1';
    const obs = req.body.obs;
    const dtinicio = req.body.dtinicio;
    const usuario = req.body.usuario;
    const dtcadastro = req.body.dtcadastro;
    db.query(`
    INSERT INTO PARALISACAO (COD_OPERACAO, SEQ_PERIODO_OP, COD_MOTIVO, COD_COMPL, OBSERVACO, DATA_INICIO, USUARIO, DAT_CADASTRO)
    VALUES (?,?,?,?,?,?,?,?);
            `,
        [operacao, periodo, motivo, complemento, obs, dtinicio, usuario, dtcadastro],
        (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('periodo iniciado!');
            }
        }
    )
});

app.get('/verifica/paralisacao/:id', (req, res) => {
    const id = req.params.id;
    db.query(`
    select SEQ_PARALISACAO from PARALISACAO
where COD_OPERACAO=? and DATA_TERMINO IS NULL;
    `, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})



//EQUIPAMENTOS
app.get("/equipamentos", (req, res) => {
    db.query("select * from EQUIPAMENTO;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
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
    const cemercante = req.body.cemercante;
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
                CE_MERCANTE,
                IND_CARGAIMO,
                QTDE_MANIFESTADA,
                STATUS_CARGA,
                USUARIO
            )VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);`,
        [operacao, tipo, numero, emissao, cliente, referencia, produto, ncm, cemercante, perigo, manifestado, status, usuario],
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
            CA.CE_MERCANTE,
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


app.post('/pesagem/primeirapesagem', (req, res) => {
    const COD_CARGA = req.body.COD_CARGA
    const COD_OPERACAO = req.body.COD_OPERACAO
    const PLACA_CAVALO = req.body.PLACA_CAVALO
    const COD_MOTORISTA = req.body.COD_MOTORISTA
    const PLACA_CARRETA = req.body.PLACA_CARRETA
    const PLACA_CARRETA2 = req.body.PLACA_CARRETA2
    const PLACA_CARRETA3 = req.body.PLACA_CARRETA3
    const COD_TRANSP = 1
    const DESTINO = req.body.DESTINO
    const PESO_TARA = req.body.PESO_TARA
    const DATA_TARA = req.body.DATA_TARA
    const USUARIO_TARA = req.body.USUARIO_TARA
    const STATUS_CARREG = req.body.STATUS_CARREG
    const USUARIO = req.body.USUARIO
    const DATA_CADASTRO = req.body.DATA_CADASTRO

    db.query('INSERT INTO CARREGAMENTO (COD_CARGA, COD_OPERACAO, PLACA_CAVALO,COD_MOTORISTA, PLACA_CARRETA, PLACA_CARRETA2, PLACA_CARRETA3, COD_TRANSP, DESTINO, PESO_TARA, DATA_TARA,USUARIO_TARA, STATUS_CARREG, USUARIO, DATA_CADASTRO ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            COD_CARGA,
            COD_OPERACAO,
            PLACA_CAVALO,
            COD_MOTORISTA,
            PLACA_CARRETA,
            PLACA_CARRETA2,
            PLACA_CARRETA3,
            COD_TRANSP,
            DESTINO,
            PESO_TARA,
            DATA_TARA,
            USUARIO_TARA,
            STATUS_CARREG,
            USUARIO,
            DATA_CADASTRO
        ], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('Primeira pesagem cadastrada!');
            }
        }
    )
})

app.get('/ultimapesagem/busca/:cpf', (req, res) => {
    const cpf = req.params.cpf

    db.query(`SELECT 
	CA.ID_CARREGAMENTO,
       MO.NOME_MOTORISTA,
       MO.CPF_MOTORISTA,
       MO.CNH_MOTORISTA,
       CA.STATUS_CARREG
  FROM CARREGAMENTO CA
 INNER JOIN MOTORISTA MO
    ON MO.COD_MOTORISTA = CA.COD_MOTORISTA
 INNER JOIN TRANSPORTADORA TR
    ON TR.COD_TRANSP = CA.COD_TRANSP
 WHERE MO.CPF_MOTORISTA =?;`,
        [cpf]
        , (err, result) => {
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

app.put('/segundapesagem', (req, res) => {

    const id = req.body.id
    const peso2 = req.body.peso2
    const data = req.body.data
    const usuario = req.body.usuario
    const status = req.body.status

    db.query("UPDATE CARREGAMENTO SET PESO_CARREGADO = ?, DATA_CARREGAMENTO = ?, USUARIO_CARREG = ?, STATUS_CARREG = ? WHERE (ID_CARREGAMENTO = ?)",
        [
            peso2,
            data,
            usuario,
            status,
            id
        ], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('Ultima pesagem cadastrada!');
            }
        }
    )
})

app.put('/ultimapesagem', (req, res) => {

    const id = req.body.id
    const peso3 = req.body.peso3
    const data = req.body.data
    const usuario = req.body.usuario
    const status = req.body.status

    db.query("UPDATE CARREGAMENTO SET PESO_BRUTO = ?, DATA_BRUTO = ?, USUARIO_BRUTO = ?, STATUS_CARREG = ? WHERE (ID_CARREGAMENTO = ?)",
        [
            peso3,
            data,
            usuario,
            status,
            id
        ], (err, result) => {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.send("sucesso")
                console.log('Ultima pesagem cadastrada!');
            }
        }
    )
})

app.put('/operacao/concluir/docs', (req, res) => {
    const id = req.body.id;
    const status = req.body.nome;

    db.query("UPDATE OPERACAO SET STATUS_OPERACAO = 'AGUARDANDO ATRACAÇÃO' WHERE COD_OPERACAO = ?",
        [id, status],
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


//RODAR API
app.listen(8080, () => { console.log("servidor rodando na porta 8080...") });