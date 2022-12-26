import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemComCarga.module.css";
import { Navigate, useNavigate } from "react-router-dom";

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
                        <div className={style.active}>
                            Pesagem com carga
                        </div>
                        <div onClick={() => navigate("/veiculos/PesagemInicial")}>
                            pesagem inicial
                        </div>
                        <div onClick={() => navigate("/veiculos/Motivacao")}>
                            Motivação
                        </div>
                    </div>


        </div>


        <div className={style.sumario}>
          <div className={style.flex}>
            <div className={style.form_item}>
              <div>Navio</div>
              <input type="text" />
            </div>
            <div className={style.form_item}>
              <div>B/L ou DI</div>
              <input type="text" />
            </div>
            <div className={style.form_item}>
              <div>Data e hora</div>
              <input type="text" />
            </div>
            <div className={style.form_item}>
              <div>Peso liquido da carga</div>
              <input type="text" />
            </div>
          </div>

        </div>




      </Container>
    </>
  );
};

export default PesagemComCarga;