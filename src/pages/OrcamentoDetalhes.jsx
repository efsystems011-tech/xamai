import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    User,
    Clock,
} from "lucide-react"

import { useNavigate, useParams } from "react-router-dom"
import { useOrcamentos } from "../context/OrcamentoContext"
import StatusOrcamento from "../components/StatusOrcamento"

function OrcamentosDetalhes() {

    const navigate = useNavigate()
    const { id } = useParams()

    const { orcamentos } = useOrcamentos()

    const orcamento = orcamentos.find(
        (item) => item.id === Number(id)
    )

    if (!orcamento) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Orçamento não encontrado
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Não foi possível encontrar essa solicitação.
                    </p>

                    <button
                        onClick={() => navigate("/orcamentos")}
                        className="mt-6 bg-[#8B3217] rounded-xl px-6 py-3 font-bold text-white"
                    >
                        VOLTAR
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">
            <header className="flex items-center gap-4 py-5">
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                >
                    <ArrowLeft size={22} />
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Detalhes
                    </h1>

                    <p className="text-sm text-gray-600">
                        Orçamento #{orcamento.id}
                    </p>
                </div>
            </header>

            <section className="space-y-4">

                {/* Status */}
                <div className="bg-yellow-100 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                        <Clock
                            size={22}
                            className="text-yellow-700"
                        />

                        <div>
                            <p className="text-xs font-semibold text-gray-500">
                                STATUS
                            </p>

                            <div className="mt-2">
                                <StatusOrcamento status={orcamento.status}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profissional */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        PROFISSIONAL
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center bg-gray-200 rounded-full font-bold text-gray-600">
                            {orcamento.profissional.charAt(0)}
                        </div>

                        <div>
                            <h2 className="font-bold text-gray-900">
                                {orcamento.profissional}
                            </h2>

                            <p className="text-sm text-gray-600">
                                {orcamento.servico}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Descrição */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        DESCRIÇÃO DO SERVIÇO
                    </p>

                    <p className="mt-3 leading-relaxed text-gray-700">
                        {orcamento.descricao}
                    </p>
                </div>

                {/* Informações */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <p className="text-xs font-semibold text-gray-500">
                        INFORMAÇÕES
                    </p>

                    <div className="mt-4 space-y-4">

                        <div className="flex items-center gap-3">

                            <CalendarDays size={20} className="text-[#8B3217]" />

                            <div>
                                <p className="text-xs text-gray-500">
                                    Data
                                </p>

                                <p className="font-semibold text-gray-800">
                                    {orcamento.data}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin
                                size={20}
                                className="text-[#8B3217]"
                            />

                            <div>
                                <p className="text-xs text-gray-500">
                                    Local
                                </p>

                                <p className="font-semibold text-gray-800">
                                    {orcamento.endereco}
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>

                {orcamento.fotos && orcamento.fotos.length > 0 && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-semibold text-gray-500">
                            FOTOS DO SERVIÇO
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            {orcamento.fotos.map((foto, index) => (
                                <div
                                    key={`${foto.name}-${index}`}
                                    className="aspect-square overflow-hidden rounded-xl bg-gray-200"
                                >
                                    <img 
                                        src={URL.createObjectURL(foto)} 
                                        alt={`Foto do serviço ${index + 1}`}
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    )

}

export default OrcamentosDetalhes