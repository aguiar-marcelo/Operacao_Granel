import React from "react";
import Navbar from "../../components/Navbar";
import style from "./boletimgranel.module.css";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";

const BoletimGranel = () => {

  return (
    <>
      <Navbar boletimgranel />
      <Header />
      <Brackground />
      <Container>
      <div className={style.content}>
          <div className={style.nav}>            
              <div className={style.active}>
                Cadastramento De Boletim Granel
              </div>            
          </div>
              


          

        </div>
      </Container>

    </>
  );
};

export default BoletimGranel;