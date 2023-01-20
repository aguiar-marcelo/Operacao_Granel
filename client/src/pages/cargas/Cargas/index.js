import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Detalhes from '@mui/material/Dialog';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./Cargas.module.css"
import modal from "./Modal.module.css";

const Cargas = () => {

  const navigate = useNavigate();

  const [operacoesList, setOperacoesList] = useState([]);
  const [i, setI] = useState(0);

  const getOperacoes = () => {
    Axios.get('http://grifo:8080/operacao').then((response) => {
      setOperacoesList(response.data)
    });
  }

  const [openA, setOpenA] = useState(false);
  const DetalhesOp = () => {
    setOpenA(true);
  };
  const FecharDetalhesOp = () => {
    setOpenA(false);
  };
   const DetalharOp = (index) => {
    setI(operacoesList[index]);
  }

  getOperacoes();
  return (
    <>
      <Navbar cargas />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Selecione a operação
            </div>
          </div>

          <div className={style.table}>
            <div className={style.sumario}>
              <div>NAVIO</div>
              <div>BERÇO</div>
              <div>STATUS</div>
            </div>

            {operacoesList.map((val, key) => {
              return (
                <div className={style.table_item}
                onClick={()=>[DetalhesOp(),DetalharOp(key)] }>
                  <div>{val.NOME_NAVIO || "-"}</div>
                  <div>{val.NOME_BERCO || "-"}</div>
                  <div>{val.STATUS_OPERACAO || "-"}</div>
                </div>
              )
            })}

          </div>
        </div>
      </Container>

      <Detalhes open={openA} onClose={FecharDetalhesOp} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharDetalhesOp}>Voltar</div>
            <div className={modal.active}>Detalhes do Navio</div>
          </div>

          <div className={modal.center}>
            <div className={modal.status}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;{i.STATUS_OPERACAO}</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.detalhebox}>
              <div><b>Navio:</b> {i.NOME_NAVIO}</div>
            </div>
            <div className={modal.detalhebox}>
              <div><b>Berço:</b> {i.NOME_BERCO}</div>
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
            <button className={modal.finalizar} onClick={() => navigate("/cadastro-carga")}>
              EDITAR CARGA</button>
            <button className={modal.finalizar} onClick={() => navigate("/cadastro-operacao")}
            >INICIAR OPERAÇÃO</button>
          </div>
        </div>

      </Detalhes>
    </>
  );
};

export default Cargas;