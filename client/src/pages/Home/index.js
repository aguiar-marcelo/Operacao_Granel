import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

const Home = () => {
  const { logout } = useAuth();//puxa a funcao de signout do auth.js
  const navigate = useNavigate();

  return (
    <>
      <h2>Home</h2>
      <button Text="Sair" onClick={() => [logout(), navigate("/")]}>
        Sair
      </button>
    </>
  );
};

export default Home;