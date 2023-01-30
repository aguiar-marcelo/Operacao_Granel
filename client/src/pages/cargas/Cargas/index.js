import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Detalhes from '@mui/material/Dialog';
import Confirm from '@mui/material/Dialog';
import Input from "../../../components/Input";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "./Cargas.module.css"
import modal from "./Modal.module.css";
import confirm from "./Confirm.module.css"

const Cargas = () => {

  const navigate = useNavigate();

  const [operacoesList, setOperacoesList] = useState([]);
  const [cargas, setCargas] = useState([]);
  const [i, setI] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    getOperacoes()
  }, [])

  const getOperacoes = () => {
    Axios.get('http://grifo:8080/operacao').then((response) => {
      setOperacoesList(response.data)
    });
  }

  const getCargas = (id) => {
    Axios.get(`http://grifo:8080/carga/busca/${id}`,)
      .then(function (res) {
        console.log(res.data);
        setCargas(res.data);
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

  const [openB, setOpenB] = useState(false);
  const AbrirConfirm = () => {
    FecharDetalhesOp()
    setOpenB(true);

  };
  const FecharConfirm = () => {
    setOpenB(false);
  };

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const registrarAtracacao = () => {
    if (date == "") {
      showAlert("Preencha a data e horário!", 'error');
      return
    }
    Axios.put('http://grifo:8080/operacao/registrar/atracacao',
      {
        id: i.COD_OPERACAO,
        date: date
      }).then(function (res) {
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Atracação registrada com sucesso!', 'success');
        FecharConfirm();
        getOperacoes();
        setDate("");
      });
  }


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
                  onClick={() => [DetalhesOp(), DetalharOp(key), getCargas(val.COD_OPERACAO)]}>
                  <div>{val.NOME_NAVIO || "-"} </div>
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
            <div className={modal.active}>Detalhes da Operação</div>
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
                {cargas.length == 0 ?
                  "nenhuma carga identificada"
                  :
                  cargas.map((val) => {
                    return (<div className={modal.item}>
                      <div>{val.TIPO}</div>
                      <div>{val.NUMERO}</div>
                      <div>{val.IMPORTADOR}</div>
                      <div>{val.PRODUTO}</div>
                      <div>{val.QTDE_MANIFESTADA}</div>
                    </div>
                    )
                  })}
              </div>
            </div>
          </div>
          <div className={modal.center}>
            {i.STATUS_OPERACAO == 'AGUARDANDO DI/BL' ?
              <button className={modal.finalizar}
                onClick={() => navigate(`/cargas/cadastro/${i.NOME_NAVIO}/${i.COD_OPERACAO}`)}>
                EDITAR CARGA
              </button>
              :
              <div className={modal.center}>Não é possivel adicionar mais DI/Bl nesta operação</div>
            }

            {i.STATUS_OPERACAO == 'AGUARDANDO ATRACAÇÃO' ?
              <button className={modal.finalizar}
                onClick={AbrirConfirm}>
                REGISTRAR ATRACAÇÃO
              </button>
              : ""}
          </div>
        </div>

      </Detalhes>
      <Confirm open={openB} onClose={FecharConfirm} fullWidth>
        <div className={confirm.modal}>
          <div className={confirm.nav}>
            <div onClick={FecharConfirm}>Voltar</div>
          </div>
          <div className={confirm.center}>
            Deseja registrar a Atracação desta Operação?
            <br />
            <div>ao confirmar o Dashboard será liberado!</div>
          </div>
          <div className={confirm.inputbox}>
            <Input
              type={"datetime-local"}
              text={"Data e hora da Atracação"}
              onChange={(e) => [setDate(e.target.value)]}
            />
          </div>
          <div className={confirm.flex}>
            <button className={confirm.cancelar} onClick={FecharConfirm}>CANCELAR</button>
            <button className={confirm.confirmar} onClick={registrarAtracacao}>CONFIRMAR</button>
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
      <Cargas />
    </SnackbarProvider >
  );
}