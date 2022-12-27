import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./UltimaPesagem.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";

const UltimaPesagem = () => {
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
            <div onClick={() => navigate("/veiculos/Motivacao")}>
              Motivação
            </div>
            <div onClick={() => navigate("/veiculos/PesagemInicial")}>
              Pesagem inicial
            </div>
            <div onClick={() => navigate("/veiculos/PesagemComCarga")}>
              Pesagem com carga
            </div>            
            
            <div className={style.active}>
              Última Pesagem
            </div>
          </div>

          <div className={style.flex}>
          <Input type={"datetime-local"} text={"Data e hora"} name={"name"} placeholder={"ex:...."} />          
          <Input type={"text"} text={"Peso final do veículo"} name={"name"} placeholder={"ex:...."} />
          </div>    
          <SubmitButton text={"Cadastrar"}/>  
        </div>
      </Container>

    </>
  );
};

export default UltimaPesagem;