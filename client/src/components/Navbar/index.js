import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./styles.css";

function Navbar(props) {
  const { logout } = useAuth();//puxa a funcao de signout do auth.js
  const navigate = useNavigate();

  const userToken = localStorage.getItem("user_token");

  return (
      <div id="menu">
        <div className="menus vertical-menu">
          <nav className="menu-1">
            <div>
              <ul>
                {/* <li className="active" > */}
                <li onClick={()=> navigate("/dashboard")} className={props.dashboard && "active"} >

                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-dashboard"></i>                      
                    </span>
                    <span className="item-text">Dashboard</span>
                  </div>
                </li>
                <li onClick={()=> navigate("/navios")} className={props.navios && "active"} >
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-ship icon"></i>                      
                    </span>
                    <span className="item-text">Navios</span>
                  </div>
                </li>

                <li onClick={()=> navigate("/veiculos")} className={props.veiculos && "active"} >
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-truck icon"></i>                      
                    </span>
                    <span className="item-text">Veículos</span>
                  </div>
                 </li>

                <li onClick={()=> navigate("/operacoes")} className={props.operacao && "active"}>
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-anchor"></i>                      
                    </span>
                    <span className="item-text">Operação</span>
                  </div>
                </li>
               {/* <li onClick={()=> navigate("/operacao/em-andamento")} className={props.operacao && "active"}>
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-calendar"></i>                      
                    </span>
                    <span className="item-text">Operação</span>
                  </div>
                </li>                               


                
                <li className={props.paralisacao && "active"} >
                  <>
                    <span className="item-icon">
                      <i className="fa fa-exclamation-triangle"></i>                      
                    </span>
                    <span className="item-text">Paralisação</span>
                  </>
                </li> */}
                {/*
                <li onClick={()=> navigate("/pesagem")}  className={props.pesagem && "active"} >
                  <div className="nav_bar" >
                    <span className="item-icon">
                      <i className="fa fa-balance-scale"></i>                      
                    </span>
                    <span className="item-text">Pesagem</span>
                  </div>
                </li>
                  
                <li onClick={()=> navigate("/Boletim")} className={props.cbibl && "active"} >
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-file-o"></i>                      
                    </span>
                    <span className="item-text">Cadastrar Boletim</span>
                  </div>
                </li>

                
                <li onClick={()=> navigate("/Boletimgranel")} className={props.boletimgranel && "active"} >
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fa fa-file-o"></i>                      
                    </span>
                    <span className="item-text">Cadastrar Boletim Granel</span>
                  </div>
                </li>
                */}

                <li onClick={()=> navigate("/relatorios")} className={props.relatorios && "active"} >
                  <div className="nav_bar" >
                    <span className="item-icon">
                      <i className="far fa-file-alt"></i>                      
                    </span>
                    <span className="item-text">Relatórios</span>
                  </div>
                </li>
                <li onClick={()=> navigate("/suporte")}  className={props.suporte && "active"} >
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fas fa-sitemap icon"></i>                      
                    </span>
                    <span className="item-text">Suporte Técnico</span>
                  </div>
                </li>
                <li className="logout" onClick={() => [logout(), navigate("/")]}>
                  <div className="nav_bar">
                    <span className="item-icon">
                      <i className="fas fa-sign-out-alt"></i>                      
                    </span>
                    <span className="item-text">Sair</span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  );
}

export default Navbar;