import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    User,
    Wrench,
} from "lucide-react"

import { useNavigate, useParams } from "react-router-dom"
import { useOrcamentos } from "../context/OrcamentoContext"

function SolicitacaoDetalhes() {
    const navigate = useNavigate()

    const { orcamentos } = useOrcamentos()

    const { id } = useParams()

    const orcamento = orcamentos.find(
        (item) => item.id === Number(id)
    )

    if(!orcamento){
        return(
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Solicitação não encontrada
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Não encontramos essa solicitação
                    </p>

                    <button
                        onClick={() => navigate("/painel-profissional")}
                        className="mt-6 rounded-xl bg-[#8B3217] px-6 py-3 font-bold text-white"
                    >
                        VOLTAR
                    </button>
                </div>
            </main>
        )
    }
    return(
        <main className="min-h-screen bg-[F3EEE6] px-5 pb-8">
            <header className="flex items-center gap-4 py-5">
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                    aria-label="Voltar"
                >
                    <ArrowLeft size={22}/>
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Solicitação
                    </h1>

                    <p className="text-sm text-gray-600">
                        #{orcamento.id}
                    </p>
                </div>
            </header>

            <section className="space-y-4">
                {/* Cliente */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        CLIENTE
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                            {orcamento.cliente.charAt(0)}
                        </div>

                        <div>
                            <h2 className="font-bold text-gray-900">
                                {orcamento.cliente}
                            </h2>

                            <p className="text-sm text-gray-600">
                                Cliente Xamai
                            </p>
                        </div>
                    </div>
                </div>

                {/* Serviço */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3EEE6] text-[#8B3217]">
                            <Wrench size={22}/>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-500">
                                SERVICO SOLICITADO
                            </p>

                            <h2 className="font-bold text-gray-900">
                                {orcamento.servico}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Descrição */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        DESCRIÇÃO DO SERVIÇO
                    </p>

                    <p className="mt-3 leading-relaxed text-gray-700">
                        {orcamento.descricao}
                    </p>
                </div>

                {/* Data */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        DATA DESEJADA
                    </p>

                    <div className="mt-3 flex items-center gap-3">

                        <CalendarDays 
                            size={22} 
                            className="text-[#8B3217]"
                        />

                        <span className="font-semibold text-gray-800">
                            {orcamento.data}
                        </span>
                    </div>
                </div>

                {/* Endereço */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500">
                        LOCAL DO SERVIÇO
                    </p>

                    <div className="mt-3 flex items-start gap-3">
                        <MapPin 
                            size={22}
                            className="mt-0.5 shrink-0 text-[#8b3217]"
                        />

                        <span className="font-semibold text-gray-800">
                            {orcamento.endereco}
                        </span>
                    </div>
                </div>

                {/* Botão */}
                <button
                    onClick={() => navigate(`/painel-profissional/orcamento/${orcamento.id}`)}
                    className="w-full rounded-2xl bg-[#8B3217] py-4 font-bold text-white shadow-md transition hover:bg-[#70260F] active:scale-[0.98]"
                >
                    ENVIAR ORÇAMENTO
                </button>
            </section>
        </main>
    )
}

export default SolicitacaoDetalhes