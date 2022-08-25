import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
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
      setError("Preencha todos os campos");
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
  <C.Container>
      <C.Label>SISTEMA DE LOGIN - OPERAÇÃO GRANEL</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}//começa digitar e some msg de erro
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/inscrever">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  </>
    
  );
};

export default Login;