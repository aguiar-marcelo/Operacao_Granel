import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Detalhes from '@mui/material/Dialog';
import { Navigate, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/select";
import style from "./Navios.module.css";
import modal from "./Modal.module.css";

const Navios = (props) => {

  const navigate = useNavigate();

  const [naviosList, setNaviosList] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    
  }, [])

  const getNavios = () => {
    Axios.get('http://grifo:8080/navio').then((response) => {
      setNaviosList(response.data)
    });
  }

  const [openA, setOpenA] = useState(false);
  const DetalhesNavio = () => {
    setOpenA(true);
  };
  const FecharDetalhesNavio = () => {
    setOpenA(false);
  };

  const DetalharNavio = (index) => {
    setI(naviosList[index]);
  }
getNavios();
  return (
    <>
      <Navbar navs />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Navios
            </div>
            <div onClick={() => navigate("/navios/cadastro")}>
              Cadastrar Navio
            </div>
          </div>

          <div className={style.table}>
            <div className={style.sumario}>
              <div>NOME</div>
              <div>IMO/LLOYD</div>
              <div>BANDEIRA</div>
              <div>STATUS</div>
            </div>

            {naviosList.map((val, key) => {
              return (
                <div className={style.table_item}
                  onClick={() => [DetalhesNavio(), DetalharNavio(key)]}>
                  <div>{val.NOME_NAVIO || "-"}</div>
                  <div>{val.IMO_NAVIO || "-"}</div>
                  <div>{val.BANDEIRA || "-"}</div>
                  <div>{val.STATUS || "-"}</div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>

      <Detalhes open={openA} onClose={FecharDetalhesNavio} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharDetalhesNavio}>Voltar</div>
            <div className={modal.active}>Detalhes do Navio </div>
          </div>

          <div className={modal.center}>
            <div className={modal.status}><i className="fa fa-ship icon">
            </i>&nbsp;&nbsp;{i.STATUS || "-"}</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.detalhebox}>
              <div><b>Nome:</b> {i.NOME_NAVIO || "-"}</div>
            </div>
            <div className={modal.detalhebox}>
              <div><b>IMO:</b> {i.IMO_NAVIO || "-"}</div>
            </div>
            <div className={modal.detalhebox}>
              <div><b>Bandeira:</b> {i.BANDEIRA || "-"}</div>
            </div>
          </div>
          <div className={modal.flex}>
            {/* <button className={modal.finalizar} onClick={() => navigate("/cadastro-carga")}>
              EDITAR CARGA</button> */}
            <button className={modal.finalizar}
              onClick={() => navigate(`/operacao/cadastro/${i.NOME_NAVIO}/${i.COD_NAVIO}`)}>
              INICIAR OPERAÇÃO
            </button>
          </div>
        </div>

      </Detalhes>
    </>
  );
};

export default Navios;