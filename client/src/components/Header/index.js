import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {

  const userToken = localStorage.getItem("user_token");
  const user = JSON.parse(userToken);

  return (
    <div className="headertopo">
        <div className="nome">{user.id}</div>
    </div>
  );
}

export default Header;
