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
//a

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


  //modal de 2 pesagem
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
            <div onClick={() => navigate(`/operacao/${id}/aberturaperiodo`)} className={style.active}>
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
                <i class="fa fa-truck"></i> AGUARDANDO AUTOS
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
                DESCARREGADO
                <div>43.520 KG</div>
              </div>
              <div>
                DESCARREGADO
                <div>43.520 KG</div>
              </div>
              <div>
                DESCARREGADO
                <div>43.520 KG</div>
              </div>
              <div>
                DESCARREGADO
                <div>43.520 KG</div>
              </div>
            </div>
          </div>
          {/*<div className={style.flex}>
            <div>
              Total manifestado
              <div className={style.peso}>
                450000 KG
              </div>
            </div>
            <div>
              Total descarregado
              <div className={style.peso}>
                150000 KG
              </div>
            </div>
            <div>
              Status
              <div className={style.status}>
                Operando
              </div>
            </div>
          </div>


           <div className={style.flex}>
            <div className={style.veiculo}>
              <button onClick={AbrirPesagem}>+ PESAR VEÍCULO</button>
              <div className={style.listaveiculos}>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>
                <div className={style.veiculoitem}>
                  <i class="fa fa-truck"></i>
                  <div className={style.placa}>KDJ3948</div>
                  <div className={style.horario}>12:30</div>
                </div>

              </div>
            </div>
            <div className={style.row}>
              <div>
                Período aberto
                <div className={style.peso}>
                  07:00 - 13:00
                </div>
                <button className={style.encerrar}>ENCERRAR ESSE PERIODO</button>
              </div>
              <div className={style.paralisacao}>
                <button onClick={AbrirParalisacao}>INICIAR PARALISAÇÃO <i class="fa fa-exclamation-triangle"></i></button>
              </div>

            </div>

            <div className={style.finalizar}>
              <div className={style.detalhes}>
                **Colocação de máquina de rechego a bordo
              </div>
              <button>FINALIZAR OPERAÇÃO</button>
            </div>
          </div> */}
        </div>
      </Container>
      {/* <Pesagem open={openA} onClose={FecharPesagem} >
        <div className={style.modal}>

          <div className={style.modal}>
            <div className={style.title}>
              2º Pesagem
            </div>
            <div className={style.form_item}>
              <div>Selecione um dos veiculos que ja tiraram a Tara</div>
              <select >
                <option value="" key="" selected></option>
                <option value="" key="">DSK2983</option>
                <option value="" key="">FFK2983</option>
                <option value="" key="">BVT9A28</option>
              </select>
            </div>
            <div className={style.form_item}>

              <div>Modelo do veículo</div>
              <select >
                <option value="" key="" selected></option>
                <option value="" key="">9 eixos</option>
                <option value="" key="">9 eixos</option>
                <option value="" key="">9 eixos</option>
              </select>

            </div>

            <div className={style.form_item}>
              <div>Data e hora</div>
              <input type="datetime-local" />
            </div>

            <div className={style.form_item}>
              <div>Peso líquido carregado</div>
              <input type="number" />
            </div>


            <div className={style.submit}>
              <SubmitButton text={"Adicionar"} onClick={FecharPesagem} className={style.form_item} />
            </div>
          </div>

        </div>
      </Pesagem>
      <Paralisacao open={openB} onClose={FecharParalisacao} fullWidth={true}>

        <div className={style.modalb}>
          <div className={style.title}>
            Paralisação
          </div>
          <div className={style.form_item}>
            <div>Motivo</div>
            <select className={style.motivo}>
              <option value="" key="" selected></option>
              <option value="" key="">DSK2983</option>
              <option value="" key="">FFK2983</option>
              <option value="" key="">BVT9A28</option>
            </select>
          </div>

          <div className={style.flexb}>

            <div>
              <div className={style.form_item}>
                <div>Início (horário)</div>
                <input type="datetime-local" />
              </div>
              <div className={style.form_item}>
                <div>Paralisação total neste período?</div>
                <label className={style.radio_box}>
                  <input
                    type="radio"
                    name="total"
                    value={"Sim"}
                  />
                  Sim
                  <span className={style.checkmark}></span>
                </label>

                <label className={style.radio_box}>
                  <input
                    type="radio"
                    name="total"
                    value={"Não"}
                  />
                  Não
                  <span className={style.checkmark}></span>
                </label>
              </div></div>
            <div className={style.form_item}>

              <div>Observações</div>
              <textarea cols="30" rows="7"></textarea>

            </div>
          </div>

          <div className={style.submitb}>
            <button>Iniciar</button>
          </div>
        </div>

      </Paralisacao> */}
    </>
  );
};

export default Operacao;
