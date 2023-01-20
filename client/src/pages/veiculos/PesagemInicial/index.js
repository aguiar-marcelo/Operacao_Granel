import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemInicial.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import Select from "../../../components/select";
import { useState } from "react";
import Axios from "axios";
import { SnackbarProvider, useSnackbar } from 'notistack';



const PesagemInicial = () => {
  const navigate = useNavigate();


  const [pesagem, setPesagem] = useState();
  const [navio, setNavio] = useState();
  const [transportadora, setTransportadora] = useState();
  const [tara, setTara] = useState();
  const [produto, setProduto] = useState();
  const [destino, setDestino] = useState();
  const [placa1, setPlaca1] = useState();
  const [placa2, setPlaca2] = useState();
  const [placa3, setPlaca3] = useState();
  const [modelo, setModelo] = useState();
  const [balanca, setBalanca] = useState();
  const [di, setDi] = useState();
  const [bl, setBl] = useState();
  const [data, setData] = useState();
  const [motorista, setMotorista] = useState({});


  const getMotorista = () => {
    Axios.get(`http://grifo:8080/motorista/busca/${cpf}`,)
      .then(function (res) {
        console.log(res.data);
      });
  }

  const [values, setValues] = useState({});
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }
  let { nome } = useParams();
  let { cpf } = useParams();
  let { cnh } = useParams();


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
                Pesagem inicial
              </div>
              <div onClick={() => navigate("/veiculos/UltimaPesagem")}>
                Pesagem Final
              </div>
            </div>
          </div>


          <div className={style.align}>
            <div className="columns">
              <div className="column is-4">
                <div className={style.box}>
                  <div>Motorista: Adilson de Jesus Silva Ferreira</div>
                  <div>CPF: 460.050.968-42</div>
                  <div>CNH: 002.566.58-65 </div>
                </div>
                <div className={style.radio}>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" value="Pesagem completa" name="gerador" />Pesagem completa
                    </label>
                    <label className="radio">
                      <input type="radio" value="Pesagem moega" name="gerador" />Pesagem moega
                    </label>
                  </div>
                </div>

                <Select text={"Selecione o navio"} />
                <Input type={"text"} text={"Transportadora"} name={"name"} placeholder={"ex: IC transporte"} />
                <Input type={"text"} text={"Peso vazio (Tara)"} name={"name"} placeholder={"ex: 1000kg"} />

              </div>
              <div className="column is-3">
                <Input type={"text"} text={"Produto"} name={"name"} placeholder={"Ex: Uréia"} />
                <Input type={"text"} text={"Destino"} name={"name"} placeholder={"ex: Limeira"} />
                <div className={style.placas}>
                  <Input type={"text"} text={"Placa 1"} name={"name"} placeholder={"ex: 0a00aaa"} />
                  <Input type={"text"} text={"Placa 2"} name={"name"} placeholder={"ex: 0a00aaa"} />
                  <Input type={"text"} text={"Placa 3"} name={"name"} placeholder={"ex: 0a00aaa"} />
                </div>
                <Select text={"Modelo do veículo"} />

              </div>

              <div className="column is-4">

                <Select text={"Selecione a balança"} />
                <Select text={"DI'S"} />
                <Select text={"BL'S"} />

                <Input type={"datetime-local"} text={"Data e hora"} name={"name"} />
              </div>
            </div>

          </div>
          <SubmitButton text={"Cadastrar"} className={style.button} />

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
      <PesagemInicial />
    </SnackbarProvider >
  );
}