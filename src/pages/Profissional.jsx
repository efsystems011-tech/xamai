import {
    ArrowLeft,
    MapPin,
    Star,
    BriefcaseBusiness,
} from "lucide-react"

import {
    useNavigate,
    useParams
} from "react-router-dom"

import { profissionais } from "../data/profissionais"

function Profissional() {

    const navigate = useNavigate()

    const { id } = useParams()

    const profissional = profissionais.find(
        (item) => item.id === Number(id)
    )
    if(!profissional) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Profissional não encontrado</h1>

                    <p className="mt-2 text-gray-600">O profissional que você procura não existe.</p>

                    <button
                        onClick={() => navigate("/home")}
                        className="mt-6 rounded-xl bg-[#8B3217] px-6 py-3 font-bold text-white"
                    >
                        VOLTAR PARA HOME
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">

            {/* Cabeçalho */}
            <header className="flex items-center gap-4 py-5">
                <button 
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                >
                    <ArrowLeft size={22}/>
                </button>
            </header>

            {/* Perfil */}
            <section className="rounded-3xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-4xl font-bold text-gray-600">
                    {profissional.nome.charAt(0)}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    {profissional.nome}
                </h2>

                <p className="mt-1 text-gray-600">
                    {profissional.profissao}
                </p>

                <div className="mt-3 flex justify-center gap-4">
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <Star size={17} fill="currentColor"/>
                        {profissional.avaliacao}
                    </span>

                    <span className="flex items-center gap-1 text-gray-500">
                        <MapPin size={17}/>
                        {profissional.distancia}
                    </span>
                </div>
            </section>

            {/* Localização */}
            <section className="mt-5 rounded-2xl bg-white p-5">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <MapPin  size={20} className="text-[#8B3217]"/>
                    Localização
                </h3>

                <p className="mt-2 text-gray-600">
                    {profissional.cidade}
                </p>
            </section>

            {/* Serviço */}
            <section className="mt-4 rounded-2xl bg-white p-5">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <BriefcaseBusiness size={20} className="text-[#8B3217]"/>
                    Serviço
                </h3>

                <p className="mt-2 text-gray-600">
                    {profissional.profissao}
                </p>
            </section>

            {/* Botão */}
            <button 
                onClick={() => navigate(`/orcamento/${profissional.id}`)}
                className="mt-6 w-full rounded-2xl bg-[#8B3217] py-4 font-bold text-white shadow-md transition hover:bg-[#70260F] active:scale-[0.98]"
            >
                SOLICITAR AGENDAMENTO
            </button>
        </main>
    )

}

export default Profissional