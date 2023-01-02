import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemInicial.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";

const PesagemInicial = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar veiculos />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate("/veiculos")}>
              Cadastrar Motorista
            </div>
            <div className={style.active}>
              Pesagem inicial
            </div>
          </div>
          <div className={style.flex}>
          <Input type={"text"} text={"Transportadora"} name={"name"} placeholder={"ex:...."} />
          <Input type={"text"} text={"Peso vazio (Tara)"} name={"name"} placeholder={"ex:...."} />
          <Input type={"text"} text={"Destino"} name={"name"} placeholder={"ex:...."} />
          </div>
          <div className={style.flex}>
          <Input type={"text"} text={"Selecione a balança"} name={"name"} placeholder={"Fazer select"} />
          <Input type={"text"} text={"BL ou DI"} name={"name"} placeholder={"ex: 10kg...."} />
          <Input type={"text"} text={"Selecione o navio"} name={"name"} placeholder={"ex: Fazer select"} /> 
          <Input type={"datetime-local"} text={"Data e hora"} name={"name"} placeholder={"ex:...."} />
          </div>
          
          <SubmitButton text={"Cadastrar"}/>     
        </div>
      </Container>
    </>
  );
};

export default PesagemInicial;