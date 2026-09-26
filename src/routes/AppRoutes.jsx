import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Resultados from "../pages/Resultados";
import Profissional from "../pages/Profissional";
import Orcamento from "../pages/Orcamento";

import OrcamentoEnviado from "../pages/OrcamentoEnviado"
import Orcamentos from "../pages/Orcamentos"
import OrcamentosDetalhes from "../pages/OrcamentoDetalhes";
import PainelProfissional from "../pages/PainelProfissional";
import SolicitacaoDetalhes from "../pages/SolicitacaoDetalhes";
import EnviarOrcamento from "../pages/EnviarOrcamento";
import Cadastro from "../pages/Cadastro";

function AppRoutes() {
    return (
        <BrowserRouter>
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

                <Route 
                    path="/painel-profissional"
                    element={<PainelProfissional />}
                />

                <Route 
                    path="/painel-profissional/solicitacao/:id"
                    element={<SolicitacaoDetalhes/>}
                />

                <Route
                    path="/painel-profissional/orcamento/:id"
                    element={<EnviarOrcamento />}
                />

                <Route
                    path="/cadastro"
                    element={<Cadastro/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes