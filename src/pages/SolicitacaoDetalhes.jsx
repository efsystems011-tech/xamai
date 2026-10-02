import { use, useEffect, useState } from "react"

import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    User,
    Wrench,
} from "lucide-react"

import { useNavigate, useParams } from "react-router-dom"
import { useOrcamentos } from "../context/OrcamentoContext"

import {
    buscarSolicitacao,
    criarOrcamento,
} from "../services/api"

function SolicitacaoDetalhes() {
    const navigate = useNavigate()
    const { orcamentos } = useOrcamentos()
    const { id } = useParams()

    const [solicitacao, setSolicitacao] = useState(null)
    const [valor, setValor] = useState("")
    const [observacao, setObservacao] = useState("")

    const [carregando, setCarregando] = useState(true)
    const [enviando, setEnviando] = useState(false)
    const [erro, setErro] = useState("")
    const [mensagem, setMensagem] = useState("")

    const orcamento = orcamentos.find(
        (item) => item.id === Number(id)
    )

    useEffect(() => {
        async function carregar() {
            try {
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

        carregar()
    }, [id])

    async function handleEnviarOrcamento(evento) {
        evento.preventDefault()

        setErro("")
        setMensagem("")


        try {
            setEnviando(true)

            const resultado = await criarOrcamento({
                solicitacao_id: id,
                valor: Number(valor),
                observacao,
            })

            setMensagem(resultado.mensagem)

            setValor("")
            setObservacao("")

            setSolicitacao({
                ...solicitacao,
                status: "orcamento_enviado",
            })
        } catch (erro) {
            console.error(erro)

            setErro(erro.message)
        } finally {
            setEnviando(false)
        }
    }

    if (carregando) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6]">
                <p className="text-gray-500">
                    Carregando solicitação...
                </p>
            </main>
        )
    }

    if (erro && !solicitacao) {
        return (
            <main className="min-h-screen bg-[#F3EEE6] px-5">
                <button
                    onClick={() => navigate(-1)}
                    className="mt-5 rounded-full p-2 hover:bg-white"
                >
                    <ArrowLeft size={22}/>
                </button>

                <p className="mt-10 text-center font-semibold text-red-600">
                    {erro}
                </p>
            </main>
        )
    }

    if (!orcamento) {
        return (
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
    return (
        <main className="min-h-screen bg-[F3EEE6] px-5 pb-10">
            <header className="flex items-center gap-4 py-5">
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                    aria-label="Voltar"
                >
                    <ArrowLeft size={22} />
                </button>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Solicitação
                    </h1>

                    <p className="text-sm text-gray-500">
                        Pedido #{solicitacao.id}
                    </p>
                </div>
            </header>

            {/* Cliente */}
            <section className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center">
                        <User size={24}/>
                    </div>
                </div>
                    
            </section>
        </main>
    )
}

export default SolicitacaoDetalhes