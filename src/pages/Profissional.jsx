import { useEffect, useState } from "react"

import {
    ArrowLeft,
    MapPin,
    Star,
} from "lucide-react"

import {
    useNavigate,
    useParams,
} from "react-router-dom"

import { buscarProfissional } from "../services/api"

function Profissional() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [profissional, setProfissional] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function carregarProfissional() {
            try {
                setCarregando(true)
                setErro("")

                const dados = await buscarProfissional(id)

                setProfissional(dados)

            } catch (erro) {
                console.error(erro)

                setErro(
                    "Não foi possível carregar o profissional."
                )

            } finally {
                setCarregando(false)
            }
        }

        carregarProfissional()
    }, [id])

    if (carregando) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6]">
                <p className="text-gray-500">
                    Carregando profissional...
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
                    aria-label="Voltar"
                >
                    <ArrowLeft size={22} />
                </button>

                <h1 className="text-2xl font-bold text-gray-900">
                    Profissional
                </h1>
            </header>

            <section className="mt-4 rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex flex-col items-center text-center">

                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-3xl font-bold text-gray-600">
                        {profissional.nome.charAt(0)}
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        {profissional.nome}
                    </h2>

                    <p className="mt-1 text-gray-600">
                        {profissional.profissao}
                    </p>

                    <div className="mt-3 flex items-center gap-4">

                        <span className="flex items-center gap-1 font-semibold text-gray-700">
                            <Star
                                size={17}
                                fill="currentColor"
                            />

                            {profissional.avaliacao}
                        </span>

                        <span className="flex items-center gap-1 text-gray-500">
                            <MapPin size={17} />

                            {profissional.cidade}
                        </span>

                    </div>

                </div>

            </section>

            <section className="mt-5">

                <h2 className="text-xl font-bold text-gray-900">
                    Serviço
                </h2>

                <div className="mt-3 rounded-2xl bg-white p-5 shadow-sm">

                    <p className="font-semibold text-gray-800">
                        {profissional.profissao}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        Serviço: {profissional.servico}
                    </p>

                </div>

            </section>

            <button
                onClick={() =>
                    navigate(`/orcamento/${profissional.id}`)
                }
                className="mt-6 w-full rounded-xl bg-[#8B3217] py-4 font-bold text-white transition hover:bg-[#70260F]"
            >
                SOLICITAR ORÇAMENTO
            </button>

        </main>
    )
}

export default Profissional