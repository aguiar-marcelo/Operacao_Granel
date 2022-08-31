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
      <div id="menu">
        <div className="menus vertical-menu">
          <nav className="menu-1">
            <div>
              <ul>
                <li className="active" >
                  <a href="/dashboard">
                    <span className="item-icon">
                      <i className="fa fa-dashboard"></i>                      
                    </span>
                    <span className="item-text">Dashboard</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/cadastro-navio">
                    <span className="item-icon">
                      <i className="fa fa-ship icon"></i>                      
                    </span>
                    <span className="item-text">Cadastro de Navio</span>
                  </a>
                </li>
                <li className="">
                  <a href="/atracacao">
                    <span className="item-icon">
                      <i className="fa fa-anchor"></i>                      
                    </span>
                    <span className="item-text">Atracação/Liberação</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/abertura-periodo">
                    <span className="item-icon">
                      <i className="fas fa-stopwatch"></i>                      
                    </span>
                    <span className="item-text">Abertura de Período</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/cadastrar-bibl">
                    <span className="item-icon">
                      <i className="fa fa-file-o"></i>                      
                    </span>
                    <span className="item-text">Cadastrar Bi's/BL's</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/veiculos">
                    <span className="item-icon">
                      <i className="fa fa-truck icon"></i>                      
                    </span>
                    <span className="item-text">Veículos em Operação</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/paralisacao">
                    <span className="item-icon">
                      <i className="fa fa-exclamation-triangle"></i>                      
                    </span>
                    <span className="item-text">Paralisação</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/pesagem">
                    <span className="item-icon">
                      <i className="fa fa-balance-scale"></i>                      
                    </span>
                    <span className="item-text">Pesagem</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/relatorios">
                    <span className="item-icon">
                      <i className="far fa-file-alt"></i>                      
                    </span>
                    <span className="item-text">Relatórios</span>
                  </a>
                </li>
                <li className="" >
                  <a href="/suporte">
                    <span className="item-icon">
                      <i className="fas fa-sitemap icon"></i>                      
                    </span>
                    <span className="item-text">Suporte Técnico</span>
                  </a>
                </li>
                <li className="logout" onClick={() => [logout(), navigate("/")]}>
                  <a >
                    <span className="item-icon">
                      <i className="fas fa-sign-out-alt"></i>                      
                    </span>
                    <span className="item-text">Sair</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  );
}

export default Navbar;
