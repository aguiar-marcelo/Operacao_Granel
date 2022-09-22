import React, { useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
              Qualquer hora, qualquer lugar
              Controle
              <span className={style.typewrite} data-type='[ 
                                "sua carga !", 
                                "seu navio !", 
                                "suas operações !" 
                            ]'>
              </span>
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
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                  required
                />
                <label>Senha</label>
              </div>
            </form>
            <div className={style.msg}>{error}</div>
            <div className={style.submit}>
              <button onClick={handleLogin}>Entrar</button>
              <Link to="/inscrever">&nbsp;Registre-se</Link>
            </div>
            <p className="direitos">Todos os direitos reservados &copy;</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;