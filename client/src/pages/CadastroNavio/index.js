import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./CadastroNavio.module.css";


const CadastroNavio = () => {

  const [navioList, setNavioList] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getNavios();

  }, [])

  const getNavios = () => {
    Axios.get('http://localhost:8080/navio').then((response) => {
      setNavioList(response.data)
    });
  }

  return (
    <>
      <Navbar cnavio />
      <Header />
      <Brackground />
      <Container>

        <div className={style.flex}>
          <button className={style.button}>+ Novo navio</button>
          <input
            className={style.busca}
            maxLength="11"
            type="text"
            placeholder='Pesquisar...'
            onChange={(event) => {
              setBusca(event.target.value);
            }} />

        </div>
        <div className={style.table}>
          <div className={style.sumario}>
            <div>NOME</div>
            <div className={style.center}>LLOYD</div>
            <div className={style.center}>IMO</div>
            <div className={style.center}>PAIS</div>
            <div className={style.center}>CALADO (m)</div>
            <div className={style.center}>GUINDASTE</div>
            <div className={style.center}>CAPACIDADE</div>
            <div className={style.center}>TIPO</div>
            <div className={style.center}>LOA</div>
            <div className={style.center}>PORÕES</div>
            <div className={style.center}>ATIVO</div>
          </div>

          {navioList.length == 0 ?
            <div className={style.zeronavio}>Nenhum navio registrado</div>
            :
            <div>
              {navioList.filter((val) => {
                if (busca == "") {
                  return val
                } else if (val.NOME_NAVIO.toLowerCase().includes(busca.toLowerCase())) {
                  return val
                }
              }).map((val, key) => {

                return (
                  <div className={style.table_item}>
                    <div>{val.NOME_NAVIO}</div>
                    <div className={style.center}>{val.NUM_LLOYD}</div>
                    <div className={style.center}>{val.IMO_NAVIO}</div>
                    <div className={style.center}>{val.COD_PAIS}</div>
                    <div className={style.center}>{val.CALADO}</div>
                    <div className={style.center}>{val.GUINDASTE}</div>
                    <div className={style.center}>{val.CAPAC_GUINDASTE}</div>
                    <div className={style.center}>{val.TIPO_NAVIO}</div>
                    <div className={style.center}>{val.LOA}</div>
                    <div className={style.center}>{val.QTDE_PORAO}</div>
                    <div className={style.center}>{val.ATIVO}</div>
                  </div>
                )
              })}

            </div>
          }
        </div>

      </Container>
    </>
  );
};

export default CadastroNavio;