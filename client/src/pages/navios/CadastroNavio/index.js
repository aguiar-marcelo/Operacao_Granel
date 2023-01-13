import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./CadastroNavio.module.css";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";


const CadastroNavio = () => {


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
                name={"name"}
              />
            </div>
            <div className="column is-4">
              <Input
                type={"text"}
                text={"IMO/Loyds"}
                name={"name"}
              />
            </div>
          </div>
          <div className="columns">
          <div className="column is-3">
              <Input
                type={"text"}
                text={"Bandeira"}
                name={"name"}
                placeholder={"ex: China"}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-5">
              <SubmitButton text={"Cadastrar"} />
            </div>
          </div>











        </div>


      </Container>
    </>
  );
};

export default CadastroNavio;