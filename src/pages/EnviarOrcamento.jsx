import {
    ArrowLeft,
    DollarSign
} from "lucide-react"

import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { useOrcamentos } from "../context/OrcamentoContext"

import { solicitacoes } from "../data/solicitacoes"

function EnviarOrcamento() {
    const navigate = useNavigate()
    const { id } = useParams()

    const { orcamentos, responderOrcamento } = useOrcamentos()

    const solicitacao = solicitacoes.find(
        (item) => item.id === Number(id)
    )

    const orcamento = orcamentos.find(
        (item) => item.profissionalId === solicitacao?.profissionalId
    )

    const [formulario, setFormulario] = useState({
        valor: "",
        observacao: "",
        prazo: "",
    })

    if (!solicitacao) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
                <div className="text-center">

                    <h1 className="text-2xl font-bold text-gray-900">
                        Solicitação não encontrada
                    </h1>

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

    function handleSubmit(evento) {
        evento.preventDefault()

        if(formulario.valor === "") {
            alert("Informe o valor do orçamento.")
            return
        }

        const resposta = {
            status: "recebido",
            valor: Number(formulario.valor),
            observacao: formulario.observacao,
            prazo: formulario.prazo,
        }

        console.log("Resposta: ", resposta)
    }

    return (
        <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">
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
                        Enviar orçamento
                    </h1>

                    <p className="text-sm text-gray-600">
                        Para {solicitacao.cliente}
                    </p>
                </div>
            </header>

            <section className="mb-5 rounded-2xl bg-white p-5 shadow-sm">

                <p className="text-xs font-semibold text-gray-500">
                    SERVIÇO SOLICITADO
                </p>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                    {solicitacao.servico}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {solicitacao.descricao}
                </p>
            </section>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <label
                        htmlFor="valor"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        VALOR DO SERVIÇO
                    </label>

                    <div className="relative">

                        <DollarSign
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            id="valor"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="150,00"
                            value={formulario.valor}
                            onChange={(evento) =>
                                setFormulario({
                                    ...formulario,
                                    valor: evento.target.value,
                                })
                            }
                            className="w-full rounded-xl bg-gray-100 py-4 pl-11 pr-4 text-lg font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-[#8B3217]"
                        />

                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-sm p-5">
                    <label 
                        htmlFor="observacao"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        OBSERVAÇÃO
                    </label>

                    <textarea 
                        id="observacao"
                        rows="5"
                        placeholder="Explique detalhes do orçamento..."
                        value={formulario.observacao}
                        onChange={(evento) =>
                            setFormulario({
                                ...formulario,
                                observacao: evento.target.value
                            })
                        }
                        className="w-full resize-none bg-gray-100 rounded-xl p-4 text-gray-800 outline-none focus:ring-2 focus:ring-[#8B3217]"
                    />
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <label 
                        htmlFor="prazo"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        PRAZO PARA REALIZAÇÃO
                    </label>

                    <input 
                        type="text" 
                        id="prazo"
                        placeholder="Ex: 2 dias" 
                        value={formulario.prazo}
                        onChange={(evento) =>
                            setFormulario({
                                ...formulario,
                                prazo: evento.target.value,
                            })
                        }
                        className="w-full rounded-xl bg-gray-100 px-4 py-4 text-gray-800 outline-none focus:ring-2 focus:ring-[#8B3217]"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full rounded-2xl bg-[#8B3217] py-4 font-bold text-white shadow-md transition hover:bg-[#70260F] active:scale-[0.98]">
                    ENVIAR ORÇAMENTO
                </button>
            </form>
        </main>
    )

}

export default EnviarOrcamento