import React from "react";
import { useEffect, useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Confirm from '@mui/material/Dialog';
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

  const registrarAtracacao = () => {
    if (date == "") {
      showAlert("Preencha a data e horário!", 'error');
      return
    }
    Axios.put('http://grifo:8080/operacao/registrar/atracacao',
      {
        id: i,
        date: date
      }).then(function (res) {
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Documentação concluida com sucesso!', 'success');
        FecharConfirm();
        getOperacoes();
        setDate("");
      });
  }


  const abrirDash = (id, status) => {
    if (status == "AGUARDANDO DI/BL") {
      showAlert('Documentação deve ser concluida antes de acessar o Dashboard', 'error')
    }

    if (status == "AGUARDANDO ATRACAÇÃO") {
      setI(id)
      AbrirConfirm()
    }

    if (status == "OPERANDO") {
      navigate(`/operacao/${id}`)
    }
  }

  const [openA, setOpenA] = useState(true);
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
      <Confirm open={openA} onClose={FecharConfirm} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div onClick={FecharConfirm}>Voltar </div>
          </div>
          <div className={modal.center}>
            Deseja registrar a Atracação desta Operação?
            <br />
            <div>ao confirmar o Dashboard será liberado!</div>
          </div>
          <div className={modal.inputbox}>
            <Input
              type={"datetime-local"}
              text={"Data e hora da Atracação"}
              onChange={(e) => [setDate(e.target.value)]}
            />
          </div>
          <div className={modal.flex}>
            <button className={modal.cancelar} onClick={FecharConfirm}>CANCELAR</button>
            <button className={modal.confirmar} onClick={registrarAtracacao}>CONFIRMAR</button>
          </div>
        </div>
      </Confirm>
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={2500}>
      <EmAndamento />
    </SnackbarProvider >
  );
}