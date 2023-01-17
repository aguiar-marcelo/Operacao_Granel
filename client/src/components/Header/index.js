import { useState } from "react";
import { Link } from "react-router-dom";
import style from"./Header.module.css";

function Header() {

  const userToken = localStorage.getItem("user_token");
  const user = JSON.parse(userToken);

  return (
    <div className={style.header}>
        <div className="nome">{user.nome} - {user.departamento} &nbsp;&nbsp;|&nbsp; GRUPO RODRIMAR</div>
    </div>
  );
}

export default Header;
