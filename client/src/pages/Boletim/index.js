import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Boletim.module.css";

const Boletim = (props) => {

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



  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <Navbar cbibl />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.active}>
              Cadastramento De Boletim
            </div>
          </div>


          <form onSubmit={handleSubmit}>

            <div>
              Tipo de Operação
              <input
                type="text"
                value={TipoOp}
                onChange={e => setOP(e.target.value)}
              />

            </div>
            <div>

              Período de Trabalho
              <input
                type="text"
                value={Periodo}
                onChange={e => setPeriodo(e.target.value)}
              />

            </div>
            <div>

              Inicio...........(Data e Hora da primeira Lingada)
              <input
                type="text"
                value={Inicio}
                onChange={e => setInicio(e.target.value)}
              />

            </div>
            <div>

              Término...........(Data e Hora da última Lingada)
              <input
                type="text"
                value={Termino}
                onChange={e => setTermino(e.target.value)}
              />

            </div>
            <div>

              Terno
              <input
                type="text"
                value={Terno}
                onChange={e => setTerno(e.target.value)}
              />

            </div>
            <div>

              Porão
              <input
                type="text"
                value={Porao}
                onChange={e => setPorao(e.target.value)}
              />

            </div>
            <div>

              Termino da Operação
              <input
                type="text"
                value={TerminoOp}
                onChange={e => setTerminoOP(e.target.value)}
              />

            </div>
            <div>

              Equipamento a bordo
              <input
                type="text"
                value={EquipBordo}
                onChange={e => setEquipBordo(e.target.value)}
              />

            </div>
            <div>

              Equipamento de terra 1
              <input
                type="text"
                value={EquipTerra1}
                onChange={e => setEquipTerra1(e.target.value)}
              />

            </div>
            <div>

              Equipamento de Terra 2
              <input
                type="text"
                value={EquipTerra2}
                onChange={e => setEquipTerra2(e.target.value)}
              />

            </div>
            <div>

              Quantidade de pessoas a bordo
              <input
                type="text"
                value={QtdBordo}
                onChange={e => setQtdBordo(e.target.value)}
              />

            </div>
            <div>

              Quantidade de pessoas em terra
              <input
                type="text"
                value={QtdTerra}
                onChange={e => setQtdTerra(e.target.value)}
              />

            </div>
            <div>

              Largo
              <input
                type="text"
                value={Largo}
                onChange={e => setLargo(e.target.value)}
              />

            </div>
            <div>

              Número do Gerador
              <input
                type="text"
                value={NumeroGerador}
                onChange={e => setNumeroGerador(e.target.value)}
              />

            </div>
            <div>

              Hora do abastecimento
              <input
                type="text"
                value={Abastecimento}
                onChange={e => setAbastecimento(e.target.value)}
              />

            </div>
            <div>

              Quantidade de abastecimento (LTS)
              <input
                type="text"
                value={QtdAbastecimento}
                onChange={e => setQtdAbastecimento(e.target.value)}
              />

            </div>
            <div>

              Numero de paralizações (Obrigatório)
              <input
                type="text"
                value={QtdParalisacao}
                onChange={e => setQtdParalisacao(e.target.value)}
              />

            </div>
            <div>

              Boletim nº
              <input
                type="text"
                value={Nboletim}
                onChange={e => setNboletim(e.target.value)}
              />

            </div>

            <input type="submit" value="Submit" />

          </form>
        </div>
      </Container>

    </>
  );
};

export default Boletim;