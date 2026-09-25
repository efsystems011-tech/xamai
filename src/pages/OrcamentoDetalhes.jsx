import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    User,
    Clock,
    Star,
} from "lucide-react"

import { useNavigate, useParams } from "react-router-dom"
import { useOrcamentos } from "../context/OrcamentoContext"
import StatusOrcamento from "../components/StatusOrcamento"

import { useEffect, useState } from "react"
import { buscarSolicitacao } from "../services/api"

function OrcamentosDetalhes() {

    const navigate = useNavigate()
    const { id } = useParams()
    const { orcamentos } = useOrcamentos()

    const [solicitacao, setSolicitacao] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function carregarSolicitacao() {
            try {
                setCarregando(true)
                setErro("")

                const dados = await buscarSolicitacao(id)

                setSolicitacao(dados)
            } catch (erro) {
                console.error(erro)

                setErro(
                    "Não foi possível carregar a solicitação."
                )
            } finally {
                setCarregando(false)
            }
        }

        carregarSolicitacao()
    }, [id])

    if (carregando) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6]">
                <p className="text-gray-500">
                    Carregando solicitação...
                </p>
            </main>
        )
    }

    if (erro) {
        return (
            <main className="min-h-screen bg-[#F3EEE6] px-5">
                <button
                    onClick={() => navigate(-1)}
                    className="mt-5 rounded-full p-2 text-gray-700 hover:bg-white"
                >
                    <ArrowLeft size={22} />
                </button>

                <p className="mt-10 text-center font-semibold text-red-600">
                    {erro}
                </p>
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

                <div className="text-2xl font-bold text-gray-900">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Solicitação
                    </h1>

                    <p className="text-sm text-gray-600">
                        Orçamento #{solicitacao.id}
                    </p>
                </div>
            </header>

            {/* Profissional */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-200 text-2xl font-bold text-gray-600">
                        {solicitacao.profissional_nome.charAt(0)}
                    </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="text-lg font-bold text-gray-900">
                            {solicitacao.profissional_nome}
                        </h2>

                        <p className="text-sm text-gray-600">
                            {solicitacao.profissional_profissao}
                        </p>

                        <div className="mt-1 flex gap-3">
                            <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                                <Star
                                    size={14}
                                    fill="currentColor"
                                />
                                {solicitacao.profissional_avaliacao}
                            </span>

                            <span className="flex items-center gap-1 text-sm text-gray-500">
                                <MapPin size={14} />

                                {solicitacao.profissional_cidade}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Status */}
            <section className="mt-5">
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                    Status
                </h2>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold capitalize text-yellow-700">
                        {solicitacao.status}
                    </span>
                </div>
            </section>

            {/* Descrição */}
            <section className="mt-5">
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                    Descrição do serviço
                </h2>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="leading-7 text-gray-700">
                        {solicitacao.descricao}
                    </p>
                </div>
            </section>
        </main>
    )





}

export default OrcamentosDetalhes