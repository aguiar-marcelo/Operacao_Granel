import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Inscrever from "../pages/Inscrever";


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
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Login />} />
                    <Route exact path="/inscrever" element={<Inscrever />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;