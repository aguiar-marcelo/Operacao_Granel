import React from "react";
import { useEffect, useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./EmAndamento.module.css"
import modal from "./Modal.module.css"


const EmAndamento = () => {

  const navigate = useNavigate();
  const [operacoesList, setOperacoesList] = useState([]);
  const [i, setI] = useState(0);

  const [date, setDate] = useState("");

  useEffect(() => {
    getOperacoes()
  }, [])

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const getOperacoes = () => {
    Axios.get('http://grifo:8080/operacao').then((response) => {
      setOperacoesList(response.data)
    });
  }


  const abrirDash = (id, status) => {
    if (status == "AGUARDANDO DI/BL") {
      showAlert('Documentação deve ser concluída antes de acessar o Dashboard', 'error')
    }

    if (status == "AGUARDANDO ATRACAÇÃO") {
      showAlert('Um usuário autorizado deve registrar a atracação!', 'error')
    }

    if (status == "OPERANDO" ||status == "PARALISADO") {
      navigate(`/operacao/${id}`)
    }
  }

  const [openA, setOpenA] = useState(false);
  const AbrirConfirm = () => {
    setOpenA(true);
  };
  const FecharConfirm = () => {
    setOpenA(false);
  };

  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Operações em andamento
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
                  // onClick={() => navigate("/operacao/0")}>
                  onClick={() => { abrirDash(val.COD_OPERACAO, val.STATUS_OPERACAO) }}>
                  <div>{val.NOME_NAVIO || "-"} </div>
                  <div>{val.NOME_BERCO || "-"}</div>
                  <div>{val.STATUS_OPERACAO || "-"}</div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={3000}>
      <EmAndamento />
    </SnackbarProvider >
  );
}