import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import EmAndamento from "../pages/operacao/EmAndamento";
import Operacao from "../pages/operacao/Operacao";
import Boletim from "../pages/Boletim";
import BoletimGranel from "../pages/boletimgranel"
import CadastroNavio from "../pages/navios/CadastroNavio";
import Navios from "../pages/navios/Navios";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Pesagem from "../pages/Pesagem";
import Relatorios from "../pages/Relatorios";
import Suporte from "../pages/Suporte";
import PesagemComCarga from "../pages/veiculos/PesagemComCarga";
import PesagemInicial from "../pages/veiculos/PesagemInicial";
import Motivacao from "../pages/veiculos/Motivacao";
import CadastroMotorista from "../pages/veiculos/CadastroMotorista";

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
                    <Route exact path="/operacoes" element={<Private Item={EmAndamento} />} />                 
                    <Route exact path="/operacao/:id" element={<Private Item={Operacao} />} />   
                    <Route exact path="/boletim" element={<Private Item={Boletim} />} />
                    <Route exact path="/boletimgranel" element={<Private Item={BoletimGranel} />} />
                    <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />                    
                    <Route exact path="/pesagem" element={<Private Item={Pesagem} />} />
                    <Route exact path="/relatorios" element={<Private Item={Relatorios} />} />
                    <Route exact path="/suporte" element={<Private Item={Suporte} />} />
                    <Route exact path="veiculos" element={<Private Item={CadastroMotorista} />} />
                    <Route exact path="/veiculos/PesagemComCarga" element={<Private Item={PesagemComCarga} />} />
                    <Route exact path="/veiculos/PesagemInicial" element={<Private Item={PesagemInicial} />} />
                    <Route exact path="/veiculos/Motivacao" element={<Private Item={Motivacao} />} />
                    <Route path="/" element={<Private Item={Dashboard} />} />
                    <Route path="*" element={<Private Item={Dashboard} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;