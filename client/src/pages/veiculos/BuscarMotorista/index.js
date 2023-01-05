import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";
import style from "./BuscarMotorista.module.css"


const BuscarMotorista = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar veiculos />
            <Header />
            <Brackground />
            <Container>
                <div className={style.content}>
                    <div className={style.nav}>
                        <div className={style.active} >
                            Buscar Motorista
                        </div>
                        <div onClick={() => navigate("/veiculos")}>
                            Cadastrar Motorista
                        </div>
                        <div onClick={() => navigate("/veiculos/pesageminicial")}>
                            Pesagem inicial
                        </div>
                    </div>

                    <div className={'columns'}>
                        <div className={'column is-4'}>
                            <div className={style.periodo}>
                                <Input text={'Buscar CPF'} name={'buscarmotorista'} placeholder={'ex: 000.000.000-00'} />
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
                                <div className={'column'} >
                                    CAVALO
                                </div>
                                <div className={'column'} >
                                    CARRETA
                                </div>
                                <div className={'column'} >
                                    PRODUTO
                                </div>
                                <div className={'column'} >
                                    TRANSPORTADORA
                                </div>
                                <div className={'column'} >
                                    DATA
                                </div>

                            </div>
                            <div className={style.lista}>



                                <div className={'columns'}>
                                    <div className={'column '}>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>
                                        <div>BLL-2799 </div>

                                    </div>
                                    <div className={'column is-2.5'}>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>
                                        <div>BZR-5656</div>

                                    </div>
                                    <div className={'column is-2'}>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                        <div>KCL</div>
                                    </div>
                                    <div className={'column is-3'}>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>
                                        <div>TRANSCOPA</div>

                                    </div>
                                    <div className={'column is-2'}>
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