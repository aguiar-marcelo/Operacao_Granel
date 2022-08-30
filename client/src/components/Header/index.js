import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {

  const userToken = localStorage.getItem("user_token");
  const user = JSON.parse(userToken);

  return (
    <div className={styles.Header}>
        {user.id}
    </div>
  );
}

export default Header;
