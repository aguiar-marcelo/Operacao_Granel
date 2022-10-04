import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AberturaPeriodo from "../pages/AberturaPeriodo";
import Atracacao from "../pages/Atracacao";
import CadastrarBiBl from "../pages/CadastrarBiBl";
import CadastroNavio from "../pages/CadastroNavio";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Paralisacao from "../pages/Paralisacao";
import Pesagem from "../pages/Pesagem";
import Relatorios from "../pages/Relatorios";
import Suporte from "../pages/Suporte";
import Veiculos from "../pages/Veiculos";

//recebe item, no caso Home
const Private = ({ Item }) => {
    const { signed } = useAuth();

    //verifica se esta logado encaminha para o item que passou no parametro, no caso Home
    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes> {/* Home é uma pagina privada que só tera acesso se estiver logado  */}
                    <Route exact path="/abertura-periodo" element={<Private Item={AberturaPeriodo} />} />
                    <Route exact path="/atracacao" element={<Private Item={Atracacao} />} />
                    <Route exact path="/cadastrar-bibl" element={<Private Item={CadastrarBiBl} />} />
                    <Route exact path="/cadastro-navio" element={<Private Item={CadastroNavio} />} />
                    <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
                    <Route exact path="/paralisacao" element={<Private Item={Paralisacao} />} />
                    <Route exact path="/pesagem" element={<Private Item={Pesagem} />} />
                    <Route exact path="/relatorios" element={<Private Item={Relatorios} />} />
                    <Route exact path="/suporte" element={<Private Item={Suporte} />} />
                    <Route exact path="/veiculos" element={<Private Item={Veiculos} />} />

                    <Route path="/" element={<Private Item={Dashboard} />} />
                    <Route path="*" element={<Private Item={Dashboard} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;