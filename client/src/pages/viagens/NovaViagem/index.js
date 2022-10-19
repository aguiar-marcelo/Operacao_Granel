import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./NovaViagem.module.css";


const NovaViagem = () => {

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
      <Navbar viagens />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <a href="/viagens">
              <div>
                Viagens
              </div>
            </a>
            <a >
              <div className={style.active}>
              Nova Viagem
              </div>
            </a>
          </div>
          
          <div className={style.flex}>
            <div className={style.form_item}>
              <div>Nome</div>
              <input type="text" />
            </div>

            <div className={style.form_item}>
              <div>Lloyd / Imo</div>
              <input type="text" />
            </div>

            <div className={style.form_item}>
              <div>País</div>
              <select>
                <option disabled selected></option>
                <option value="" key="">Brasil</option>
                <option value="" key="">França</option>
              </select>
            </div>

          </div>
          <div className={style.flex}>

            <div className={style.form_item}>
              <div>Calado (m)</div>
              <input type="number" />
            </div>

            <div className={style.form_item}>
              <div>Guindaste</div>
              <select>
                <option disabled selected></option>
                <option value="" key="">Sim</option>
                <option value="" key="">Não</option>
              </select>
            </div>

            <div className={style.form_item}>
              <div>Capacidade (Kg)</div>
              <input type="number" />
            </div>

          </div>
          <div className={style.flex}>
            <div className={style.form_item}>
              <div>Tipo</div>
              <input type="text" />
            </div>

            <div className={style.form_item}>
              <div>Porões</div>
              <input type="number" />
            </div>

            <div className={style.form_item}>
              <div>Ativo</div>
              <select>
                <option disabled selected></option>
                <option value="" key="">Sim</option>
                <option value="" key="">Não</option>
              </select>
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

export default NovaViagem;