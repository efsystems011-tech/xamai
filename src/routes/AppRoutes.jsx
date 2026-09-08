import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Resultados from "../pages/Resultados";
import Profissional from "../pages/Profissional";
import Orcamento from "../pages/Orcamento";

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
                    element={<h1>Orçamentos</h1>}
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
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes