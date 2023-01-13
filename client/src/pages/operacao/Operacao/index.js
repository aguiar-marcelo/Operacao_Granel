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


  const navigate = useNavigate();

  //modal de 2 pesagem
  const [openA, setOpenA] = useState(false);
  const [veiculo, setVeiculo] = useState(null); //state que indica qual veiculo o modal deve abrir
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
  let { id } = useParams();

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
            <div className={style.active} >
            Dashboard Período
            </div>
            <div onClick={() => navigate(`/operacao/${id}/AberturaPeriodo`)}>
              Abertura de Período
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
                <div className={style.item} onClick={()=>[setVeiculo(0),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>00:00</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(1),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>17:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(2),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(3),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(4),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(5),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(6),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(7),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(8),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(9),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(10),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
                </div>
                <div className={style.item} onClick={()=>[setVeiculo(11),setOpenA(true)]}>
                  <div>BLL2799</div>
                  <div>BZR5656</div>
                  <div>04:12</div>
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
            <div className={modal.active}>2º Pesagem {veiculo}</div>
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
              <input type="time" />
            </div>
            <div className={modal.inputbox}>
              Término
              <input type="time" />
            </div>
          </div>
          <div className={modal.selectbox}>
            Motivo
            <select id="Motivo">
	              <option value="00" selected></option>
	              <option value="01">1 - Acidente comn pessoal a bordo/terra.</option>
	              <option value="02">2 - Aguardando abertura de porão.</option>
                <option value="03">3 - Aguardando arqueação de calados.</option>
                <option value="04">4 - Aguardando atracação.</option>
                <option value="05">5 - Aguardando carga.</option>
                <option value="06">6 - Aguardando inspeção de porões.</option>
                <option value="07">7 - Aguardando liberação das autoridades.</option>
                <option value="08">8 - Aguardando liberação das esteiras transportadoras.</option>
                <option value="09">9 - Aguardando operador do shiploader/portainer/guindaste.</option>
                <option value="10">10 - Aguardando pessoal de capatazia.</option>
                <option value="11">11 - Aguardando pessoal de estiva.</option>
                <option value="12">12 - Chuva.</option>
                <option value="13">13 - Colocação de máquina de rechego a bordo.</option>
                <option value="14">14 - Defeito elétrico/mecânico na balança de fluxo.</option>
                <option value="15">15 - Defeito elétrico/mecânico nas esteiras transportadoras.</option>
                <option value="16">16 - Defeito elétrico/mecânico no equipamento de bordo.</option>
                <option value="17">17 - Defeito elétrico/mecânico no equipamento de terra.</option>
                <option value="18">18 - Defeito na máquina de rechego.</option>
                <option value="19">19 - Defeito no tampa do porão.</option>
                <option value="20">20 - Falta de energia elétrica.</option>
                <option value="21">21 - Falta de material de estivagem.</option>
                <option value="22">22 - Falta de pessoal de estiva.</option>
                <option value="23">23 - Falta de pessoal de capatazias.</option>
                <option value="24">24 - Fechamento de porão.</option>
                <option value="25">25 - Forração de porão.</option>
                <option value="26">26 - Inspeção das esteiras transportadoras.</option>
                <option value="27">27 - Limpeza das esteiras transportadoras.</option>
                <option value="28">28 - Manobra de equipamento de bordo.</option>
                <option value="29">29 - Manobra de equipamento de terra.</option>
                <option value="30">30 - Manobra de esteira transportadora.</option>
                <option value="31">31 - Mudança de armazém.</option>
                <option value="32">32 - Mudança de porão.</option>
                <option value="33">33 - Preparação das esteiras transportadoras.</option>
                <option value="34">34 - Puxada ou mudança do navio.</option>
                <option value="35">35 - Rechego a bordo.</option>
                <option value="36">36 - Recusa de carga.</option>
                <option value="37">37 - Retirada de máquina de rechego a bordo.</option>
                <option value="38">38 - Retorno de carga.</option>
                <option value="39">39 - Término das operações.</option>
                <option value="40">40 - Troca de máquina de rechego.</option>
                <option value="41">41 - Troca de máquina de rechego.</option>
                <option value="42">42 - Vistoria a bordo.</option>
                <option value="43">43 - Preparação à bordo.</option>
                <option value="44">44 - Preparação em terra.</option>
                <option value="45">45 - Aguardando transporte (Caminhão / Empilhadeira).</option>
                <option value="46">46 - Colocação e/ou retirada de empilhadeira do navio.</option>
                <option value="47">47 - Escoreamento de carga a bordo.</option>
                <option value="48">48 - Peação / Desapeação ded carga geral / Veiculo / Container.</option>
                <option value="49">49 - Defeito na empilhadeira.</option>
                <option value="50">50 - Movimentação caixa castanha.</option>
                <option value="51">51 - Aguardando carga de vazios.</option>
                <option value="52">52 - Troca de Spreader.</option>
                <option value="53">53 - Aguardando carga de vazios.</option>
                <option value="54">54 - Defeito Spreader.</option>
                <option value="55">55 - Despeação.</option>
                <option value="56">56 - Reoaris emergênciais da embarcação.</option>
                <option value="57">57 - Manobra de navio de guerra.</option>
                <option value="58">58 - Desatracação impedida por fenômenos da natureza.</option>
                <option value="59">59 - Demanda da Autoridade Portuária.</option>
                <option value="60">60 - Reparos da embarcação.</option>
                <option value="90">90 - Conveniência do operador.</option>
                <option value="91">91 - Aguardando puxada.</option>
                <option value="92">92 - Aguardando mudança.</option> 
          </select>
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