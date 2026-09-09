import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Resultados from "../pages/Resultados";
import Profissional from "../pages/Profissional";
import Orcamento from "../pages/Orcamento";

import OrcamentoEnviado from "../pages/OrcamentoEnviado"
import Orcamentos from "../pages/Orcamentos"
import OrcamentosDetalhes from "../pages/OrcamentoDetalhes";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/explorar"
                    element={<h1>Explorar</h1>}
                />

                <Route
                    path="/orcamentos"
                    element={<Orcamentos />}
                />

                <Route
                    path="/perfil"
                    element={<h1>Perfil</h1>}
                />

                <Route
                    path="/resultados/:servico"
                    element={<Resultados />}
                />

                <Route
                    path="/profissional/:id"
                    element={<Profissional/>}
                />

                <Route 
                    path="/orcamento/:id"
                    element={<Orcamento/>}
                />

                <Route 
                    path="/orcamento-enviado"
                    element={<OrcamentoEnviado/>}
                />

                <Route 
                    path="/orcamento-detalhes/:id"
                    element={<OrcamentosDetalhes/>}
                />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes