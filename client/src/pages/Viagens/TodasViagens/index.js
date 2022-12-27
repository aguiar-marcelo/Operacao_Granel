import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Viagens.module.css";


const Viagens = () => {


  return (
    <>
      <Navbar viagens />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <a>
              <div className={style.active}>
                Todas Viagens
              </div>
            </a>
            <a href="/viagens/Carga">
              <div >
                Cadastrar Carga
              </div>
            </a>
          </div>
          <div className={style.table}>
            <div className={style.sumario}>
              <div>RAP</div> {/*Nao sera listado todos dados da viagem, somente qnd clicar */}
              <div className={style.center}>EMPRESA</div>
              <div className={style.center}>NAVIO</div>
              <div className={style.center}>AGENCIA</div>
              <div className={style.center}>ETA</div>
              <div className={style.center}>PREV. ATRACAÇÃO</div>
              <div className={style.center}>CARGA</div>
              <div className={style.center}>STATUS</div>
              <div className={style.center}></div>
            </div>

            <div className={style.table_item}>
              <div>RAP</div> {/*Nao sera listado todos dados da viagem, somente qnd clicar */}
              <div className={style.center}>EMPRESA</div>
              <div className={style.center}>NAVIO</div>
              <div className={style.center}>AGENCIA</div>
              <div className={style.center}>ETA</div>
              <div className={style.center}>PREV. ATRACAÇÃO</div>
              <div className={style.center}>CARGA</div>
              <div className={style.center}>STATUS</div>
              <div className={style.center}>
              <a href="/operacao/em-andamento"><button className={style.button_atraca} title="Iniciar Operação"><i className="fa fa-calendar"></i></button></a>
              </div>
            </div>
          </div>        

        </div>


      </Container>
    </>
  );
};

export default Viagens;