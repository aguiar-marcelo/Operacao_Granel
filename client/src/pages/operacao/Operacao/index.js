import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
import style from "./Operacao.module.css"


const Operacao = () => {
  let { id } = useParams();

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
              Voltar
            </div>
            <div onClick={()=> navigate(`/operacao/${id}/aberturaperiodo`)}>
              Abrir Período
            </div>
          </div>

          <div className={style.flex}>
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
              <button>+ PESAR VEÍCULO</button>
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
                <button>INICIAR PARALISAÇÃO <i class="fa fa-exclamation-triangle"></i></button>
              </div>

            </div>

            <div className={style.finalizar}>
              <div className={style.detalhes}>
                **Colocação de máquina de rechego a bordo
              </div>
              <button>FINALIZAR OPERAÇÃO</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Operacao;