import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./AberturaPeriodo.module.css"
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../../../components/select";

import { useState } from "react";



const AberturaPeriodo = () => {
  const [TipoOp, setOP] = useState("");
  const [Periodo, setPeriodo] = useState("");
  const [Inicio, setInicio] = useState("");
  const [Termino, setTermino] = useState("");
  const [Terno, setTerno] = useState("");
  const [Porao, setPorao] = useState("");
  const [TerminoOp, setTerminoOP] = useState("");
  const [EquipBordo, setEquipBordo] = useState("");
  const [EquipTerra1, setEquipTerra1] = useState("");
  const [EquipTerra2, setEquipTerra2] = useState("");
  const [QtdBordo, setQtdBordo] = useState("");
  const [QtdTerra, setQtdTerra] = useState("");
  const [Largo, setLargo] = useState("");
  const [NumeroGerador, setNumeroGerador] = useState("");
  const [Abastecimento, setAbastecimento] = useState("");
  const [QtdAbastecimento, setQtdAbastecimento] = useState("");
  const [QtdParalisacao, setQtdParalisacao] = useState("");
  const [Nboletim, setNboletim] = useState("");
  const [InicioParalizacao, setInicioParalizacao] = useState("");
  const [FimParalizacao, setFimParalizacao] = useState("");
  const [DataPralizacao, setDataPralizacao] = useState("");
  const [ParalizacaoTotal, setParalizacaoTotal] = useState("");
  const [MotivoParalizacao, setMotivoParalizacao] = useState("");
  const [ObservacaoParalizacao, setObservacaoParalizacao] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }


  const op = [{'name': 'Rodrimar'}, {'name': 'bl 884-57'}];

  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
          <div onClick={() => navigate(`/operacoes`)}>
              Operações em andamento
            </div>
            <div onClick={() => navigate(`/operacao/${id}`)}>
            Dashboard Período
            </div>
            <div className={style.active}>
              Abertura de Período
            </div>

          </div>


          <div className={style.modal}>

            <div className={"columns"}>
              <div className={"column"} >

                <div className={style.selecti}>
                  <div className="control">
                    <div>
                      Grab
                    </div>
                    <label className="radio">
                      <input type="radio" value="empilhadeira" name="grab" />Próprio
                    </label>
                    <label className="radio">
                      <input type="radio" value="escavadeira." name="grab" />Alugado
                    </label>
                  </div>
                </div>
                <Input text={'Data e hora'} type={'datetime-local'} name={'ETA'} />
                <Input text={'Homens em terra'} type={'text'} name={'ETA'} />

                <Input text={'Produto'} type={'text'} name={'ETA'} />
                <Input text={'Plataforma'} type={'text'} name={'ETA'} />
                <Input text={'Berço'} type={'text'} name={'ETA'} />


              </div>
              <div className={"column"} >

                <div className={style.selecti}>
                  <div className="control">
                    <div>
                      Gerador
                    </div>

                    <label className="radio">

                      <input type="radio" value="empilhadeira" name="gerador" />Próprio
                    </label>
                    <label className="radio">
                      <input type="radio" value="escavadeira." name="gerador" />Alugado
                    </label>
                  </div>
                </div>


                <Input text={'Porão'} type={'text'} name={'ETA'} />
                <Input text={'Moega'} type={'text'} name={'moega'} />
                <Input text={'Homens a Bordo'} type={'text'} name={'ETA'} />
                <Select text={'Agente'} options={op}/>
                
                <Input text={'Gaiola de segurança'} type={'text'} name={'ETA'} />
                
                
              </div>

              <div className={"column is-4"} >
                <div className={style.selecti}>
                  Requisição
                  <div>
                    <input type="radio" value="empilhadeira." name="Requisicao" /> Empilhadeira
                  </div>
                  <input type="radio" value="escavadeira" name="Requisicao" /> Escavadeira

                

                <div className={style.conexo}>
                  Conexo
                  <div>
                    <input type="radio" value="Serrapilheira." name="conexo" /> Arrumação da Serrapilheira
                  </div>
                  <input type="radio" value="Female" name="conexo" /> Mudança de Berço/Puxada
                </div>
                </div>               

              </div>
            </div>
            <div className={style.submit}>
              <SubmitButton text={"Iniciar Operação"} className={style.form_item} />
            </div>
          </div>
          

        </div>
      </Container>
    </>
  );
};

export default AberturaPeriodo;