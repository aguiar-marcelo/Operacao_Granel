import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import style from "./BuscarMotorista.module.css";
import MaskedInput from "../../../components/InputMask";


const BuscarMotorista = () => {

    const navigate = useNavigate();

    const [busca, setBusca] = useState();

    const [values, setValues] = useState({});
    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <Navbar veiculos />
            <Header />
            <Brackground />
            <Container>
                <div className={style.content}>
                    <div className={style.nav}>
                        <div className={style.nav}>
                            <div className={style.active}>
                                Buscar Motorista
                            </div>
                            <div onClick={() => navigate("/veiculos")}>
                                Cadastrar Motorista
                            </div>
                            <div onClick={() => navigate("/veiculos/PesagemInicial")}>
                                Pesagem Inicial
                            </div>
                            <div onClick={() => navigate("/veiculos/UltimaPesagem")} >
                                Pesagem Final
                            </div>
                        </div>
                    </div>

                    <div className={'columns'}>
                        <div className={'column is-2'}>
                            <div className={style.periodo}>
                                <MaskedInput
                                    text={'Buscar CPF'}
                                    name={'cpf'}
                                    mask={'999.999.999-99'}
                                    value={values.busca}
                                    placeholder={'000.000.000-00'}
                                    onChange={(e) => [setValues(e.target.value.toUpperCase())]}
                                />
                            </div>

                        </div>
                        <div className={'column'}>
                            <div className={style.submit}>
                                <SubmitButton text={'Buscar'} />
                            </div>



                        </div>


                        <div className={style.box}>
                            <div>Motorista: Adilson de Jesus Silva Ferreira</div>
                            <div>CPF: 460.050.968-42</div>
                            <div>CNH: 002.566.58-65 </div>
                        </div>

                    </div>
                    <div className={style.cabecario}>
                        Histórico
                    </div>
                    <div className={style.flex}>


                        <div className={style.formulario}>


                            <div className={'columns'} >
                                <div className={'column is-one-fifth'} >
                                    CAVALO
                                </div>
                                <div className={'column is-one-fifth'} >
                                    CARRETA
                                </div>
                                <div className={'column is-one-fifth'} >
                                    PRODUTO
                                </div>
                                <div className={'column is-one-fifth'} >
                                    TRANSPORTADORA
                                </div>
                                <div className={'column is-2'} >
                                    DATA
                                </div>

                            </div>
                            <div className={style.lista}>



                                <div className={'columns'}>
                                    <div className={'column is-one-fifth'}>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>

                                    </div>
                                    <div className={'column is-one-fifth'}>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>

                                    </div>
                                    <div className={'column is-one-fifth'}>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                    </div>
                                    <div className={'column is-one-fifth'}>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>

                                    </div>
                                    <div className={'column is-one-fifth'}>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>
                                        <div>24/05/2022</div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </Container>

        </>
    );
};

export default BuscarMotorista;