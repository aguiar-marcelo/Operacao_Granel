import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemComCarga.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";

const PesagemComCarga = () => {
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
            <div className={style.active}>
              Pesagem com carga
            </div>           
            
            <div onClick={() => navigate("/veiculos/UltimaPesagem")}>
              Última Pesagem
            </div>
          </div>



          <div className={style.flex}>
            <Input type={"text"} text={"Modelo do veículo"} placeholder={"ex: 9 eixos"} />
            <Input type={"text"} text={"Peso líquido"} placeholder={"ex: 40.000kg"} />
          </div>
          <div className={style.flex}>
            <Input type={"datetime-local"} text={"Data e hora"} placeholder={"dd/mm/aaaa"} />
            
          </div>
            
          
          <SubmitButton text={"Cadastrar"} />



        </div>



      </Container>
    </>
  );
};

export default PesagemComCarga;