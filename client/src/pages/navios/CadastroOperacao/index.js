import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Select from "../../../components/select"
import SubmitButton from "../../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./CadastroOperacao.module.css";

const CadastroOperacao = () => {


  const navigate = useNavigate();

  const [navioList, setNavioList] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getNavios();

  }, [])

  const getNavios = () => {
    Axios.get('http://localhost:8080/navio').then((response) => {
      setNavioList(response.data)
    });
  }

  return (
    <>
      <Navbar navios />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Cadastrar Operação
            </div>
            <div onClick={() => navigate("/cadastro-carga")}>
              Cadastrar Carga
            </div>
          </div>
          <div className={style.navio}>
            <i className="fa fa-ship icon"></i>
            &nbsp;&nbsp;&nbsp;
            HONG YUAN
          </div>
          <div className={style.flex}>
            <Select
              type={"text"}
              text={"Operador Portuário"}
              name={"name"}
            />
            <Select
              type={"text"}
              text={"Agente"}
              name={"name"}
            />
          </div>
          <div className={style.flex}>
            <Input
              type={"date"}
              text={"ETA"}
              name={"name"}
              placeholder={"ex: China"}
            />
            <Input
              type={"date"}
              text={"Previsão de Atracação"}
              name={"name"}
              placeholder={"ex: China"}
            />
            <Input
              type={"text"}
              text={"RAP"}
              name={"name"}
              placeholder={"ex: 1234/2023"}
            />
            <Select
              type={"text"}
              text={"Berço"}
              name={"name"}
            />
          </div>
          <SubmitButton text={"Próximo"} />
        </div>
      </Container>
    </>
  );
};

export default CadastroOperacao;