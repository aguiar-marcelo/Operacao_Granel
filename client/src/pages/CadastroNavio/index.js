import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./CadastroNavio.module.css";

const CadastroNavio = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Brackground />
      <Container>
        <div className={style.form}>
          <div className={style.inputs}>
            <div className={style.item}>
              <div>IMO</div>
              <input type="text" />
            </div>
            <div className={style.item}>
              <div>Lloyd</div>
              <input type="text" />
            </div>
            <div className={style.item}>
              <div>Nome do Navio</div>
              <input type="text" />
            </div>
            <div className={style.item}>
              <div>Status</div>
              <select id="status">
                <option value=""></option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
            <div className={style.item}>
              <div>Tipo</div>
              <select>
                <option value=""></option>
                <option value="convencional">Convencional</option>
                <option value="granel">Granel</option>
              </select>
            </div>
            <div className={style.item}>
              <div>Loa</div>
              <input type="text" />
            </div>
            <div className={style.item}>
              <div>Boca</div>
              <input type="text" />
            </div>
            <div className={style.item}>
              <div>Armador</div>
              <select>
                <option value=""></option>
                <option value="op1">op1</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
              </select>
            </div>
            <div className={style.item}>
              <div>Bandeira</div>
              <input type="text" />
            </div>
          </div>
        <div className={style.submit}>
          <button>INCLUIR PORÃO</button>

        </div>
        </div>
      </Container>
    </>
  );
};

export default CadastroNavio;