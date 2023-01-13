import React from "react";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Select from "../../../components/select"
import SubmitButton from "../../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
import style from "./CadastroCarga.module.css";

const CadastroCarga = () => {

  const navigate = useNavigate();

  const [navioList, setNavioList] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getNavios();

  }, [])

  const getNavios = () => {
    Axios.get('http://localhost:8080/navio').then((response) => {
      setNavioList(response.data)
    });
  }

  return (
    <>
      <Navbar navios />
      <Header />
      <Brackground />
      <Container>
        <div className={style.content}>
          <div className={style.nav}>
            <div onClick={() => navigate("/cadastro-operacao")}>
              Cadastrar Operação
            </div>
            <div className={style.active}>
              Cadastrar Carga
            </div>
          </div>

          <div className={style.navio}>
            <i className="fa fa-ship icon"></i>
            &nbsp;&nbsp;&nbsp;
            HONG YUAN
          </div>
          <div className={style.flex}>
            <Select
              type={"text"}
              text={"Tipo"}
              name={"name"}
            />
            <Input
              type={"text"}
              text={"Código do documento"}
              name={"name"}
            />
          </div>
          <div className={style.flex}>
            <Select
              type={"text"}
              text={"Importador"}
              name={"name"}
            />
            <Select
              type={"text"}
              text={"Produto"}
              name={"name"}
            />
          </div>
          <div className={style.flex}>
            <Input
              type={"text"}
              text={"NCM"}
              name={"name"}
            />
            <Input
              type={"text"}
              text={"Qtde Manifestada (Kg)"}
              name={"name"}
            />
          </div>

          <div className={style.listatitulo}>Histórico</div>
          <div className={style.cargas}>
            <div className={style.sumario}>
              <div>TIPO</div>
              <div>CÓDIGO</div>
              <div>DT. EMISSÃO</div>
              <div>PERIGO</div>
              <div>IMPORTADOR</div>
              <div>PRODUTO</div>
              <div>NCM</div>
              <div>QT. MANIFESTADA</div>
              <div></div>
            </div>
            <div className={style.lista}>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>DI</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>DI</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>NÃO</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>DI</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>SIM</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>SIM</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>
              <div className={style.item}>
                <div>BL</div>
                <div>05</div>
                <div>12/01/2023</div>
                <div>SIM</div>
                <div>YARA BRASIL FERT.</div>
                <div>URÉIA</div>
                <div>31054000</div>
                <div>40000KG</div>
                <div>
                  <span className={style.delete}><i class="fa fa-trash"></i></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={style.edit}><i class="fa fa-pencil"></i></span>
                </div>
              </div>

            </div>
          </div>
          <div className={style.flex}>
            <SubmitButton text={"ADICIONAR"} />
            <div className={style.total}>
              TOTAL DO NAVIO
              <div>
                120.000,000 KG
              </div>
            </div>
            <SubmitButton text={"CONCLUIR"} />
          </div>

        </div>
      </Container>
    </>
  );
};

export default CadastroCarga;