import React from "react";
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import style from "./PesagemInicial.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/Button";
import Select from "../../../components/select";
import { useState, useEffect } from "react";
import Axios from "axios";
import { SnackbarProvider, useSnackbar } from 'notistack';
import MaskedInput from "../../../components/InputMask";
import moment from "moment";

const PesagemInicial = () => {
  const navigate = useNavigate();


  useEffect(() => {
    getOperacoes()
  }, [])

  const [operacoesList, setOperacoesList] = useState([]);
  const [docs, setDocs] = useState([]);

  const [doc, setDoc] = useState('');
  const [navio, setNavio] = useState('');
  const [tara, setTara] = useState('');
  const [destino, setDestino] = useState('');
  const [placacavalo, setPlacacavalo] = useState('');
  const [placa1, setPlaca1] = useState('');
  const [placa2, setPlaca2] = useState(null);
  const [placa3, setPlaca3] = useState(null);
  const [data, setData] = useState('');
  //const [tipopesagem, setTipopesagem] = useState('');
  const usuario = JSON.parse(localStorage.getItem("user_token")).id;


  const validaDados = () => {
    if (!doc | !tara | !destino | !placacavalo | !data | !placa1) {
      showAlert('Preencha todos os campos', 'error')
      return;
    }
    addPesagem();
  }

  const addPesagem = () => {
    Axios.post('http://grifo:8080/pesagem/primeirapesagem', {
      COD_CARGA: doc,
      COD_OPERACAO: navio,
      PLACA_CAVALO: placacavalo,
      COD_MOTORISTA: id,
      PLACA_CARRETA: placa1,
      PLACA_CARRETA2: placa2,
      PLACA_CARRETA3: placa3,
      DESTINO: destino,
      PESO_TARA: tara,
      DATA_TARA: data,
      USUARIO_TARA: usuario,
      STATUS_CARREG: '1',
      USUARIO: usuario,
      DATA_CADASTRO: getDate(),
    }).then(function (res) {
      console.log(res);
      res.data.sqlMessage ?
        showAlert(res.data.sqlMessage, 'error') :
        showAlert('Pesagem cadastrada com sucesso!', 'success');
        
      getCargas();
    });
  }


  const getDate = () => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  const getOperacoes = () => {
    Axios.get('http://grifo:8080/operacao')
      .then((response) => {
        setOperacoesList(response.data)
        console.log(response.data);
        getCargas()
      });
  }

  const getCargas = (id) => {
    Axios.get(`http://grifo:8080/carga/busca/${id}`,)
      .then(function (res) {
        setDocs(res.data);
        console.log(res.data);
      });
  }
  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (txt, variant) => {
    enqueueSnackbar(txt, { variant: variant });
  }
  let { nome } = useParams();
  let { cpf } = useParams();
  let { cnh } = useParams();
  let { id } = useParams();


  return (
    <>
      <Navbar veiculos />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div className={style.nav}>
              <div onClick={() => navigate("/veiculos/BuscarMotorista")} >
                Buscar Motorista
              </div>

              <div onClick={() => navigate("/veiculos")}>
                Cadastrar Motorista
              </div>
              <div className={style.active}>
                Pesagem inicial
              </div>
              <div onClick={() => navigate("/veiculos/UltimaPesagem")}>
                Pesagem Final
              </div>
            </div>
          </div>


          <div className={style.align}>
            <div className="columns">
              <div className="column is-4">
                <div className={style.box}>
                  <div className="card">
                    <div className="card-content">
                      <div className={style.cabecario}>
                        INFORMAÇÕES DO MOTORISTA
                      </div>
                      <div className="content">
                        <div> <strong className={style.name}>Motorista:</strong> {nome}</div>
                        <div><strong className={style.name}>CPF:</strong> {cpf}</div>
                        <div><strong className={style.name}>CNH:</strong> {!cnh? "":cnh }</div>
                        {/* <div className={style.radio}>
                          <div className="control">{tipopesagem}
                            <label className="radio">
                              <input type="radio" value="Pesagem completa" name="gerador" onChange={setTipopesagem} />Pesagem completa
                            </label>
                            <label className="radio">
                              <input type="radio" value="Pesagem moega" name="gerador" onChange={setTipopesagem} />Pesagem moega
                            </label>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={style.form_control}>

                  <label>Selecione o navio (operação):</label>
                  <select onChange={(e) => [getCargas(e.target.value), setNavio(e.target.value)]}>
                    <option disabled selected>Selecione uma opção</option>
                    {operacoesList?.map((val) => {
                      return (
                        <option value={val.COD_OPERACAO}>{val.NOME_NAVIO}</option>
                      )
                    })}
                  </select>
                </div>
                <Input type={"text"} text={"Peso da tara"}
                  placeholder={"ex:1.000 kg"}
                  onChange={(e) => setTara(e.target.value)}
                />

              </div>
              <div className="column is-3">
                <Input type={"text"} text={"Destino"}
                  placeholder={"ex: Limeira"}
                  onChange={(e) => setDestino(e.target.value)}
                />
                <Input type={"text"}
                  text={"Placa do cavalo"}
                  placeholder={"Ex: 0a00aaa"}
                  onChange={(e) => setPlacacavalo(e.target.value)}
                />
                <div className={style.placas}>
                  <Input type={"text"} text={"Placa 1"}
                    placeholder={"ex: 0a00aaa"}
                    onChange={(e) => setPlaca1(e.target.value)}
                  />
                  <Input type={"text"} text={"Placa 2"}
                    placeholder={"ex: 0a00aaa"}
                    onChange={(e) => setPlaca2(e.target.value)}
                  />

                  <Input type={"text"} text={"Placa 3"}
                    placeholder={"ex: 0a00aaa"}
                    onChange={(e) => setPlaca3(e.target.value)}
                  />
                </div>
              </div>

              <div className="column is-4">


                <div className={style.form_control}>

                  <label>Selecione o código da operação (DI ou BL):</label>
                  <select onChange={(e) => { setDoc(e.target.value) }}>
                    <option disabled selected>Selecione uma opção</option>
                    {docs?.map((val) => {
                      return (
                        <option value={val.COD_CARGA}>{val.TIPO} - {val.NUMERO}</option>
                      )
                    })}
                  </select>
                </div>

                <Input type={"datetime-local"} text={"Data e hora"}
                  onChange={(e) => setData(e.target.value)}
                // onChange={moment(setData).format("DD/MM/YYYY")}
                />

              </div>
            </div>

          </div>
          <div className={style.button}>
            <SubmitButton text={"Cadastrar"}
              onClick={validaDados}
            />
          </div>

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
      <PesagemInicial />
    </SnackbarProvider >
  );
}

