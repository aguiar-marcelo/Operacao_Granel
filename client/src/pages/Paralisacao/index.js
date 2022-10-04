import React from "react";
import Navbar from "../../components/Navbar";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import style from "./Paralisacao.module.css";

const Paralisacao = () => {

  return (
    <>
      <Navbar paralisacao/>
      <Header />
      <Brackground />
      <Container>

        <div className={style.form}>
          <div className={style.navio}>
            <select>
              <option value="" key="">Selecione o navio</option>
            </select>
          </div>
          <div className={style.inputs}>
            <div className={style.item}>
              <div>Período</div>
              <select id="Tipo">
                <option value="">selecione</option>
                <option value="">01H - 07H</option>
                <option value="">07H - 13H</option>
                <option value="">13H - 19H</option>
                <option value="">19H - 01H</option>
              </select>
            </div>
            <div className={style.item}>
              <div>Início da Paralisação</div>
              <input type="datetime-local" />
            </div>
            <div className={style.item}>
              <div>Término da Paralisação</div>
              <input type="datetime-local" />
            </div>
          </div>
          <div className={style.inputs}>
            <div className={style.item}>
              <div>Motivo</div>
              <select>
                <option value="">Especifique o motivo</option>
                <option value="Rompimento do Cabo">Aguardando abertura de porão</option>
                <option value="Pilha descarregada">Aguardando arqueação de calados</option>
                <option value="Aguardando atracação">Aguardando atracação</option>
                <option value="Aguardando carga">Aguardando carga</option>
                <option value="Aguardando inspeção de porões">Aguardando inspeção de porões</option>
                <option value="Aguardando liberação das autoridades">Aguardando liberação das autoridades</option>
                <option value="Aguardando liberação das esteiras">Aguardando liberação das esteiras</option>
                <option value="Aguardando operador de shiploader/porainer/guindaste">Aguardando operador de shiploader/porainer/guindaste</option>
                <option value="Aguardando pessoal de capatazia">Aguardando pessoal de capatazia</option>
                <option value="Aguardando pessoal de estiva">Aguardando pessoal de estiva</option>
                <option value="Chuva">Chuva</option>
                <option value="Colocação de máquina de rechego a bordo">Colocação de máquina de rechego a bordo</option>
                <option value="Defeito elétrico/mecânico na balança de fluxo">Defeito elétrico/mecânico na balança de fluxo</option>
                <option value="Defeito elétrico/mecânico nas esteiras transportadoras">Defeito elétrico/mecânico nas esteiras transportadoras</option>
                <option value="Defeito elétrico/mecânico no equipamento de bordo">Defeito elétrico/mecânico no equipamento de bordo</option>
                <option value="Defeito elétrico/mecânico no equipamento de terra">Defeito elétrico/mecânico no equipamento de terra</option>
                <option value="Defeito na máquina de rechego">Defeito na máquina de rechego</option>
                <option value="Defeito no tampa do porão">Defeito no tampa do porão</option>
                <option value="Falta de energia elétrica">Falta de energia elétrica</option>
                <option value="Falta de material de estivagem">Falta de material de estivagem</option>
                <option value="Falta de pessoal de estiva">Falta de pessoal de estiva</option>
                <option value="Falta de pessoal de capatazia">Falta de pessoal de capatazia</option>
                <option value="Fechamento de porão">Fechamento de porão</option>
                <option value="Forração de porão">Forração de porão</option>
                <option value="Inspeção das esteiras transporadoras">Inspeção das esteiras transporadoras</option>
                <option value="Limpeza das esteiras transporadoras">Limpeza das esteiras transporadoras</option>
                <option value="Manobra de equipamento a bordo">Manobra de equipamento a bordo</option>
                <option value="Manobra de equipamento a bordo">Manobra de equipamento a terra</option>
                <option value="Manobra de esteira transporadoras">Manobra de esteira transporadoras</option>
                <option value="Mudança de armazém">Mudança de armazém</option>
                <option value="Mudança de porão">Mudança de porão</option>
                <option value="Preparação das esteiras transportadoras">Preparação das esteiras transportadoras</option>
                <option value="Puxada ou mudança de navio">Puxada ou mudança de navio</option>
                <option value="Rechego a bordo">Rechego a bordo</option>
                <option value="Recusa de carga">Recusa de carga</option>
                <option value="Retirada de máquina de rechego a bordo">Retirada de máquina de rechego a bordo</option>
                <option value="Retorno de carga">Retorno de carga</option>
                <option value="Término das operações">Término das operações</option>
                <option value="Troca de máquina de rechego">Troca de máquina de rechego</option>
                <option value="Vistoria a bordo">Vistoria a bordo</option>
                <option value="Preparação à bordo">Preparação à bordo</option>
                <option value="Preparação a terra">Preparação a terra</option>
                <option value="Aguardando transporte">Aguardando transporte</option>
                <option value="Colocação ou retirada de empilhadeira do navio">Colocação ou retirada de empilhadeira do navio</option>
                <option value="Escorregamento de carga a bordo">Escorregamento de carga a bordo</option>
                <option value="Peação/Desapeação de carga geral / veiculo / container">Peação/Desapeação de carga geral / veiculo / container</option>
                <option value="Defeito na empilhadeira">Defeito na empilhadeira</option>
                <option value="Movimentação caixa castanha">Movimentação caixa castanha</option>
                <option value="Aguardando carga de vazios">Aguardando carga de vazios</option>
                <option value="Troca de spreader">Troca de spreader</option>
                <option value="Aguardando spreader">Aguardando spreader</option>
                <option value="Defeito spreader">Defeito spreader</option>
                <option value="Despeação">Despeação</option>
              </select>
            </div>
            <div className={style.item}>
              <div>Observação</div>
              <input type="text" />
            </div>

          </div>

        </div>
        <div className={style.submit}>
          <button>Registrar</button>
        </div>

        <div className={style.sumario}>
          <div>Navio</div>
          <div>Periodo</div>
          <div>Início da Paralisação</div>
          <div>Término da Paralisação	</div>
          <div>Causa</div>
          <span className={style.last}>Motivo</span>
        </div>

      </Container>
    </>
  );
};

export default Paralisacao;