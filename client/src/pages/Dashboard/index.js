import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/select";
import SubmitButton from "../../components/Button"


import { SnackbarProvider, useSnackbar } from 'notistack';
import MaskedInput from "../../components/InputMask";


const Dashboard = () => {

  const [values, setValues] = useState({});
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }



  const { enqueueSnackbar } = useSnackbar();


  const showAlert = (txt, variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(txt, { variant });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Brackground />
      <Container>

        <div className="columns">
          <div className="column is-2">
            <MaskedInput
              text={'cpf'}
              name={'cpf'}
              mask={'999.999.999-99'}
              value={values.cpf}
              onChange={handleChange}
            />


          </div>
        </div>



        <h1>Dashboard</h1> <br />
        <h2>teste teste teste teste</h2>


        <SubmitButton text={"Mensagem de sucesso!"}
          func={showAlert('Cadastrado com sucesso', 'success')} />

        <SubmitButton text={"Mensagem de alerta"}
          func={showAlert('Você não tem acesso a esta página!', 'warning')} />

        <SubmitButton text={"Mensagem de erro"}
          func={showAlert('Nome incorreto!', 'error')} />

        <SubmitButton text={"Mensagem de info"}
          func={showAlert('Contate o suporte', 'info')} />


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
      <Dashboard />
    </SnackbarProvider >
  );
}