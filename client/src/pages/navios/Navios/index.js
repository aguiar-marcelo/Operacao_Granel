import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./Navios.module.css";
import Dialog from '@mui/material/Dialog';
import Detalhes from '@mui/material/Dialog';
import { Navigate, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";


const Navios = (props) => {

  const navigate = useNavigate();

  const [navioList, setNavioList] = useState([]);
  const [busca, setBusca] = useState("");
 


  useEffect(() => {
    getNavios();
  }, [])

  const getNavios = () => {
    Axios.get('http://localhost:8080/navio').then((response) => {
      setNavioList(response.data)
    });
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openA, setOpenA] = useState(true);

  const DetalhesNavio = () => {
    setOpenA(true);
  };
  const FecharDetalhesNavio = () => {
    setOpenA(false);
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

            <div onClick={() => navigate("/navios/cadastro")}>
              Cadastrar Navio
            </div>
          </div>

          <div  className={style.table}>
            <div className={style.sumario}>
              <div >NOME</div>
              <div>LLOYD/IMO</div>
              <div>STATUS</div>
              <div></div>
            </div>
            
              <div onClick={DetalhesNavio} className={style.table_item}>
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

      <Dialog maxWidth={false} open={open} onClose={handleClose}>
        <div className={style.modal}>
          <div className={style.title}>
            <div className={style.active}>
              Atracação
            </div>
          </div>
          <div className={"columns"}>
            <div className={"column"} >
              <Input text={'Data e hora'} type={'datetime-local'} name={'ETA'} />
              <Input text={'Gaiola de segurança'} type={'text'} name={'ETA'} />
              <Input text={'Homens em terra'} type={'text'} name={'ETA'} />
              <Input text={'ATA'} type={'text'} name={'ETA'} />
              <Input text={'Produto'} type={'text'} name={'ETA'} />
              <Input text={'Operador (select)'} type={'text'} name={'ETA'} />

            </div>          
            <div className={"column"} >
              <Input text={'Grab (radio)'} type={'text'} name={'ATA'} />
              <Input text={'Plataforma'} type={'text'} name={'ETA'} />
              <Input text={'Gerador(radio)'} type={'text'} name={'ETA'} />
              <Input text={'Berço'} type={'text'} name={'ETA'} />
              <Input text={'Conexo (radio)'} type={'text'} name={'ETA'} />
              <Input text={'Agente select'} type={'text'} name={'ETA'} />
            </div>
            <div className={"column"} >
              <Input text={'Moega'} type={'text'} name={'moega'} />
              <Input text={'Homens a Bordo'} type={'text'} name={'ETA'} />
              <Input text={'ETA'} type={'text'} name={'ETA'} />
              <Input text={'Porão'} type={'text'} name={'ETA'} />
              <Input text={'Requisição (radio)'} type={'text'} name={'ETA'} />
              </div>
          </div>
          <div className={style.submit}>
            <SubmitButton text={"Iniciar Operação"} onClick={handleClose} className={style.form_item} />
          </div>
        </div>

      </Dialog>


      <Detalhes maxWidth={false} open={openA} onClose={FecharDetalhesNavio}>
      <div className={style.modal}>
          <div className={style.title}>
            <div className={style.active}>
              Detalhes do Navio
            </div>
          </div>
          <div className={style.contentmodal}>
          <div>Aguardando atracação <i className="fa fa-ship icon"></i></div>
          </div>
          <div className={style.modal2}>
             <div className={style.contentmodal2}>
             Nome: HONG YUAN
             </div>
             <div className={style.contentmodal2}>
             RAP: 1234/2023
             </div>
             <div className={style.contentmodal2}>
             Operador Portuário: 45787651567
             </div>
             <div className={style.contentmodal2}>
             IMO/ Loyds: 3
             </div>
             <div className={style.contentmodal2}>
             Agente do Navio: MSC 
             </div>
              
          </div>

          
        </div>
      </Detalhes>
    </>
  );
};

export default Navios;