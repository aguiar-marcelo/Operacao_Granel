import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Liberacao.module.css";

const Liberacao = () => {

  return (
    <>
      <Navbar operacao/>
      <Header />
      <Brackground />
      <Container>

        <div className={style.form}>
          <div className={style.navio}>
            <select>
              <option value="" key="">Selecione o navio</option>
            </select>
          </div>
          <div className={style.inputs}>
            <div className={style.item}>
              <div>Preparação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Término da Preparação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Atracação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Início da Operação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Término da Operação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Término da Limpeza da Moega</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Entrega da Verredura</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Início da Operação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Liberação</div>
              <input type="datetime-local" />
            </div>
          </div>

        </div>
        <div className={style.submit}>
          <button>Registrar</button>
        </div>

      </Container>
    </>
  );
};

export default Liberacao;