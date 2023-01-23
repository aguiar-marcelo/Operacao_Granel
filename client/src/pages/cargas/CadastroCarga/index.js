import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Confirm from '@mui/material/Dialog';
import moment from "moment";
import SubmitButton from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import style from "./CadastroCarga.module.css";
import modal from "./Modal.module.css";

const CadastroCarga = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { nome } = useParams();
  const usuario = JSON.parse(localStorage.getItem("user_token")).id;

  const [tipo, setTipo] = useState("");
  const [perigo, setPerigo] = useState("");
  const [numero, setNumero] = useState("");
  const [agente, setAgente] = useState("");
  const [emissao, setEmissao] = useState("");
  const [produto, setProduto] = useState("");
  const [ncm, setNcm] = useState("");
  const [manifestado, setManifestado] = useState("");
  const [referencia, setReferencia] = useState("");

  const [cargas, setCargas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [ncms, setNcms] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getCargas();
    getClientes();
    getProdutos();
    getNcms();
  }, [])

  const getClientes = () => {
    Axios.get('http://grifo:8080/clientes').then((response) => {
      setClientes(response.data);
    });
  }
  const getNcms = () => {
    Axios.get('http://grifo:8080/ncm').then((response) => {
      setNcms(response.data);
    });
  }
  const getProdutos = () => {
    Axios.get('http://grifo:8080/produtos').then((response) => {
      setProdutos(response.data);
    });
  }
  const getCargas = () => {
    Axios.get(`http://grifo:8080/carga/busca/${id}`,)
      .then(function (res) {
        setCargas(res.data);
      });
  }

  var total = cargas.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + (item.QTDE_MANIFESTADA * 1);
  }

  const addCarga = () => {
    Axios.post('http://grifo:8080/carga/criar', {
      operacao: id,
      tipo: tipo,
      perigo: perigo,
      numero: numero,
      emissao: emissao,
      cliente: agente,
      referencia: referencia,
      produto: produto,
      ncm: ncm,
      perigo: perigo,
      manifestado: manifestado,
      status: '1',
      usuario: usuario,
    })
      .then(function (res) {
        console.log(res);
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Carga cadastrada com sucesso!', 'success');
        getCargas();
      });
  }

  const deleteCarga = (id) => {
    Axios.delete(`http://grifo:8080/carga/delete/${id}`)
      .then(function (res) {
        console.log(res);
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Carga DELETADA com sucesso!', 'success');
        getCargas();
      });
  }

  const concluirDocs = () => {
    Axios.put('http://grifo:8080/operacao/concluir/docs',
      {
        id: id,
        status: 'AGUARDANDO ATRACAÇÃO'
      }).then(function (res) {
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Documentação concluida com sucesso!', 'success');
        FecharConfirm();
        setTimeout(() => {
          navigate("/cargas");
        }, 1500);
      });
  }


  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const validaDados = () => {
    if (!tipo | !numero | !agente | !emissao | !produto | !ncm | !manifestado | !referencia) {
      showAlert('Preencha todos os campos!', 'error')
      return;
    }
    addCarga();
  }

  
  const [openA, setOpenA] = useState(false);
  const AbrirConfirm = () => {
    setOpenA(true);
  };
  const FecharConfirm = () => {
    setOpenA(false);
  };






  return (
    <>
      <Navbar cargas />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate("/cargas")}>
              Voltar
            </div>
            <div className={style.active}>
              Cadastrar Carga
            </div>
          </div>

          <div className={style.navio}>
            <i className="fa fa-ship icon"></i>
            &nbsp;&nbsp;&nbsp;
            {nome}
          </div>
          <div className={style.flex}>
            <div className={style.form_control}>
              <label>Tipo: <br /></label>
              <select onChange={(e) => [setTipo(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                <option value={"BL"}>BL</option>
                <option value={"DI"}>DI</option>
              </select>
            </div>
            <div className={style.form_control}>
              <label>Produto Perigoso: <br /></label>
              <select onChange={(e) => [setPerigo(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                <option value={"S"}>Sim</option>
                <option value={"N"}>Não</option>
              </select>
            </div>
            <Input
              type={"text"}
              text={"Código do documento"}
              onChange={(e) => [setNumero(e.target.value)]}
            />
          </div>
          <div className={style.flex}>
            <div className={style.form_control}>
              <label>Agente:</label>
              <select onChange={(e) => [setAgente(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {clientes?.map((val) => {
                  return (
                    <option value={val.COD_CLIENTE}>{val.NOME_CLIENTE}</option>
                  )
                })}
              </select>
            </div>
            <Input
              type={"date"}
              text={"Data de Emissão"}
              onChange={(e) => [setEmissao(e.target.value)]}
            />
            <div className={style.form_control}>
              <label>Produto:</label>
              <select onChange={(e) => [setProduto(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {produtos?.map((val) => {
                  return (
                    <option value={val.COD_PRODUTO}>{val.PRODUTO}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className={style.flex}>
            <div className={style.form_control}>
              <label>NCM:</label>
              <select onChange={(e) => [setNcm(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {ncms?.map((val) => {
                  return (
                    <option value={val.COD_NCM}>{val.DESCRICAO_NCM}</option>
                  )
                })}
              </select>
            </div>
            <Input
              type={"text"}
              text={"Qtde Manifestada (Kg)"}
              onChange={(e) => [setManifestado(e.target.value)]}
            />
            <Input
              type={"text"}
              text={"Referência"}
              onChange={(e) => [setReferencia(e.target.value)]}
            />
          </div>
          <div className={style.listatitulo}>Histórico</div>
          <div className={style.cargas}>
            <div className={style.sumario}>
              <div>TIPO</div>
              <div>CÓDIGO</div>
              <div>DT. EMISSÃO</div>
              <div>PERIGO</div>
              <div>IMPORTADOR</div>
              <div>PRODUTO</div>
              <div>NCM</div>
              <div>QT. MANIFESTADA</div>
              <div></div>
            </div>
            <div className={style.lista}>

              {cargas.length == 0 ?
                "nenhuma carga identificada"
                :
                cargas.map((val) => {
                  return (<div className={style.item}>
                    <div>{val.TIPO}</div>
                    <div>{val.NUMERO}</div>
                    <div>{moment(val.DATA_EMISSAO).format("DD/MM/YYYY")}</div>
                    <div>{val.PERIGOSO}</div>
                    <div>{val.IMPORTADOR}</div>
                    <div>{val.PRODUTO}</div>
                    <div>{val.NCM}</div>
                    <div>{val.QTDE_MANIFESTADA}</div>
                    <div>
                      <span className={style.delete}>
                        <i class="fa fa-trash" onClick={() => deleteCarga(val.COD_CARGA)}></i>
                      </span>
                    </div>
                  </div>
                  )
                })}

            </div>
          </div>
          <div className={style.flex}>
            <SubmitButton text={"ADICIONAR"} onClick={validaDados} />
            <div className={style.total}>
              TOTAL DO NAVIO
              <div>
                {/* 120.000,000 KG */}
                {total} KG
              </div>
            </div>
            <SubmitButton text={"CONCLUIR"} onClick={AbrirConfirm} />
          </div>
        </div>
      </Container>
      <Confirm open={openA} onClose={FecharConfirm} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharConfirm}>Voltar</div>
          </div>
          <div className={modal.center}>
            Deseja concluir toda documentação desta Operacao?
            <br />
            <div>ao confirmar não será mais possivel editar os documentos! </div>
          </div>

          <div className={modal.flex}>
            <button className={modal.cancelar} onClick={FecharConfirm}>CANCELAR</button>
            <div className={modal.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;{nome}</div>
            <button className={modal.confirmar} onClick={concluirDocs}>CONFIRMAR</button>
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
      <CadastroCarga />
    </SnackbarProvider >
  );
}