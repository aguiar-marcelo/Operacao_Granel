import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Typewriter } from 'react-simple-typewriter'

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!id | !senha) {//mensagem de erro caso nao preencha todos campos
      setError("*Preencha todos os campos*");
      return;
    }

    const res = login(id, senha);

    if (res) {//caso retorne algum erro, sera exibido
      setError(res);
      return;
    }

    navigate("/dashboard");//se tudo estiver ok, redireciona para Home
  };


  return (
    <>
      <div className={style.content}>
        <div className={style.login_left}>
          <div className={style.left_container}>
          </div>
          <div className={style.frase_box}>
            <div className={style.frase}> {/*transformar letreiro em component  */}
              Qualquer hora, qualquer lugar <br />
              Controle <b>
                <Typewriter
                  words={['sua carga!', 'seu navio!', 'suas operações!']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={2000}
                /></b>
            </div>
          </div>
        </div>
        <div className={style.login_right}>
          <div className={style.text_right}>
            <div className={style.tittle}>
              Operação Granel
            </div>
            <form>
              <div className={style.group}>
                <input
                  className={style.input}
                  type="text"
                  value={id}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleLogin()
                    }
                  }}
                  onChange={(e) => [setId(e.target.value), setError("")]}//começa digitar e some msg de erro
                  required
                />
                <label>Usúario</label>
              </div>
              <div className={style.group}>
                <input
                  className={style.input}
                  type="password"
                  value={senha}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleLogin()
                    }
                  }}
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                  required
                />
                <label>Senha</label>
              </div>
            </form>
            <div className={style.msg}>{error}</div>
            <div className={style.submit}>
              <button onClick={handleLogin} autoFocus>Entrar</button>
              <a onClick={() => alert("Contate o suporte!")}>&nbsp;Registre-se</a>
            </div>

            <p className="direitos">Todos os direitos reservados &copy;</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;