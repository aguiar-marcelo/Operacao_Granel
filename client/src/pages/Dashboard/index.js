import React from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/select";
import SubmitButton from "../../components/Button"


const Dashboard = () => {
  
  return (
    <>
    <Navbar />
    <Header/>
    <Brackground />
    <Container>
    <h1>Dashboard</h1> <br/>
      
      
    </Container>
      
    </>
  );
};

export default Dashboard;