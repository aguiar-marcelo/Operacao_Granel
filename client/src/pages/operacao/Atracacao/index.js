import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Atracacao.module.css";

const Atracacao = () => {

  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <a href="/operacao/atracacao">
              <div className={style.active}>
                Atracação
              </div>
            </a>
            <a href="/operacao/atracacao">
              <div>
                Liberação
              </div>
            </a>
            <a href="/operacao/atracacao">
              <div>
                Preparação
              </div>
            </a>
            <a href="/operacao/atracacao">
              <div>
                Operação
              </div>
            </a>
            <a href="/operacao/atracacao">
              <div>
                Varredura
              </div>
            </a>
            <a href="/operacao/atracacao">
              <div>
                Limpeza
              </div>
            </a>
          </div>

          {/* <div className={style.flex}>

            <div className={style.form_item}>
              <div>Início</div>
              <input type="datetime-local" />
            </div>

            <div className={style.form_item}>
              <div>Fim</div>
              <input type="datetime-local" />
            </div> 
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Atracacao;