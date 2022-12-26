import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemInicial.module.css";
import { Navigate, useNavigate } from "react-router-dom";

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
                        <div onClick={() => navigate("/veiculos/PesagemComCarga")}>
                            Pesagem com carga
                        </div>
                        <div className={style.active}>
                            pesagem inicial
                        </div>
                        <div onClick={() => navigate("/veiculos/Motivacao")}>
                            Motivação
                        </div>
                    </div>

          <div className={style.table}>
            <div className={style.form_item}>
              <div>Navio</div>
              <select>
                <option disabled selected></option>
                <option value="" key="">NAVIO 1</option>
                <option value="" key="">NAVIO 2</option>
              </select>
            </div>

            <div className={style.form_item}>
              <div>Balança</div>
              <select>
                <option disabled selected></option>
                <option value="" key="">Dínamo</option>
                <option value="" key="">Chave de Ouro</option>
                <option value="" key="">Conport</option>
                <option value="" key="">Outra</option>
              </select>
            </div>

            <div className={style.form_item}>
              <div>B/L ou DI</div>
              <input type="text" />
            </div>
            <div className={style.form_item}>
              <div>Transportadora</div>
              <input type="text" />
            </div>

            <div className={style.form_item}>
              <div>Capacidade do veículo</div>
              <input type="text" />
            </div>

            <div className={style.form_item}>
              <div>Data e hora </div>
              <input type="datetime" />
            </div>

            <div className={style.form_item}>
              <div>Peso (KG)</div>
              <input type="text" />
            </div>

          </div>
        </div>





      </Container>

    </>
  );
};

export default PesagemInicial;