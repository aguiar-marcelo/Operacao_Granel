import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Brackground from "../../../components/Background";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../../components/Button";
import Input from "../../../components/Input";



const Detalhes = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar navios />
            <Header />
            <Brackground />
            <Container>

                


            </Container>

        </>
    );
};

export default Detalhes;