import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Pesagem.module.css";

const Pesagem = () => {

  return (
    <>
      <Navbar pesagem />
      <Header />
      <Brackground />
      <Container>
        pesagem
      </Container>
    </>
  );
};

export default Pesagem;