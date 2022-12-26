import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from './Carga.module.css';
import { useNavigate } from "react-router-dom";




const Carga = () => {


  const navigate = useNavigate();


    return (
        <>
          <Navbar  />
          <Header />
          <Brackground />
          <Container>

            <div className={style.content}>
          <div className={style.nav}>
            <div>
              <div onClick={()=> navigate("/Viagens/TodasViagens")}>
                Todas Viagens
              </div>
            </div>          
              <div className={style.active}>
                Cadastrar Carga
              </div>
            
          </div>
          <div className={style.table}>
            <div className={style.sumario}>
              k
            </div>

            <div className={style.table_item}>
              
              uyu



            </div>
          </div>        

        </div>




          </Container>
        </>
    );
};


export default Carga;
