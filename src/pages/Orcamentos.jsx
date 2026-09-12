import {
    ArrowLeft,
    BriefcaseBusiness
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import OrcamentoCard from "../components/OrcamentoCard"
import { useOrcamentos } from "../context/OrcamentoContext"

function Orcamentos() {

    const navigate = useNavigate()
    const { orcamentos } = useOrcamentos()
    return (
        <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">
            <header className="flex items-center gap-4 py-5">
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                >
                    <ArrowLeft size={22}/>
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Meus orçamentos
                    </h1>

                    <p className="text-sm text-gray-600">
                        Acompanhe suas solicitações
                    </p>
                </div>
            </header>

            {orcamentos.length === 0 ? (
               <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center bg-white rounded-full shadow-sm">
                    <BriefcaseBusiness 
                    size={38} 
                    className="text-[#8B3217]"
                />
                </div>

                <h2 className="mt-5 text-xl font-bold text-gray-900">
                    Nenhum orçamento ainda
                </h2>

                <p className="mt-2 max-w-sm text-sm text-gray-600">
                    Quando você solicitar um orçamento ele aparecerá aqui.
                </p>

                <button
                    onClick={() => navigate("/home")}
                    className="bg-[#8B3217] rounded-xl mt-6 px-6 py-3 font-bold text-white transition hover:bg-[#70260F]"
                >
                    ENCONTRAR UM PROFISSIONAL
                </button>

               </div>
            ) : (
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        Você possui{" "}
                        <strong className="text-gray-900">
                            {orcamentos.length}
                        </strong>{" "} orçamento(s)
                    </p>

                    {orcamentos.map((orcamento) => (
                        <OrcamentoCard
                            key={orcamento.id}
                            orcamento={orcamento}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Orcamentos