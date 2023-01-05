import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Pesagem from '@mui/material/Dialog';
import Paralisacao from '@mui/material/Dialog';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import style from "./Operacao.module.css"
import modal from "./Modal.module.css"


const Operacao = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  //modal de 2 pesagem
  const [openA, setOpenA] = useState(false);
  const AbrirPesagem = () => {
    setOpenA(true);
  };
  const FecharPesagem = () => {
    setOpenA(false);
  };


  //modal de paralisacao
  const [openB, setOpenB] = useState(false);
  const AbrirParalisacao = () => {
    setOpenB(true);
  };
  const FecharParalisacao = () => {
    setOpenB(false);
  };

  return (
    <>
      <Navbar operacao />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate(`/operacoes`)} >
              Voltar
            </div>
            <div className={style.active}>
              Dashboard Período
            </div>
          </div>

          <div className={style.flex}>
            <div className={style.periodo}>
              13H - 19H
              <div className={style.data}>
                02/01/2023
              </div>
            </div>
            <div className={style.status}>
              <div>
                <i class="fa fa-truck"></i>&nbsp;&nbsp;AGUARDANDO AUTOS
              </div>
            </div>
          </div>
          <div className={style.flex}>
            <div className={style.tara}>
              1º Pesagem (Tara)
              <div className={style.sumario}>
                <div>CAVALO</div>
                <div>CARRETA</div>
                <div>HORÁRIO</div>
              </div>
              <div className={style.lista}>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>22:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
              </div>
            </div>
            <div className={style.autos}>
              <div><i class="fa fa-stopwatch"></i> 13h x 14h = 1 Autos</div>
              <div><i class="fa fa-stopwatch"></i> 14h x 15h = 2 Autos</div>
              <div><i class="fa fa-stopwatch"></i> 15h x 16h = 3 Autos</div>
              <div><i class="fa fa-stopwatch"></i> 16h x 17h = 4 Autos</div>
              <div><i class="fa fa-stopwatch"></i> 17h x 18h = 4 Autos</div>
              <div><i class="fa fa-stopwatch"></i> 18h x 19h = 4 Autos</div>
            </div>
            <div className={style.motivo}>
              <div className={style.sumariob}>
                <div className={style.motivobox}>MOTIVO</div>
                <div className={style.sumariobox}>DURAÇÃO</div>
              </div>
              <div className={style.listab}>
                <div className={style.itemb}>
                  <div className={style.motivoitem}>Chuva</div>
                  <div className={style.sumarioitem}>00:35</div>
                </div>
                <div className={style.itemb}>
                  <div className={style.motivoitem}>Manuten. GRCMAC</div>
                  <div className={style.sumarioitem}>00:35</div>
                </div>
                <div className={style.itemb}>
                  <div className={style.motivoitem}>Manuten. gerador</div>
                  <div className={style.sumarioitem}>00:25</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.flex}>
            <div className={style.pesos}>
              <div>
                DESCARREGADO
                <div>43.520 KG</div>
              </div>
              <div>
                MANIFESTADO
                <div>43.520 KG</div>
              </div>
              <div>
                PRODUTO
                <div>43.520 KG</div>
              </div>
              <div>
                EQUIPAMENTO
                <div>MOEGA 4</div>
              </div>
              <div>
                AUTOS
                <div>8</div>
              </div>
            </div>
          </div>
          <div className={style.flex}>
            <button
              className={style.abrirp}
              onClick={AbrirParalisacao}>
              ABRIR PARALISAÇÃO
            </button>
            <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;HONG YUAN</div>
            <button
              className={style.finalizar}>
              FINALIZAR OPERAÇÃO
            </button>
          </div>
        </div>
      </Container>
      <Pesagem open={openA} onClose={FecharPesagem} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div>Voltar</div>
            <div className={modal.active}>2º Pesagem</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.periodo}>
              13H - 19H
              <div className={modal.data}>
                02/01/2023
              </div>
            </div>
            <div className={modal.motorista}>
              <div><b>Motorista: </b>Adilson de Jesus</div>
              <div><b>Cavalo: </b>BLL-2799</div>
              <div><b>Carreta: </b>BLL-2799</div>
              <div><b>1º Pesagem (tara): </b>41.500 KG</div>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={modal.inputbox}>
              2º Pesagem
              <input type="text" />
            </div>
            <div className={modal.inputbox}>
              Data
              <input type="text" />
            </div>
            <div className={modal.inputbox}>
              Horário
              <input type="text" />
            </div>
          </div>
          <div className={modal.flex}>
            <div className={modal.textbox}>
              Observação
              <textarea rows="4"></textarea>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;HONG YUAN</div>
            <button className={style.finalizar}>REGISTRAR 2ºPESAGEM</button>
          </div>
        </div>
      </Pesagem>
      <Paralisacao open={openB} onClose={FecharParalisacao} fullWidth>
        <div className={modal.modal}>
          <div className={modal.nav}>
            <div>Voltar</div>
            <div className={modal.active}>Abertura de Paralisação</div>
          </div>
          <div className={modal.flex}>
            <div className={modal.periodo}>
              13H - 19H
              <div className={modal.data}>
                02/01/2023
              </div>
            </div>
            <div className={modal.inputbox}>
              Início
              <input type="text" />
            </div>
            <div className={modal.inputbox}>
              Término
              <input type="text" />
            </div>
          </div>
          <div className={modal.selectbox}>
            Motivo
            <select></select>
          </div>
          <div className={modal.selectbox}>
            Complemento
            <select></select>
          </div>
          <div className={modal.flex}>
            <div className={modal.textbox}>
              Observação
              <textarea rows="4"></textarea>
            </div>
          </div>
          <div className={modal.flex}>
            <div className={style.navio}><i className="fa fa-ship icon"></i>&nbsp;&nbsp;&nbsp;HONG YUAN</div>
            <button className={style.finalizar}>REGISTRAR PARALISAÇÃO</button>
          </div>
        </div>
      </Paralisacao>
    </>
  );
};

export default Operacao;