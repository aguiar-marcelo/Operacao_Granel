import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Motivacao.module.css";
import { Navigate, useNavigate } from "react-router-dom";

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
            <div onClick={() => navigate("/veiculos/PesagemComCarga")}>
              Pesagem com carga
            </div>
            <div onClick={() => navigate("/veiculos/PesagemInicial")}>
              pesagem inicial
            </div>
            <div className={style.active}>
              Motivação
            </div>
          </div>
            <div className={style.flex}>

              <div className={style.form_item}>
                <div>Placa do CAVALO</div>
                <input type="text" />
              </div>

              <div className={style.form_item}>
                <div>Placa da CARRETA</div>
                <input type="text" />
              </div>

              <div className={style.form_item}>
                <div>Nome do motorista</div>
                <input type="text" />
              </div>

              <div className={style.form_item}>
                <div>CPF do motorista</div>
                <input type="text" />
              </div>

            </div>
            <div className={style.flex}>

              <div className={style.form_item}>
                <div>SELECT PARA ESCOLHER O NAVIO </div>
                <input type="number" />
              </div>
            </div>
            <div className={style.form_item}>
              <button>Cadastrar</button>
            </div>

          </div>


      </Container>

    </>
  );
};

export default Motivacao;