import React from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import Brackground from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Dashboard = () => {
  
  return (
    <>
    <Navbar dashboard/>
    <Header/>
    <Brackground />
    <Container>
    <h1>Dashboard</h1> <br/>
      <h2>teste teste teste teste</h2>
    </Container>
      
    </>
  );
};

export default Dashboard;