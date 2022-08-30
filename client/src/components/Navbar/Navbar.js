import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./Navbar.module.css";

function Navbar() {
  const { logout } = useAuth();//puxa a funcao de signout do auth.js
  const navigate = useNavigate();

  const userToken = localStorage.getItem("user_token");
  const usuario = JSON.parse(userToken);

  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/dashboard">Dashboard </Link>
        </li>
        <li className={styles.item}>
          <Link to="/cadastro-navio">Cadastro de Navio</Link>
        </li>
        <li className={styles.item}>
          <Link to="/atracacao">Atracação/Liberação</Link>
        </li>
        <li className={styles.item}>
          <Link to="/abertura-periodo">Abertura de Período</Link>
        </li>
        <li className={styles.item}>
          <Link to="/cadastrar-bibl">Cadastrar Bi's/BL's</Link>
        </li>
        <li className={styles.item}>
          <Link to="/veiculos">Veículos em Operação</Link>
        </li>
        <li className={styles.item}>
          <Link to="/paralisacao">Paralisação</Link>
        </li>
        <li className={styles.item}>
          <Link to="/pesagem">Pesagem</Link>
        </li>
        <li className={styles.item}>
          <Link to="/relatorios">Relatórios</Link>
        </li>
        <li className={styles.item}>
          <Link to="/suporte">Suporte Técnico</Link>
        </li>
        <li className={styles.item}>
        {usuario.email}
        </li>
        

        <li className={styles.item}>
          <button Text="Sair" onClick={() => [logout(), navigate("/")]}>
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
