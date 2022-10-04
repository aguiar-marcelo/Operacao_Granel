import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Veiculos.module.css";

const Veiculos = () => {

  return (
    <>
      <Navbar veiculos/>
      <Header />
      <Brackground />
      <Container>
        <div className={style.aguardando}>
          <div className={style.titulo}>Veículos em Operação</div>
          <div className={style.item}>
            <span>Aguardando 1° Pesagem: </span>
            <div className={style.qt}>2</div>
          </div>
          <div className={style.item}>
            <span>Aguardando Carregamento: </span>
            <div className={style.qt}>1</div>
          </div>
          <div className={style.item}>
            <span>Aguardando 2° Pesagem: </span>
            <div className={style.qt}>4</div>
          </div>
        </div>

        <div className={style.sumario}>
          <div>Ticket	</div>
          <div>Navio</div>
          <div>Referência</div>
          <div>Empresa</div>
          <div>Transportadora</div>
          <div>Motorista</div>
          <div>Placa</div>
          <div>1° Pesagem kg</div>
          <div>Carregamento</div>
          <div>2° Pesagem kg</div>
          <div>Líquido kg</div>
          <div>Data Criação	</div>
          <span className={style.last}>Responsável</span>
        </div>
      </Container>

    </>
  );
};

export default Veiculos;