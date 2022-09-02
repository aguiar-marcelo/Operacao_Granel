import React from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import Brackground from "../../components/Background.js";
import Container from "../../components/Container.js";
import Header from "../../components/Header";

const Dashboard = () => {
  
  return (
    <>
    <Navbar />
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