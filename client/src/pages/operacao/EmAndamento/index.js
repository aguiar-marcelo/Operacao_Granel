import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./EmAndamento.module.css"



const EmAndamento = () => {

  const navigate = useNavigate();


  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Operações em andamento
            </div>
          </div>

          <div className={style.table}>
            <div className={style.sumario}>
              <div>NAVIO</div>
              <div>BERÇO</div>
              <div>STATUS</div>
            </div>
            
            <div className={style.table_item} onClick={()=> navigate("/operacao/0")}>
              <div>HONG YUAN</div>
              <div>33</div>
              <div>ATRACAÇÃO</div>
            </div>
            <div className={style.table_item} onClick={()=> navigate("/operacao/1")}>
              <div>THE GUARDIAN</div>
              <div>38</div>
              <div>LIBERAÇÃO</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EmAndamento;