import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

function Navbar() {
  const { logout } = useAuth();//puxa a funcao de signout do auth.js
  const navigate = useNavigate();

  const userToken = localStorage.getItem("user_token");
  const user = JSON.parse(userToken);

  return (
    <div className="navbar">
      <div className="item">
        <i class="fa fa-dashboard icon"></i>
        <Link to="/dashboard">Dashboard </Link>
      </div>
      <div className="item">
        <i class="fas fa-pencil-alt icon"></i>
        <Link to="/cadastro-navio">Cadastro de Navio</Link>
      </div>
      <div className="item">
        <i class="fas fa-pencil-alt icon"></i>
        <Link to="/atracacao">Atracação/Liberação</Link>
      </div>
      <div className="item">
        <i class="fas fa-ship icon"></i>
        <Link to="/abertura-periodo">Abertura de Período</Link>
      </div>
      <div className="item">
        <i class="fas fa-ship icon"></i>
        <Link to="/cadastrar-bibl">Cadastrar Bi's/BL's</Link>
      </div>
      <div className="item">
        <i class="fas fa-truck icon"></i>
        <Link to="/veiculos">Veículos em Operação</Link>
      </div>
      <div className="item">
        <i class="fas fa-exclamation-triangle icon"></i>
        <Link to="/paralisacao">Paralisação</Link>
      </div>
      <div className="item">
        <i class="fas fa-balance-scale icon"></i>
        <Link to="/pesagem">Pesagem</Link>
      </div>
      <div className="item">
        <i class="far fa-file-alt icon"></i>
        <Link to="/relatorios">Relatórios</Link>
      </div>
      <div className="item">
        <i class="fas fa-sitemap icon"></i>
        <Link to="/suporte">Suporte Técnico</Link>
      </div>
      <div className="item">
        {user.id}
      </div>

      <div className="item">
        <button Text="Sair" onClick={() => [logout(), navigate("/")]}>
        <i class="fas fa-sign-out-alt icon"></i>Sair
        </button>
      </div>
    </div>
  );
}

export default Navbar;
