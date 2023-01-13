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

  const [openA, setOpenA] = useState(false);
  const DetalhesNavio = () => {
    setOpenA(true);
  };
  const FecharDetalhesNavio = () => {
    setOpenA(false);
  };



  return (
    <>
      <Navbar navios />
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

            <div className={style.table_item} onClick={DetalhesNavio}>
              <div>HONG YUAN</div>
              <div>554449</div>
              <div>CHINA</div>
              <div>Aguardando Atracação</div>
            </div>
            <div className={style.table_item} onClick={DetalhesNavio}>
              <div>THE GUARDIAN</div>
              <div>164729</div>
              <div>BRASIL</div>
              <div>Paralizado</div>
            </div>
          </div>
        </div>
      </Container>



      <Detalhes open={openA} onClose={FecharDetalhesNavio} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharDetalhesNavio}>Voltar</div>
            <div className={modal.active}>Detalhes do Navio</div>
          </div>

          <div className={modal.center}>
            <div className={modal.status}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;AGUARDANDO ATRACAÇÃO</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.detalhebox}>
              <div><b>Nome:</b> HONG YUAN</div>
            </div>
            <div className={modal.detalhebox}>
              <div><b>IMO:</b> 554449</div>
            </div>
            <div className={modal.detalhebox}>
              <div><b>Bandeira:</b> CHINA</div>
            </div>
          </div>
          <div className={modal.center}>
            <div className={modal.cargas}>
              DI/BL cadastrados
              <div className={modal.sumario}>
                <div>TIPO</div>
                <div>CÓDIGO</div>
                <div>IMPORTADOR</div>
                <div>PRODUTO</div>
                <div>QT. MANIFESTADA</div>
              </div>
              <div className={modal.lista}>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>
                <div className={modal.item}>
                  <div>BL</div>
                  <div>05</div>
                  <div>YARA BRASIL FERT.</div>
                  <div>URÉIA</div>
                  <div>40000KG</div>
                </div>

              </div>
            </div>
          </div>
          <div className={modal.flex}>
            <button className={modal.finalizar}onClick={() => navigate("/cadastro-carga")}>
              EDITAR CARGA</button>
            <button className={modal.finalizar} onClick={() => navigate("/cadastro-operacao")}
            >INICIAR OPERAÇÃO</button>
          </div>
        </div>

      </Detalhes>
    </>
  );
};

export default Navios;