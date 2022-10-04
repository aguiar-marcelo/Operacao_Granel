import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Suporte.module.css";

const Suporte = () => {

  return (
    <>
      <Navbar suporte />
      <Header />
      <Brackground />
      <Container>
        Suporte
      </Container>
    </>
  );
};

export default Suporte;