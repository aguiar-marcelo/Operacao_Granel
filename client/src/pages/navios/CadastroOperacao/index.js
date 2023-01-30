import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Select from "../../../components/select"
import SubmitButton from "../../../components/Button";
import moment from 'moment'
import { Navigate, useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';
import style from "./CadastroOperacao.module.css";

const CadastroOperacao = () => {

  useEffect(() => {
    getEmpresas();
    getAgentes();
    getBercos();
  }, [])

  const navigate = useNavigate();

  let { id } = useParams();
  let { nome } = useParams();

  const [empresas, setEmpresas] = useState();
  const [clientes, setClientes] = useState();
  const [bercos, setBercos] = useState();

  const [empresa, setEmpresa] = useState("");
  const [agente, setAgente] = useState("");
  const [agentes, setAgentes] = useState();
  const [eta, setEta] = useState("");
  const [previsao, setPrevisao] = useState("");
  const [rap, setRap] = useState("");
  const [berco, setBerco] = useState("");
  const usuario = JSON.parse(localStorage.getItem("user_token")).id;

  const getEmpresas = () => {
    Axios.get('http://grifo:8080/empresas').then((response) => {
      setEmpresas(response.data);
    });
  }
  const getAgentes = () => {
    Axios.get('http://grifo:8080/agentes').then((response) => {
      setAgentes(response.data);
    });
  }
  const getBercos = () => {
    Axios.get('http://grifo:8080/bercos').then((response) => {
      setBercos(response.data);
    });
  }
  const getDate = () => {
    return moment(new Date()).format("YYYY-MM-DD HH:mm")
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const addOperacao = () => {
    Axios.post('http://grifo:8080/operacao/criar', {
      empresa: empresa,
      navio: id,
      rap: rap,
      agente: agente,
      berco: berco,
      eta: moment(eta).format("YYYY-MM-DD HH:mm"),
      previsao: moment(previsao).format("YYYY-MM-DD HH:mm"),
      status: 'AGUARDANDO DI/BL',
      usuario: usuario,
      data: getDate()
    })
      .then(function (res) {
        console.log(res);
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Nova Operação cadastrada com sucesso!', 'success');
          setTimeout(() => {
            navigate("/navios")
          }, 2000);
      });
  }


  const validaDados = () => {
    if (!empresa |!agente| !eta | !previsao | !rap | !berco) {
      showAlert('Preencha todos os campos!', 'error')
      return;
    }
    addOperacao()
  }

  return (
    <>
      <Navbar navios />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate("/navios")}>Voltar</div>
            <div className={style.active}>
              Cadastrar Operação
            </div>
          </div>
          <div className={style.navio}>
            <i className="fa fa-ship icon"></i>
            &nbsp;&nbsp;&nbsp;
            {nome}
          </div>
          <div className={style.flex}>
            <div className={style.form_control}>
              <label>Empresa:</label><br/>
              <select onChange={(e) => [setEmpresa(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {empresas?.map((val, key) => {
                  return (
                    <option value={val.COD_EMPRESA}>{val.NOME_EMPRESA}</option>
                  )
                })}
              </select>
            </div>
            <div className={style.form_control}>
              <label>Agente:</label>
              <select onChange={(e) => [setAgente(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {agentes?.map((val, key) => {
                  return (
                    <option value={val.COD_AGENTE}>{val.NOME_AGENTE}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className={style.flex}>
            
            <Input
              type={"datetime-local"}
              text={"ETA"}
              onChange={(e) => [setEta(e.target.value)]}
            />
            <Input
              type={"datetime-local"}
              text={"Previsão de Atracação"}
              onChange={(e) => [setPrevisao(e.target.value)]              
              }
            />
            <Input
              type={"text"}
              text={"RAP"}
              onChange={(e) => [setRap(e.target.value.toUpperCase())]}
            />
            <div className={style.form_control}>
              <label >Berço:</label>

              <select onChange={(e) => [setBerco(e.target.value)]}>
                <option disabled selected>Selecione uma opção</option>
                {bercos?.map((val, key) => {
                  return (
                    <option value={val.COD_BERCO}>{val.NOME_BERCO}</option>
                  )
                })}
              </select>
            </div>

          </div>
          <SubmitButton text={"Cadastrar"} onClick={validaDados} />
        </div>
      </Container>
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={2500}>
      <CadastroOperacao />
    </SnackbarProvider >
  );
}