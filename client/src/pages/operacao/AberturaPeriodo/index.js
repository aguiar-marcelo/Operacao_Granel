import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./AberturaPeriodo.module.css"
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import { Navigate, useNavigate, useParams } from "react-router-dom";

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


  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate(`/operacao/${id}`)}>
              Voltar
            </div>
            <div className={style.active}>
              Abrir Período
            </div>

          </div>


          <form onChange={handleSubmit}>

            <div className={style.flex}>
              <Input text={'Tipo de operação'} type={'text'} defaultValue={TipoOp} name={'tipoOP'} onChange={e => setOP(e.target.value)} />
              <Input text={'Período de Trabalho'} type={'text'} defaultValue={Periodo} name={'tipoOP'} onChange={e => setPeriodo(e.target.value)} />
              <Input text={'Inicio...........(Data e Hora da primeira Lingada)'} type={'text'} defaultValue={Inicio} name={'tipoOP'} onChange={e => setInicio(e.target.value)} />
            </div>

            <div className={style.flex}>
              <Input text={'Término...........(Data e Hora da última Lingada)'} type={'text'} defaultValue={Termino} name={'tipoOP'} onChange={e => setTermino(e.target.value)} />
              <Input text={'Terno'} type={'text'} defaultValue={Terno} name={'tipoOP'} onChange={e => setTerno(e.target.value)} />
              <Input text={'Porão'} type={'text'} defaultValue={Porao} name={'tipoOP'} onChange={e => setPorao(e.target.value)} />

            </div>
            <div className={style.flex}>
              <Input text={'Termino da Operação'} type={'text'} defaultValue={TerminoOp} name={'tipoOP'} onChange={e => setTerminoOP(e.target.value)} />
              <Input text={'Equipamento a bordo'} type={'text'} defaultValue={EquipBordo} name={'tipoOP'} onChange={e => setEquipBordo(e.target.value)} />
              <Input text={'Equipamento de terra 1'} type={'text'} defaultValue={EquipTerra1} name={'tipoOP'} onChange={e => setEquipTerra1(e.target.value)} />
            </div>
            <div className={style.flex}>
              <Input text={'Equipamento de Terra 2'} type={'text'} defaultValue={EquipTerra2} name={'tipoOP'} onChange={e => setEquipTerra2(e.target.value)} />
              <Input text={'Quantidade de pessoas a bordo'} type={'text'} defaultValue={QtdBordo} name={'tipoOP'} onChange={e => setQtdBordo(e.target.value)} />
              <Input text={'Quantidade de pessoas em terra'} type={'text'} defaultValue={QtdTerra} name={'tipoOP'} onChange={e => setQtdTerra(e.target.value)} />
            </div>
            <div className={style.flex}>
              <Input text={'Largo'} type={'text'} defaultValue={Largo} name={'tipoOP'} onChange={e => setLargo(e.target.value)} />
              <Input text={'Número do Gerador'} type={'text'} defaultValue={NumeroGerador} name={'tipoOP'} onChange={e => setNumeroGerador(e.target.value)} />
              <Input text={'Hora do abastecimento'} type={'text'} defaultValue={Abastecimento} name={'tipoOP'} onChange={e => setAbastecimento(e.target.value)} />
            </div>

            <div className={style.flex}>
              <Input text={'Quantidade de abastecimento (LTS)'} type={'text'} defaultValue={QtdAbastecimento} name={'tipoOP'} onChange={e => setQtdAbastecimento(e.target.value)} />
              <Input text={'Numero de paralizações (Obrigatório)'} type={'text'} defaultValue={QtdParalisacao} name={'tipoOP'} onChange={e => setQtdParalisacao(e.target.value)} />
              <Input text={'Boletim nº'} type={'text'} defaultValue={Nboletim} name={'tipoOP'} onChange={e => setNboletim(e.target.value)} />
            </div>
            <SubmitButton text={'Cadastrar'} type={"submit"} />

          </form>

        </div>
      </Container>
    </>
  );
};

export default AberturaPeriodo;