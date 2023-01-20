import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./CadastroMotorista.module.css";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
import MaskedInput from "../../../components/InputMask";
import { SnackbarProvider, useSnackbar } from 'notistack';

const CadastroMotorista = () => {

    const [nome, setNome] = useState("");
    const usuario = JSON.parse(localStorage.getItem("user_token")).id;
    const [cnh, setCnh] = useState("");
    const [cpf, setCpf] = useState("");

    const getMotorista = () => {
        Axios.post("http://grifo:8080/motorista/criar", {
            nome: nome,
            cpf: cpf,
            cnh: cnh,
            usuario: usuario
        })
            .then(function (res) {
                console.log(res);
                console.log("res");
                res.data.sqlMessage ?
                    showAlert(res.data.sqlMessage, 'error') :
                    showAlert('Motorista cadastrado com sucesso!', 'success');
            });
    }

    const { enqueueSnackbar } = useSnackbar();
    const showAlert = (txt, variant) => {
        enqueueSnackbar(txt, { variant: variant });
    }
    const validaDados = () => {
        if (!cpf | !cnh | !nome) {
            showAlert('Preencha todos os campos', 'error')
            return;
        }
        console.log("aqui foi tbm")
        getMotorista();
    }

    const [values, setValues] = useState({});
    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }
    const navigate = useNavigate();




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

                            <div className={style.active}>
                                Cadastrar Motorista
                            </div>
                            <div>
                                Pesagem inicial
                            </div>
                            <div onClick={() => navigate("/veiculos/UltimaPesagem")}>
                                Pesagem Final
                            </div>
                        </div>
                    </div>
                    <div className={'columns '}>
                        <div className={'column is-4'}>
                            <Input
                                type={"text"}
                                text={"Nome do motorista"}
                                onChange={(e) => [setNome(e.target.value.toUpperCase())]}
                            />
                        </div>
                        <div className={'column is-3'}>
                            <Input type={"text"}
                                text={"CNH do motorista"}
                                placeholder={"ex: 000.000.000"}
                                onChange={(e) => [setCnh(e.target.value.toUpperCase())]}
                            />
                        </div>
                        <div className={'column is-2'}>
                            <MaskedInput
                                text={'Buscar CPF'}
                                name={'cpf'}
                                mask={'999.999.999-99'}
                                value={values.busca}
                                placeholder={'000.000.000-00'}
                                onChange={(e) => [setCpf(e.target.value)]}

                            />
                        </div>
                    </div>
                    <SubmitButton text={"Cadastrar"} onClick={validaDados} />
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
            <CadastroMotorista />
        </SnackbarProvider >
    );
}