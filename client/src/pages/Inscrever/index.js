import React, { useState } from "react";
import Input from "../../components/Input";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Inscrever = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { inscrever } = useAuth();//puxa a funcao de Increver do auth.js

  const handleInscrever = () => {
    if (!email | !emailConf | !senha) {//verifica se preencheu todos campos
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {//verifica emails são iguais
      setError("Os e-mails não são iguais");
      return;
    }

    const res = inscrever(email, senha);

    if (res) {//caso retorne algum erro, sera exibido
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");//redireciona para pagina de login
  };

  return (
    <C.Container>
      <C.Content>
      <span>Inscreva-se</span>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <button onClick={handleInscrever}>Inscrever-se</button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Inscrever;