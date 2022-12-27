import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Motivacao.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";

const Motivacao = () => {
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
              Motivação(?)
            </div>
            <div onClick={() => navigate("/veiculos/PesagemInicial")}>
              Pesagem inicial
            </div>
            <div onClick={() => navigate("/veiculos/PesagemComCarga")}>
              Pesagem com carga
            </div>           
            
            <div onClick={() => navigate("/veiculos/UltimaPesagem")}>
              Última Pesagem
            </div>
          </div>
            <div className={style.flex}>
            <div className={style.flex}>
            <Input type={"text"} text={"Modelo do veículo"} placeholder={"ex: 9 eixos"} />
            <Input type={"text"} text={"Peso líquido"} placeholder={"ex: 40.000kg"} />
          </div>
          <div className={style.flex}>
            <Input type={"datetime-local"} text={"Data e hora"} placeholder={"dd/mm/aaaa 00:00"} />
            
          </div>
            
          
          

            </div>
            <SubmitButton text={"Cadastrar"} />

          </div>


      </Container>

    </>
  );
};

export default Motivacao;