import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./AberturaPeriodo.module.css"
import SubmitButton from "../../../components/Button";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Input from "../../../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../../../components/select";
import Axios from "axios";
import { useState, useEffect } from "react";



const AberturaPeriodo = () => {

  useEffect(() => {
    getEquipamentos();
    getPeriodos();
    getBercos();
    VerificaPeriodo();
  }, [])

  let { id } = useParams();
  const [equipamento, setEquipamento] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [berco, setBerco] = useState("");
  const [qtbordo, setQtBordo] = useState("");
  const [qtterra, setQtTerra] = useState("");
  const [gerador, setGerador] = useState("");
  const [grab, setGrab] = useState("");
  const [porao, setPorao] = useState("");
  const [requisicao, setRequisicao] = useState("");
  const [conexo, setConexo] = useState("");
  const [inicio, setInicio] = useState("");
  const [existePeriodo, setExistePeriodo] = useState(0);
  const usuario = JSON.parse(localStorage.getItem("user_token")).id;

  const [equipamentos, setEquipamentos] = useState([]);
  const [periodos, setPeriodos] = useState([]);
  const [bercos, setBercos] = useState([])

  const navigate = useNavigate();

  const getDate = () => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  const getEquipamentos = () => {
    Axios.get('http://grifo:8080/equipamentos').then((response) => {
      setEquipamentos(response.data)
    });
  }
  const getPeriodos = () => {
    Axios.get('http://grifo:8080/periodos/horarios').then((response) => {
      setPeriodos(response.data)
    });
  }
  const getBercos = () => {
    Axios.get('http://grifo:8080/bercos').then((response) => {
      setBercos(response.data);
    });
  }

  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }

  const VerificaPeriodo = () => {
    Axios.get(`http://grifo:8080/periodo/busca/${id}`,)
      .then(function (res) {
        setExistePeriodo(res.data[0].EXISTE)
      })
    }

  const addPeriodo = () => {
    Axios.post('http://grifo:8080/periodo/criar', {
      operacao: id,
      periodo: periodo,
      inicio: inicio,
      berco: berco,
      qtbordo: qtbordo,
      qtterra: qtterra,
      porao: porao,
      moega: equipamento,
      conexo: conexo,
      requisicao: requisicao,
      gerador: gerador,
      grab: grab,
      usuario: usuario,
      dtcadastro: getDate()
    })
      .then(function (res) {
        console.log(res);
        res.data.sqlMessage ?
          showAlert(res.data.sqlMessage, 'error') :
          showAlert('Nova Operação cadastrada com sucesso', 'success');
         setTimeout(() => {
          navigate(`/operacao/${id}`)
         }, 2000);
      });
  }

  const validaDados = () => {
    if (!grab | !periodo | !qtterra | !berco | !gerador | !equipamento | !qtbordo | !porao | !inicio) {
      showAlert('Preencha todos os campos!', 'error')
      return;
    }
    addPeriodo()
  }


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
          {existePeriodo == 1 ?
          <div className={style.notform}> O período atual deve ser encerrado para abrir um novo!</div>
            :
            <div className={style.modal}>
            {/* <div className={style.modal}>{id+" "+grab +" "+ periodo +" "+ qtterra +" "+ berco +" "+ gerador +" "+ equipamento +" "+ qtbordo +" "+ porao +" "+ inicio} */}
              <div className={"columns"}>
                <div className={"column"} >
                  <div className={style.selecti}>
                    <div className="control">
                      <div>
                        Grab
                      </div>
                      <label className="radio">
                        <input
                          type="radio"
                          name="grab"
                          value={"PRÓPRIO"}
                          onChange={(e) => { setGrab(e.target.value) }}
                        /> Próprio
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          name="grab"
                          value={"ALUGADO"}
                          onChange={(e) => { setGrab(e.target.value) }}
                        />Alugado
                      </label>
                    </div>
                  </div>
                  <div className={style.form_control}>
                    <label>Período (TERNO):</label>
                    <select onChange={(e) => [setPeriodo(e.target.value)]}>
                      <option disabled selected>Selecione uma opção</option>
                      {periodos?.map((val) => {
                        return (
                          <option value={val.COD_PERIODO}>{val.DEN_PERIODO}</option>
                        )
                      })}
                    </select>
                  </div>
                  <Input text={'Homens em terra'} type={'number'} onChange={(e) => [setQtTerra(e.target.value)]} />
                  <div className={style.form_control}>
                    <label>Berço:</label>
                    <select onChange={(e) => [setBerco(e.target.value)]}>
                      <option disabled selected>Selecione uma opção</option>
                      {bercos?.map((val) => {
                        return (
                          <option value={val.COD_BERCO}>{val.NOME_BERCO}</option>
                        )
                      })}
                    </select>
                  </div>


                </div>
                <div className={"column"} >

                  <div className={style.selecti}>
                    <div className="control">
                      <div>
                        Gerador
                      </div>

                      <label className="radio">

                        <input
                          type="radio"
                          name="gerador"
                          value={"PRÓPRIO"}
                          onChange={(e) => { setGerador(e.target.value) }}
                        /> Próprio
                      </label>
                      <label className="radio">
                        <input
                          type="radio"
                          name="gerador"
                          value={"ALUGADO"}
                          onChange={(e) => { setGerador(e.target.value) }}
                        /> Alugado
                      </label>
                    </div>
                  </div>
                  <div className={style.form_control}>
                    <label>Moega:</label>
                    <select onChange={(e) => [setEquipamento(e.target.value)]}>
                      <option disabled selected>Selecione uma opção</option>
                      {equipamentos?.map((val) => {
                        return (
                          <option value={val.COD_EQUIPAMENTO}>{val.DESC_EQUIPAMENTO}</option>
                        )
                      })}
                    </select>
                  </div>
                  <Input text={'Homens a Bordo'} type={'number'} onChange={(e) => [setQtBordo(e.target.value)]} />
                  <Input text={'Porão'} type={'number'} onChange={(e) => [setPorao(e.target.value)]} />


                </div>

                <div className={"column is-4"} >
                  <div className={style.selecti}>
                    Requisição
                    <div>
                      <label className="radio">
                        <input
                          type="radio"
                          name="requisicao"
                          value={"EMPILHADEIRA"}
                          onChange={(e) => { setRequisicao(e.target.value) }}
                        /> Empilhadeira
                      </label>
                    </div>
                    <label className="radio">
                      <input
                        type="radio"
                        name="requisicao"
                        value={"ESCAVADEIRA"}
                        onChange={(e) => { setRequisicao(e.target.value) }}
                      /> Escavadeira
                    </label>


                    <div className={style.conexo}>
                      Conexo
                      <div>
                        <label className="radio">
                          <input
                            type="radio"
                            name="conexo"
                            value={"ARRUMAÇÃO DE SERRAPILHEIRA"}
                            onChange={(e) => { setConexo(e.target.value) }}
                          /> Arrumação da Serrapilheira
                        </label>
                      </div>
                      <label className="radio">
                        <input
                          type="radio"
                          name="conexo"
                          value={"MUDANÇA DE BERÇO/PUXADA"}
                          onChange={(e) => { setConexo(e.target.value) }}
                        /> Mudança de Berço/Puxada
                      </label>
                    </div>
                  </div>
                  <Input text={'Data e Hora de início'} type={'datetime-local'} onChange={(e) => { setInicio(e.target.value) }} />
                </div>
              </div>
              <div className={style.submit}>
                <SubmitButton text={"INICIAR PERÍODO"} onClick={validaDados} className={style.form_item} />
              </div>
            </div>
          }

        </div>
      </Container>
    </>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={3}
      autoHideDuration={2500}>
      <AberturaPeriodo />
    </SnackbarProvider >
  );
}