import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./AberturaPeriodo.module.css";

const AberturaPeriodo = () => {

  return (
    <>
      <Navbar aperiodo />
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
              <select id="Tipo">
                <option value="">Periodo</option>
                <option value="">01H - 07H</option>
                <option value="">07H - 13H</option>
                <option value="">13H - 19H</option>
                <option value="">19H - 01H</option>
              </select>
            </div>
            <div className={style.item}>
              <select id="Tipo">
                <option value="">Porão</option>
                <option value="op1">Opção 1</option>
                <option value="op2">Opção 2</option>
              </select>
            </div>
            <div className={style.item}>
              <select id="Tipo">
                <option value="">Moega</option>
                <option value="Moega 1">Moega 1</option>
                <option value="Moega 2">Moega 2</option>
                <option value="Moega 3">Moega 3</option>
              </select>
            </div>

          </div>
          <div className={style.inputs}>
            <div className={style.item}>
              <div>Quantidade de pessoas a bordo</div>
              <input type="number" min="0" />
            </div>
            <div className={style.item}>
              <div>Quantidade de pessoas em terra</div>
              <input type="number" min="0" />
            </div>
          </div>
        </div>
        <div className={style.submit}>
          <button>Incluir</button>
        </div>

        <div className={style.sumario}>
          <div>Navio</div>
          <div>Periodo	</div>
          <div>Porão</div>
          <div>Moega</div>
          <div>Pessoas a bordo</div>
          <span className={style.last}>Pessoas em terra</span>
        </div>

      </Container>
    </>
  );
};

export default AberturaPeriodo;