import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./UltimaPesagem.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import { useState } from "react";

const UltimaPesagem = () => {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState();
  const [pesofinal, setPesofinal] = useState();
  const [data, setData] = useState();

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
              <div onClick={() => navigate("/veiculos/PesagemInicial")}>
                Pesagem Inicial
              </div>
              <div className={style.active}>
                Pesagem Final
              </div>
            </div>
          </div>
          <div className={'columns'}>
            <div className={'column is-2'}>
              <div className={style.periodo}>
                <Input text={'Buscar CPF'} name={'buscarmotorista'} placeholder={'ex: 000.000.000-00'} />
              </div>

            </div>
            <div className={'column'}>
              <div className={style.submit}>
                <SubmitButton text={'Buscar'} />
              </div>
            </div>

            <div className={style.box}>
              <div>Motorista: Adilson de Jesus Silva Ferreira</div>
              <div>CPF: 460.050.968-42</div>
              <div>CNH: 002.566.58-65 </div>
            </div>
          </div>



          <div className="columns">
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
          </div>
          <div className="column">
            <div className="column">
              <div className={style.input}>
                <Input type={'text'} text={'Peso do veículo carregado'} placeholder={'10.000kg'} />
                <Input type={'datetime-local'} text={'Peso do veículo carregado'} />
              </div>
            </div>
          </div>

          <SubmitButton text={"Cadastrar"} />

        </div>
      </Container>

    </>
  );
};

export default UltimaPesagem;