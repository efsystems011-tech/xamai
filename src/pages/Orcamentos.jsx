import {
    ArrowLeft,
    BriefcaseBusiness
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import OrcamentoCard from "../components/OrcamentoCard"
import { useOrcamentos } from "../context/OrcamentoContext"
import { buscarSolicitacoes } from "../services/api"

function Orcamentos() {

    
    const navigate = useNavigate()
    const { orcamentos } = useOrcamentos()
    const [solicitacoes, setSolicitacoes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function carregarSolicitacoes() {
            try {
                setCarregando(true)
                setErro("")

                const dados = await buscarSolicitacoes()

                setSolicitacoes(dados)
            } catch (erro) {
                console.error(erro)

                setErro(
                    "Não foi possível carregar os orçamentos."
                )
            } finally {
                setCarregando(false)
            }
        }

        carregarSolicitacoes()
    }, [])

    async function handleSubmit(evento) {
        evento.preventDefault()

        if (descricao.trim() === "") {
            return
        }

        try {
            const resultado = await criarSolicitacao({
                profissional_id: id,
                descricao,
            })

            console.log(resultado)

            navigate("/orcamentos")

        } catch (erro) {
            console.error(erro)
        }
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
                        Meus orçamentos
                    </h1>

                    <p className="text-sm text-gray-600">
                        Solicitações realizadas
                    </p>
                </div>
            </header>

            {carregando && (
                <p className="py-10 text-center text-gray-500">
                    Carregando orçamentos...
                </p>
            )}

            {erro && (
                <p className="py-10 text-center font-semibold text-red-600">
                    {erro}
                </p>
            )}

            {!carregando && !erro && solicitacoes.length === 0 && (
                <div className="mt-10 rounded-2xl bg-white p-6 text-center shadow-sm">

                    <h2 className="text-lg font-bold text-gray-900">
                        Nenhum orçamento ainda
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Quando você solicitar um serviço, ele aparecerá aqui
                    </p>
                </div>
            )}

            {!carregando && !erro && solicitacoes.length > 0 && (
                <div className="space-y-4">

                    {solicitacoes.map((solicitacao) => (
                        <button
                            key={solicitacao.id}
                            onClick={() => navigate(`/orcamento-detalhes/${solicitacao.id}`)}
                            className="w-full rounded-2xl bg-white p-5 text-left shadow-sm transition hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <h2 className="text-lg font-bold text-gray-900">
                                        {solicitacao.profissional_nome}
                                    </h2>

                                    <p className="text-sm text-gray-600">
                                        {solicitacao.profissional_profissao}
                                    </p>
                                </div>

                                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                                    {solicitacao.status}
                                </span>
                            </div>

                            <p className="mt-4 line-clamp-2 text-sm texr-gray-600">
                                {solicitacao.descricao}
                            </p>
                        </button>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Orcamentos