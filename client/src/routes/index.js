import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import EmAndamento from "../pages/operacao/EmAndamento";
import Operacao from "../pages/operacao/Operacao";
import CadastroNavio from "../pages/navios/CadastroNavio";
import Navios from "../pages/navios/Navios";
import CadastroOperacao from "../pages/navios/CadastroOperacao";
import Cargas from "../pages/cargas/Cargas";
import CadastroCarga from "../pages/cargas/CadastroCarga";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import UltimaPesagem from "../pages/veiculos/UltimaPesagem";
import Relatorios from "../pages/Relatorios";
import Suporte from "../pages/Suporte";
import PesagemInicial from "../pages/veiculos/PesagemInicial";
import CadastroMotorista from "../pages/veiculos/CadastroMotorista";
import AberturaPeriodo from "../pages/operacao/AberturaPeriodo";
import BuscarMotorista from "../pages/veiculos/BuscarMotorista";
import Detalhes from "../pages/navios/Detalhes";



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
                    <Route exact path="/navios/detalhes" element={<Private Item={Detalhes} />} />
                    <Route exact path="/operacao/cadastro/:nome/:id" element={<Private Item={CadastroOperacao} />} />
                    <Route exact path="/carga/cadastro/" element={<Private Item={CadastroCarga} />} />
                    <Route exact path="/cargas" element={<Private Item={Cargas} />} />
                    <Route exact path="/operacoes" element={<Private Item={EmAndamento} />} />
                    <Route exact path="/operacao/:id" element={<Private Item={Operacao} />} />
                    <Route exact path="/operacao/:id/aberturaperiodo" element={<Private Item={AberturaPeriodo} />} />
                    <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
                    <Route exact path="/relatorios" element={<Private Item={Relatorios} />} />
                    <Route exact path="/suporte" element={<Private Item={Suporte} />} />
                    <Route exact path="/veiculos/" element={<Private Item={CadastroMotorista} />} />
                    <Route exact path="/veiculos/pesageminicial/:nome/:cpf/:cnh" element={<Private Item={PesagemInicial} />} />
                    <Route exact path="/veiculos/ultimapesagem" element={<Private Item={UltimaPesagem} />} />
                    <Route exact path="/veiculos/buscarmotorista" element={<Private Item={BuscarMotorista} />} />
                    <Route path="/" element={<Private Item={Dashboard} />} />
                    <Route path="*" element={<Private Item={Dashboard} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;