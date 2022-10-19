import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AberturaPeriodo from "../pages/AberturaPeriodo";
import Atracacao from "../pages/operacao/Atracacao";
import Liberacao from "../pages/operacao/Liberacao";
import Limpeza from "../pages/operacao/Limpeza";
import Operacao from "../pages/operacao/Operacao";
import Preparacao from "../pages/operacao/Preparacao";
import Varredura from "../pages/operacao/Varredura";
import CadastrarBiBl from "../pages/CadastrarBiBl";
import CadastroNavio from "../pages/navios/CadastroNavio";
import Navios from "../pages/navios/Navios";
import NovaViagem from "../pages/viagens/NovaViagem";
import Viagens from "../pages/viagens/Viagens";
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
                <Routes>
                    <Route exact path="/navios" element={<Private Item={Navios} />} />
                    <Route exact path="/navios/cadastro" element={<Private Item={CadastroNavio} />} />
                    <Route exact path="/viagens" element={<Private Item={Viagens} />} />
                    <Route exact path="/viagens/nova-viagem" element={<Private Item={NovaViagem} />} />
                    <Route exact path="/operacao/atracacao" element={<Private Item={Atracacao} />} />
                    <Route exact path="/operacao/liberacao" element={<Private Item={Liberacao} />} />
                    <Route exact path="/operacao/preparacao" element={<Private Item={Preparacao} />} />
                    <Route exact path="/operacao/operacao" element={<Private Item={Operacao} />} />
                    <Route exact path="/operacao/varredura" element={<Private Item={Varredura} />} />
                    <Route exact path="/operacao/limpeza" element={<Private Item={Limpeza} />} />
                    <Route exact path="/abertura-periodo" element={<Private Item={AberturaPeriodo} />} />
                    <Route exact path="/cadastrar-bibl" element={<Private Item={CadastrarBiBl} />} />
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