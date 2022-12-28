import React from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import SubmitButton from "../../components/Button"


const Dashboard = () => {
  
  return (
    <>
    <Navbar />
    <Header/>
    <Brackground />
    <Container>
    <h1>Dashboard</h1> <br/>
      <h2>teste teste teste teste</h2>

      <Input type={"text"} text={"nome"} name={"name"} placeholder={"ex: 10kg...."} />

      <Select name={"alguma coisa"} text={"selecione a categoria"}/>

      <SubmitButton text={"alguma coisa"}/>

    
      
    </Container>
      
    </>
  );
};

export default Dashboard;