import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
    //variavel que recebe o useContext do react
    //no contexto da authenticação que criamos no auth.js

    //ao invés de declarar tudo isso em toda pagina que for usar
    //basta chamar esta função
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;