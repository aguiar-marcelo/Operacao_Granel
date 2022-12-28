import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Dialog from '@mui/material/Dialog';
import { Navigate, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import style from "./Navios.module.css";

const Navios = (props) => {

  const navigate = useNavigate();

  const [navioList, setNavioList] = useState([]);
  const [busca, setBusca] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getNavios();
  }, [])

  const getNavios = () => {
    Axios.get('http://localhost:8080/navio').then((response) => {
      setNavioList(response.data)
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar navios />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>            
              <div className={style.active}>
                Navios
              </div>
                     
              <div onClick={()=> navigate("/navios/cadastro")}>
                Cadastrar Navio
              </div>            
          </div>

          <div className={style.table}>
            <div className={style.sumario}>
              <div >NOME</div>
              <div>LLOYD/IMO</div>
              <div>STATUS</div>
              <div></div>
            </div>           
                    <div className={style.table_item}>
                      <div>Megazord</div>
                      <div>554449</div>
                      <div>Paralizado</div>                      
                      <div>
                      <button className={style.button_atraca} title="Nova Viagem" onClick={handleClickOpen}><i className="fa fa-anchor"></i> </button>
                      </div>                      
                    </div>   
                    <div className={style.table_item}>
                      <div>Megazord</div>
                      <div>988411</div>
                      <div>Paralizado</div>                      
                      <div>
                      <button className={style.button_atraca} title="Nova Atracação" onClick={handleClickOpen}><i className="fa fa-anchor"></i> </button>
                      </div>                      
                    </div>                        
          </div>
        </div>
        

      </Container>
      <Dialog open={open} onClose={handleClose}>
                

        <div className={style.modal}>
          <div className={style.title}>
            <div className={style.active}>
             Atracação
            </div>
          </div>

          <div className={style.form_item}>
            
            <div>ETA</div>
            <input type="text" />
            
          </div>

          <div className={style.form_item}>
            <div>ATA</div>
            <input type="text" />
          </div>

          <div className={style.form_item}>
            <div>Berço</div>
            <input type="text" />
          </div>
          <div className={style.form_item}>
            <div>Mudança de berço</div>
            <input type="text" />
          </div>

          <div className={style.form_item}>
            <div>Reatracação</div>
            <input type="text" />
          </div>

          <div className={style.form_item}>
            <div>Operador</div>
            <input type="text" />
          </div>

          <div className={style.form_item}>
            <div>Agente do navio</div>
            <input type="text" />
          </div>

          <div className={style.submit}>
            <SubmitButton text={"Cadastrar"} onClick={handleClose} className={style.form_item}/>
             
          </div>


        </div>

      </Dialog>
    </>
  );
};

export default Navios;