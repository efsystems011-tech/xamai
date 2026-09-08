import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

import ProfessionalCard from "../components/ProfessionalCard";

import { profissionais } from "../data/profissionais"

function Resultados() {

    const { servico } = useParams()

    const navigate = useNavigate()

    const profissionaisFiltrados = profissionais.filter((profissional) => profissional.servico === servico)


    return (
        <main className="min-h-screen bg-[#F3EEE6] p-5 pb-8">
            {/* Cabeçalho */}
            <header className="flex items-center gap-4 py-5">
                <button 
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={22} />
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Profissionais
                    </h1>

                    <p className="text-sm text-gray-600">
                        {servico}
                    </p>

                </div>
            </header>


            {/* Quantidade */}
            <p className="mb-5 text-sm text-gray-600">
                Encontramos{" "}
                <strong className="text-gray-900">
                    {profissionaisFiltrados.length}
                </strong>
            </p>

            {/* Lista */}
            <div className="space-y-4">
                {profissionaisFiltrados.map((profissional) => (
                    <ProfessionalCard
                        key={profissional.id}
                        profissional={profissional}
                    />
                ))}
            </div>

        </main>
    )
}

export default Resultados