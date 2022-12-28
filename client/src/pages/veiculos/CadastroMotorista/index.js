import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./CadastroMotorista.module.css";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";


const CadastroMotorista = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar veiculos />
            <Header />
            <Brackground />
            <Container>
                <div className={style.content}>
                    <div className={style.nav}>
                        <div className={style.active}>
                            Cadastrar Motorista
                        </div>
                        <div onClick={() => navigate("/veiculos/pesageminicial")}>
                            Pesagem inicial
                        </div>
                    </div>
                    <div className={style.flex}>
                        <Input type={"text"} text={"Nome do motorista"} name={"nome"} placeholder={""} />
                        <Input type={"text"} text={"CPF do motorista"} name={"cpf"} placeholder={"ex:000.000.000-00"} />
                    </div>
                    <SubmitButton text={"Cadastrar"} />
                </div>
            </Container>
        </>
    );
};

export default CadastroMotorista;