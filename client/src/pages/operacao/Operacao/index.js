import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import moment from 'moment';
import Header from "../../../components/Header";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Pesagem from '@mui/material/Dialog';
import Confirm from '@mui/material/Dialog';
import Axios from "axios";
import Paralisacao from '@mui/material/Dialog';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./Operacao.module.css"
import modal from "./Modal.module.css"
import confirm from "./Confirm.module.css"

const Operacao = () => {
  useEffect(() => {
    DadosDashboard();
    getVeiculos();
    VerificaPeriodo();
    getQtDescarregado();
    VerificaParalisacao();
    getMotivos();
    getComplementos();
  }, [])

  const navigate = useNavigate();
  let { id } = useParams();


  const [existePeriodo, setExistePeriodo] = useState(0);
  const [existeParalisacao, setExisteParalisacao] = useState(0);
  const [dadosDash, setDadosDash] = useState([]);
  const [veiculos, setVeiculos] = useState([]); //lista dos que ja tiraram tara
  const [descarregado, setDescarregado] = useState([]); //lista dos que ja tiraram tara

  const [motivos, setMotivos] = useState([]);
  const [complementos, setComplementos] = useState([]);
  const [motivo, setMotivo] = useState("");
  const [complemento, setComplemento] = useState("");
  const [dtinicio, setDtinicio] = useState("");
  const [obs, setObs] = useState("");
  const usuario = JSON.parse(localStorage.getItem("user_token")).id;

  const [i, setI] = useState({});
  const [peso2, setPeso2] = useState("");
  const [data, setData] = useState("");
  const [obsPesagem, setObsPesagem] = useState("");

  const [dataFim, setDataFim] = useState("");

  //modal de 2 pesagem
  const [openA, setOpenA] = useState(false);
  const [veiculo, setVeiculo] = useState(null); //state que indica qual veiculo o modal deve abrir
  const AbrirPesagem = () => {
    setOpenA(true);
  };
  const FecharPesagem = () => {
    setOpenA(false);
  };


  const [openC, setOpenC] = useState(false);
  const AbrirConfirm = () => {
    setOpenC(true);
  };
  const FecharConfirm = () => {
    setOpenC(false);
  };

  //modal de paralisacao
  const [openB, setOpenB] = useState(false);
  const AbrirParalisacao = () => {
    setOpenB(true);
  };
  const FecharParalisacao = () => {
    setOpenB(false);
  };


  const getDate = () => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }
  const VerificaPeriodo = () => {
    Axios.get(`http://grifo:8080/periodo/busca/${id}`,)
      .then(function (res) {
        setExistePeriodo(res.data[0].EXISTE)
      })
  }
  const VerificaParalisacao = () => {
    Axios.get(`http://grifo:8080/verifica/paralisacao/${id}`,)
      .then(function (res) {
        setExisteParalisacao(res.data)
      })
  }
  const DadosDashboard = () => {
    Axios.get(`http://grifo:8080/periodo/dashboard/${id}`,)
      .then(function (res) {
        setDadosDash(res.data[0])
      })
  }
  const getVeiculos = () => {
    Axios.get(`http://grifo:8080/dashboard/veiculos/${id}`,)
      .then(function (res) {
        setVeiculos(res.data)
      })
  }
  const getQtDescarregado = () => {
    Axios.get(`http://grifo:8080/dashboard/descarregado/${id}`,)
      .then(function (res) {
        setDescarregado(res.data[0].DESCARREGADO)
      })
  }
  const getMotivos = () => {
    Axios.get(`http://grifo:8080/motivos`,)
      .then(function (res) {
        setMotivos(res.data)
      })
  }
  const getComplementos = () => {
    Axios.get(`http://grifo:8080/complementos`,)
      .then(function (res) {
        setComplementos(res.data)
      })
  }

  const addParalisacao = () => {
    Axios.post('http://grifo:8080/paralisacao/criar', {
      operacao: id,
      periodo: dadosDash.SEQ_PERIODO_OP,
      motivo: motivo,
      obs: obs,
      dtinicio: dtinicio,
      usuario: usuario,
      dtcadastro: getDate()
    }).then(function (res) {
      console.log(res);
      res.data.sqlMessage ?
        showAlert(res.data.sqlMessage, 'error') :
        showAlert('Paralisação adicionada!', 'success');
      FecharParalisacao()
    });

    dadosDash()
  }

  const encerrarParalisacao = () => {
    if (window.confirm("Deseja encerrar a paralisação atual?") == true) {
      console.log("encerrou");
    } else {
      console.log("nao encerrou");
    }
  }

  const validaDados1 = () => {
    if (!obs | !motivo | !complemento | !dtinicio) {
      showAlert('Preencha todos os campos', 'error')
      return;
    }
    addParalisacao();
  }

  const validaDados2 = () => {
    if (!peso2 | !data) {
      showAlert('Preencha todos os campos', 'error')
      return;
    }
    SegundaPesagem();
  }

  const validaDados3 = () => {
    if (!dataFim) {
      showAlert('Preencha a data!', 'error')
      return;
    }
    encerrarPeriodo();
  }

  const SegundaPesagem = () => {
    Axios.put('http://grifo:8080/segundapesagem',
      {
        id: i.ID_CARREGAMENTO,
        peso2: peso2,
        data: data,
        usuario: usuario,
        status: '2'
      }).then(function (res) {
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Veiculo pesado com sucesso!', 'success');
        window.location.href = `/operacao/${id}`;
      });
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const encerrarPeriodo = () => {
    Axios.put('http://grifo:8080/periodo/finalizar',
      {
        id: dadosDash.SEQ_PERIODO_OP,
        data: dataFim
      }).then(function (res) {
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Período finalizado com sucesso!', 'success');
        FecharConfirm();
        setTimeout(() => {
          window.location.href = `/operacao/${id}`;
        }, 1500);
      });
  }


  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate(`/operacoes`)}>
              Operações em andamento
            </div>
            <div className={style.active} >
              Dashboard Período
            </div>
            <div onClick={() => navigate(`/operacao/${id}/AberturaPeriodo`)}>
              Abertura de Período
            </div>
          </div>
          {!dadosDash.SEQ_PERIODO_OP ?
            <div>
              <div className={style.notform}>DASHBOARD INDISPONÍVEL</div>
            </div>
            :
            <div>
              <div className={style.flex}>
                <div className={style.periodo}>
                  {dadosDash.DEN_PERIODO || "--/--"}
                  <div className={style.data}>
                    {/* 02/01/2023 */}
                    {moment(dadosDash.INI_PERIODO).format("DD/MM/YYYY") || "--/--"}
                  </div>
                </div>
                <div>
                </div>
                <div className={style.status}>
                  <div className={`${style[dadosDash.STATUS_OPERACAO]}`}>
                    <i class="fa fa-truck"></i>&nbsp;&nbsp;{dadosDash.STATUS_OPERACAO || "--"}
                  </div>
                </div>
              </div>
              <div className={style.flex}>
                <div className={style.tara}>
                  1º Pesagem (Tara)
                  <div className={style.sumario}>
                    <div>CAVALO</div>
                    <div>CARRETA</div>
                    <div>HORÁRIO</div>
                  </div>
                  <div className={style.lista}>
                    {!veiculos.length ?
                      <div>--</div>
                      :
                      veiculos.map((val, key) => {
                        return (
                          <div className={style.item} onClick={() => [AbrirPesagem(), setI(val)]}>
                            <div>{val.PLACA_CAVALO || "-"}</div>
                            <div>{val.PLACA_CARRETA || "-"}</div>
                            <div>{val.PLACA_CARRETA2 || "-"}</div>
                            <div>{val.PLACA_CARRETA3 || "-"}</div>
                            <div>{moment(val.DATA_CADASTRO).format('HH:mm') || "-"}</div>
                          </div>
                        )
                      })}
                  </div>
                </div>
                <div className={style.autos}>
                  <div><i class="fa fa-stopwatch"></i> 13h x 14h = # Autos</div>
                  <div><i class="fa fa-stopwatch"></i> 14h x 15h = # Autos</div>
                  <div><i class="fa fa-stopwatch"></i> 15h x 16h = # Autos</div>
                  <div><i class="fa fa-stopwatch"></i> 16h x 17h = # Autos</div>
                  <div><i class="fa fa-stopwatch"></i> 17h x 18h = # Autos</div>
                  <div><i class="fa fa-stopwatch"></i> 18h x 19h = # Autos</div>
                </div>
                <div className={style.motivo}>
                  <div className={style.sumariob}>
                    <div className={style.motivobox}>MOTIVO</div>
                    <div className={style.sumariobox}>DURAÇÃO</div>
                  </div>
                  <div className={style.listab}>
                    {/* <div className={style.itemb}>
                  <div className={style.motivoitem}>Chuva</div>
                  <div className={style.sumarioitem}>00:35</div>
                </div>
                <div className={style.itemb}>
                  <div className={style.motivoitem}>Manuten. GRCMAC</div>
                  <div className={style.sumarioitem}>00:35</div>
                </div>
                <div className={style.itemb}>
                  <div className={style.motivoitem}>Manuten. gerador</div>
                  <div className={style.sumarioitem}>00:25</div>
                </div> */}
                  </div>
                </div>
              </div>
              <div className={style.flex}>
                <div className={style.pesos}>
                  <div>
                    DESCARREGADO
                    <div>{descarregado || "0"} KG</div>
                  </div>
                  <div>
                    MANIFESTADO
                    <div>{dadosDash.MANIFESTADO || "--"} KG</div>
                  </div>
                  <div>
                    EQUIPAMENTO
                    <div>{dadosDash.MOEGA || "--"}</div>
                  </div>
                  <div>
                    AUTOS
                    <div>{veiculos.length || "0"}</div>
                  </div>
                  <div>
                    BERÇO
                    <div>{dadosDash.NOME_BERCO || "--"}</div>
                  </div>
                </div>
              </div>
              <div className={style.flex}>
                <button
                  className={style.abrirp}
                  onClick={existeParalisacao.length > 0 ? encerrarParalisacao : AbrirParalisacao}>
                  {existeParalisacao.length > 0 ? "ENCERRAR PARALISAÇÃO" : "ABRIR PARALISAÇÃO"}
                </button>
                <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;{dadosDash.NOME_NAVIO || "--"}</div>
                <button
                  className={style.finalizar} onClick={AbrirConfirm}>
                  FINALIZAR ESTE PERÍODO
                </button>
              </div>
            </div>}
        </div>
      </Container>
      <Pesagem open={openA} onClose={FecharPesagem} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharPesagem}>Voltar</div>
            <div className={modal.active}>2º Pesagem </div>
          </div>
          <div className={modal.flex}>
            <div className={modal.periodo}>
              {dadosDash.DEN_PERIODO || "--/--"}
              <div className={modal.data}>
                {moment(dadosDash.INI_PERIODO).format("DD/MM/YYYY") || "--/--"}
              </div>
            </div>
            <div className={modal.motorista}>
              <div><b>Motorista: </b>{i.NOME_MOTORISTA}</div>
              <div><b>Cavalo: </b>{i.PLACA_CAVALO}</div>
              <div><b>1° Carreta: </b>{i.PLACA_CARRETA}</div>
              <div><b>2° Carreta: </b>{i.PLACA_CARRETA2}</div>
              <div><b>3° Carreta: </b>{i.PLACA_CARRETA3}</div>
              <div><b>1º Pesagem (tara): </b>{i.PESO_TARA} KG</div>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={modal.inputbox}>
              2º Pesagem
              <input type="number" onChange={(e) => { setPeso2(e.target.value) }} />
            </div>
            <div className={modal.inputbox}>
              Data
              <input type="datetime-local" onChange={(e) => { setData(e.target.value) }} />
            </div>
          </div>
          <div className={modal.flex}>
            <div className={modal.textbox}>
              Observação (opcional)
              <textarea rows="4" onChange={(e) => { setObsPesagem(e.target.value) }}></textarea>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;{dadosDash.NOME_NAVIO || "--"}</div>
            <button className={style.finalizar} onClick={validaDados2}>REGISTRAR 2ºPESAGEM</button>
          </div>
        </div>
      </Pesagem>
      <Paralisacao open={openB} onClose={FecharParalisacao} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div>Voltar</div>
            <div className={modal.active}>Abertura de Paralisação</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.periodo}>
              {dadosDash.DEN_PERIODO || "--/--"}
              <div className={modal.data}>
                {/* 02/01/2023 */}
                {moment(dadosDash.INI_PERIODO).format("DD/MM/YYYY") || "--/--"}
              </div>
            </div>
            <div className={modal.inputbox}>
              Início
              <input type="datetime-local" onChange={(e) => { setDtinicio(e.target.value) }} />
            </div>
          </div>
          <div className={modal.selectbox}>
            <label>Motivo:</label>
            <select onChange={(e) => { setMotivo(e.target.value) }}>
              <option disabled selected>Selecione uma opção</option>
              {motivos?.map((val) => {
                return (
                  <option value={val.COD_MOTIVO}>{val.DESC_MOTIVO} </option>
                )
              })}
            </select>
          </div>
          <div className={modal.selectbox}>
            <label>Complemento:</label>
            <select onChange={(e) => { setComplemento(e.target.value) }}>
              <option disabled selected>Selecione uma opção</option>
              {complementos?.map((val) => {
                return (
                  <option value={val.COD_COMPL}>{val.DESC_COMPL}</option>
                )
              })}
            </select>
          </div>
          <div className={modal.flex}>
            <div className={modal.textbox}>
              Observação
              <textarea rows="4" onChange={(e) => setObs(e.target.value)}></textarea>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;{dadosDash.NOME_NAVIO || "--"}</div>
            <button className={style.finalizar} onClick={validaDados1}>REGISTRAR PARALISAÇÃO</button>
          </div>
        </div>
      </Paralisacao>
      <Confirm open={openC} onClose={FecharConfirm} fullWidth>
        <div className={confirm.modal}>
          <div className={confirm.nav}>
            <div onClick={FecharConfirm}>Voltar</div>
          </div>
          <div className={confirm.center}>
            Deseja finalizar o período atual?
            <br />
            <div>ao finalizar não será mais possível acessar Dashboard! </div>
          </div>
          <div className={confirm.center}>
            <div className={confirm.inputbox}>
              Início
              <input type="datetime-local" onChange={(e) => { setDataFim(e.target.value) }} />
            </div>
          </div>
          <div className={confirm.flex}>
            <button className={confirm.cancelar}>CANCELAR</button>
            <div className={confirm.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;{dadosDash.NOME_NAVIO || "--"}</div>
            <button className={confirm.confirmar} onClick={validaDados3}>CONFIRMAR</button>
          </div>
        </div>
      </Confirm>
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={2500}>
      <Operacao />
    </SnackbarProvider >
  );
}

