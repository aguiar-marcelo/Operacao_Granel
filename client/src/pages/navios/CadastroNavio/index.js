import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import style from "./CadastroNavio.module.css";
import MaskedInput from "../../../components/InputMask";

const CadastroNavio = () => {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [imo, setImo] = useState("");
  const [bandeira, setBandeira] = useState("");

  const [values, setValues] = useState({});
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const addNavio = () => {
    Axios.post('http://localhost:8080/navio/criar', {
      nome: nome,
      imo: imo,
      bandeira: bandeira
    })
      .then(function (res) {
        console.log(res);
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Navio cadastrado com sucesso!', 'success');

      });
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const validaDados = () => {
    if (!nome | !imo | !bandeira) {
      showAlert('Preencha todos os campos!', 'error')
      return;
    }
    if (imo.length < 7) {
      showAlert('Imo deve conter 7 digitos!', 'error')
      return;
    }
    addNavio();
  }

  return (
    <>
      <Navbar navios />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate("/navios")}>
              Navios
            </div>
            <div className={style.active}>
              Cadastrar Navio
            </div>
          </div>

          <div className="columns">

            <div className="column is-4">
              <Input
                type={"text"}
                text={"Nome do navio"}
                onChange={(e) => [setNome(e.target.value.toUpperCase())]}
              />
            </div>
            <div className="column is-2">
              <MaskedInput
                text={'IMO'}
                name={'IMO'}
                mask={'9999999'}
                value={values.Imo}
                placeholder={'0000000'}
                onChange={(e) => [setImo(e.target.value.toUpperCase())]}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-3">
              <Input
                type={"text"}
                text={"Bandeira"}
                placeholder={"ex: China"}
                onChange={(e) => [setBandeira(e.target.value.toUpperCase())]}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-5">
              <SubmitButton text={"Cadastrar"} onClick={validaDados} />
            </div>
          </div>
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
      <CadastroNavio />
    </SnackbarProvider >
  );
}