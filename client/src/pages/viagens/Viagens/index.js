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
            <a >
              <div className={style.active}>
                Viagens
              </div>
            </a>
            <a href="/viagens/nova-viagem">
              <div>
                Nova Viagem
              </div>
            </a>
          </div>

          <div className={style.table}>
            <div className={style.sumario}>
              <div>EMPRESA</div>
              <div className={style.border}>RAP</div>
              <div className={style.border}>NAVIO</div>
              <div className={style.border}>AGENCIA</div>
              <div className={style.border}>ETA</div>
              <div className={style.border}>ATRACAÇÃO</div>
              <div className={style.border}>DESATRACAÇÃO</div>
              <div className={style.border}>BERÇO</div>
              <div className={style.border}>PROCESSO</div>
              <div className={style.border}>CARGA</div>
              <div className={style.border}>STATUS</div>
              <div className={style.border}></div>
            </div>

            <div className={style.table_item}>
              <div>Yara</div>
              <div>123452022</div>
              <div>MEGAZORD</div>
              <div>AGENCIA</div>
              <div>10/10/2022</div>
              <div>10/10/2022</div>
              <div>11/10/2022</div>
              <div>33</div>
              <div>1</div>
              <div>SULFATO</div>
              <div>LIBERAÇAO</div>
              <div>
                <button className={style.button_atraca} title="Atracar"><i className="fa fa-anchor"></i> </button>
              </div>
            </div>
            <div className={style.table_item}>
              <div>FERTPAR</div>
              <div>123452022</div>
              <div>MEGAZORD</div>
              <div>AGENCIA</div>
              <div>10/10/2022</div>
              <div>10/10/2022</div>
              <div>11/10/2022</div>
              <div>33</div>
              <div>1</div>
              <div>SULFATO</div>
              <div>LIBERAÇAO</div>
              <div>
                <button className={style.button_atraca} title="Atracar"><i className="fa fa-anchor"></i> </button>
              </div>
            </div>

          </div>



        </div>


      </Container>
    </>
  );
};

export default Viagens;