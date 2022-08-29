import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {//mensagem de erro caso nao preencha todos campos
      setError("*Preencha todos os campos*");
      return;
    }

    const res = login(email, senha);

    if (res) {//caso retorne algum erro, sera exibido
      setError(res);
      return;
    }

    navigate("/home");//se tudo estiver ok, redireciona para Home
  };

  return (
    <>
      <div className="container">
        <div className="login-left">
          <div className="left-container">
          </div>
          <div className="frase_box">
            <div className="frase"> {/*transformar letreiro em component  */}
              Qualquer hora, qualquer lugar
              Controle
              <span className="typewrite" data-type='[ 
                                "sua carga !", 
                                "seu navio !", 
                                "suas operações !" 
                            ]'>
              </span>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="text-right">
            <div className="tittle">
              Operação Granel
            </div>
            <form>
              <div className="group">
                <input
                  className="input"
                  type="text"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}//começa digitar e some msg de erro
                  required
                />
                <label>Usúario</label>
              </div>
              <div className="group">
                <input
                  className="input"
                  type="password"
                  value={senha}
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                  required
                />
                <label>Senha</label>
              </div>
            </form>
            <div className="msg">{error}</div>
            <div className="submit">
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