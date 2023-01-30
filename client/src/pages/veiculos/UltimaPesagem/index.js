import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./UltimaPesagem.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import MaskedInput from "../../../components/InputMask";
import { useState } from "react";
import Axios from "axios";
import { SnackbarProvider, useSnackbar } from 'notistack';
import moment from "moment";

const UltimaPesagem = () => {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("user_token")).id;
  const [data, setData] = useState();
  const [busca, setBusca] = useState();
  const [motorista, setMotorista] = useState({});
  const [codmotorista, setCodmotorista] = useState('');
  const [pesobruto, setPesobruto] = useState('');
  const [databruto, setDatabruto] = useState('');
  const [cpf, setCpf] = useState('');

  const getMotorista = () => {
    Axios.get(`http://grifo:8080/ultimapesagem/busca/${busca}`,)
      .then(function (res) {
        console.log(res.data);
        res.data.length > 0 ?
          setMotorista(res.data[0], showAlert('Dados do motorista', 'success')) :
          showAlert('Motorista não cadastrado', 'error');
      });
  }


  const addPesagem = () => {
    Axios.put(`http://grifo:8080/ultimapesagem`, {
      peso3: pesobruto,
      data: databruto,
      usuario: usuario,
      status:'3',
      id: motorista.ID_CARREGAMENTO
    }).then(function (res) {
      console.log(res);
      res.data.sqlMessage ?
        showAlert(res.data.sqlMessage, 'error') :
        showAlert('Pesagem cadastrada com sucesso!', 'success');
        setTimeout(() => {
          navigate("/veiculos/BuscarMotorista")
        }, 2000);
    });
  }


  const getDate = () => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const validaDados = () => {
    if (!busca) {
      return showAlert('Digite um CPF válido!', 'error');
    } else {
      getMotorista();
    }
  }

  const validaPesagem = () => {
    if (!busca | !pesobruto | !databruto) {
      showAlert('Digite um CPF válido, ou preencha todos os campos!', 'error');
      return
    }
    addPesagem()

  }



  return (
    <>
      <Navbar veiculos />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.nav}>
              <div onClick={() => navigate("/veiculos/BuscarMotorista")} >
                Buscar Motorista
              </div>
              <div onClick={() => navigate("/veiculos")}>
                Cadastrar Motorista
              </div>
              <div className={style.active}>
                Pesagem Final
              </div>
            </div>
          </div>
          <div className={'columns'}>
            <div className={'column is-2'}>
              <div className={style.periodo}>
                <MaskedInput
                  text={'Buscar CPF'}
                  name={'cpf'}
                  mask={'999.999.999-99'}
                  placeholder={'000.000.000-00'}
                  onChange={(e) => [setBusca(e.target.value)]}

                />
              </div>

            </div>
            <div className={'column'}>
              <div className={style.submit}>
                <SubmitButton text={'Buscar'} onClick={validaDados} />
              </div>
            </div>

            <div className="column is-5">
              <div className={style.box}>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <div><b className={style.name}>Motorista:</b> {motorista.NOME_MOTORISTA}</div>
                      <div><b className={style.name}>CPF:</b> {motorista.CPF_MOTORISTA}</div>
                      <div><b className={style.name}>CNH:</b> {motorista.CNH_MOTORISTA}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <div className="columns">
            <div className="column">
              <div className={style.flex}>
                <div>Peso inicial<br /><div></div></div>
                <div>Peso moega<br /><div></div></div>
                <div>Peso final<br /><div></div></div>

              </div>

              <progress className="progress is-success is-small" value="0" max="100"></progress>
              <div className={style.flex}>
                <div>Peso inicial<br /><div></div></div>
                <div>Peso moega<br /><div></div></div>
                <div>Peso final<br /><div></div></div>

              </div>

              <progress className="progress is-success is-small" value="25" max="100"></progress>

              <div className={style.flex}>
                <div>Peso inicial<br /><div></div></div>
                <div>Peso moega<br /><div></div></div>
                <div>Peso final<br /><div></div></div>
              </div>
              <progress className="progress is-success is-small" value="75" max="100"></progress>

              <div className={style.flex}>
                <div>Peso inicial<br /><div></div></div>
                <div>Peso moega<br /><div></div></div>
                <div>Peso final<br /><div></div></div>

              </div>
              <progress className="progress is-success is-small" value="100" max="100"></progress>

            </div>
            <div className="column">

            </div>
          </div> */}
          <div className="columns">
            <div className="column">
              <div className={style.input}>
                <div className={style.input2}>
                  <MaskedInput
                    text={'Peso do veículo carregado'}
                    mask={'99.999 kg'}
                    placeholder={'1.000 kg'}
                    onChange={(e) => [setPesobruto(e.target.value)]}
                  />
                </div>
                <Input type={'datetime-local'} text={'Data e Hora'}
                  onChange={(e) => setDatabruto(e.target.value)}
                />
              </div>
            </div>
          </div>

          <SubmitButton text={"Cadastrar"}
            onClick={validaPesagem}
          />

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
      autoHideDuration={2500}>
      <UltimaPesagem />
    </SnackbarProvider >
  );
}