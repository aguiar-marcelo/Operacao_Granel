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
import Select from "../../../components/select";


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


  const [openA, setOpenA] = useState(false);

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

          <div className={style.table}>
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
            <div onClick={DetalhesNavio} className={style.table_item}>
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

      <Dialog maxWidth={true} open={open} onClose={handleClose}>
        <div className={style.modal}>
          <div className={style.title}>
            <div className={style.active}>
              Preparação pra Início da Operação
            </div>
          </div>
          <div className={"columns"}>
            <div className={"column"} >

              <div className={style.selecti}>
                <div class="control">
                  <div>
                    Grab
                  </div>
                  <label class="radio">
                    <input type="radio" value="empilhadeira" name="grab" />Próprio
                  </label>
                  <label class="radio">
                    <input type="radio" value="escavadeira." name="grab" />Alugado
                  </label>
                </div>
              </div>
              <Input text={'Data e hora'} type={'datetime-local'} name={'ETA'} />
              <Input text={'Homens em terra'} type={'text'} name={'ETA'} />
              <Input text={'ATA'} type={'text'} name={'ETA'} />
              <Input text={'Produto'} type={'text'} name={'ETA'} />
              <Input text={'Plataforma'} type={'text'} name={'ETA'} />

            </div>
            <div className={"column"} >


              <div className={style.selecti}>
                <div class="control">
                  <div>
                    Requisição
                  </div>
                  <label class="radio">
                    <input type="radio" value="empilhadeira" name="Requisicao" /> Empilhadeira
                  </label>
                  <label class="radio">
                    <input type="radio" value="escavadeira." name="Requisicao" /> Escavadeira
                  </label>
                </div>
              </div>
              <Input text={'ETA'} type={'text'} name={'ETA'} />


              <Input text={'Porão'} type={'text'} name={'ETA'} />
              <Input text={'Moega'} type={'text'} name={'moega'} />
              <Input text={'Homens a Bordo'} type={'text'} name={'ETA'} />
              <Input text={'Agente select'} type={'text'} name={'ETA'} />
            </div>
            <div className={"column is-4"} >
              <div className={style.selecti}>
                <div class="control">
                  <div>
                    Gerador
                  </div>

                  <label class="radio">

                    <input type="radio" value="empilhadeira" name="gerador" />Próprio
                  </label>
                  <label class="radio">
                    <input type="radio" value="escavadeira." name="gerador" />Alugado
                  </label>
                </div>
              </div>
              <div className={style.selecti}>
                Conexo
                <div>
                  <input type="radio" value="Serrapilheira." name="conexo" /> Arrumação da Serrapilheira
                </div>
                <input type="radio" value="Female" name="conexo" /> Mudança de Berço/Puxada
              </div>
              <Select name={"alguma coisa"} text={"Operador"} />
              <Input text={'Gaiola de segurança'} type={'text'} name={'ETA'} />
              <Input text={'Berço'} type={'text'} name={'ETA'} />


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