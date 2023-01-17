import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Suporte.module.css"

const Suporte = () => {

  return (
    <>
      <Navbar suporte />
      <Header />
      <Brackground />
      <Container>
        <div className={style.titulo_pagina}>Suporte Técnico</div>
        <div className={style.container}>
          <div className={style.texto3}>
            <strong> Olá! Como podemos ajudar? </strong>
          </div>
          <div className={style.texto2}>
            Você está com dúvidas ou precisa relatar um problema com algum serviço do Operação Granel?
            <br/> Nós podemos ajudar.
          </div>
          <div className={style.links_box}>
            <div className={style.quadrado}>
              <i class="fas fa-book icon2"></i>
              <p className={style.titulo}>Base de  Conhecimento</p>
              <p>Faça um Tour e conheça toda plataforma em  poucos minutos.</p>
            </div>
            <div className={style.quadrado}>
              <i class="fas fa-phone-alt icon2"></i>
              <p className={style.titulo}>Telefone</p>
              <p>+55 (13) 2101-8356</p>
            </div>
            <a href="https://wa.me/13981651345">
              <div className={style.quadrado}>
              <i class="fas fa fa-whatsapp icon2"></i>
              <p className={style.titulo}>WhatsApp</p>
              <p>+55 (13) 98165-1345</p>
            </div>
            </a>
            <a href="mailto:suporte@rodrimar.com.br" subject="suporte">
              <div className={style.quadrado}>
              <i class="fas fa-envelope-open-text icon2"></i>
              <p className={style.titulo}>E-mail</p>
              <p>suporte@rodrimar.com.br</p>
            </div>
            </a>
            
          </div>
        </div>
      </Container>
    </>
  );
};

export default Suporte;