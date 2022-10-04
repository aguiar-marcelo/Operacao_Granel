import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Relatorios.module.css";

const Relatorios = () => {

  return (
    <>
      <Navbar relatorios />
      <Header />
      <Brackground />
      <Container>
        Relatorios
      </Container>
    </>
  );
};

export default Relatorios;