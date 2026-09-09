import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    ImagePlus,
    X,
} from "lucide-react"

import { useState } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { profissionais } from "../data/profissionais"

import { useOrcamentos} from "../context/OrcamentoContext"

function Orcamento() {

    const [formulario, setFormulario] = useState({
        descricao: "",
        data: "",
        endereco: "",
    })

    const [fotos, setFotos] = useState([])

    const navigate = useNavigate()

    const { id } = useParams()

    const profissional = profissionais.find(
        (item) => item.id === Number(id)
    )

    const { adicionarOrcamento } = useOrcamentos()

    function handleSubmit(evento) {
        evento.preventDefault()

        if(formulario.descricao.trim() === "") {
            alert("Descreva o serviço que você precisa.")
            return
        }

        if(formulario.data === "") {
            alert("Escolha uma data.")
            return
        }

        if(formulario.endereco.trim() === "") {
            alert("Informe o local do serviço.")
            return
        }

        const orcamento = {
            id: Date.now(),
            profissionalId: profissional.id,
            profissional: profissional.nome,
            servico: profissional.profissao,
            ...formulario,
            fotos,
            status: "aguardando",
        }

       adicionarOrcamento(orcamento)

       navigate("/orcamento-enviado")
    }

    function handleFotos(evento) {
        const arquivos = Array.from(evento.target.files)

        setFotos((fotosAnteriores) => {
            const novasFotos =  [
            ...fotosAnteriores,
            ...arquivos,
        ]

        return novasFotos.slice(0, 5)
        })
    }

    function handleRemoverFotos(indexParaRemover) {
        setFotos((fotosAtuais) => fotosAtuais.filter(
            (_, index) => index !== indexParaRemover
        ))
    }

    if(!profissional) {
        return(
            <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Profissional não encontrado
                    </h1>

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
        <main className="min-h-screen bg-[#F3eee6] px-5 pb-8">

            {/* Cabeçalho */}
            <header className="flex items-center gap-4 py-5">
                <button
                    onClick={() => navigate(-1)}
                    className="rounded-full p-2 text-gray-700 transition hover:bg-white"
                >
                    <ArrowLeft size={22}/>
                </button>

                <div>
                    <h1 className="text-xl font-bold text-gray-900">
                        Solicitar orçamento
                    </h1>

                    <p className="text-sm text-gray-600">
                        Para {profissional.nome}
                    </p>
                </div>
            </header>

            {/* Conteúdo */}
            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Serviço */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <label className="block text-sm font-semibold text-gray-700">
                        SERVIÇO
                    </label>

                    <div className="mt-2 rounded-xl bg-gray-200 px-4 py-3">
                        {profissional.profissao}
                    </div>
                </div>

                {/* Descrição */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <label 
                        htmlFor="descricao"
                        className="block text-sm font-semibold text-gray-700"    
                    >
                        DESCREVA O SERVIÇO
                    </label>

                    <textarea 
                        id="descricao"
                        rows="5"
                        placeholder="Explique o que você precisa..."
                        value={formulario.descricao}
                        onChange={(evento) => setFormulario({
                            ...formulario, descricao: evento.target.value,
                        })}
                        className="mt-2 w-full resize-none rounded-xl bg-gray-200 px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#8b3217]"
                    />
                </div>

                {/* Data */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <label 
                        htmlFor="data"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                        <CalendarDays size={18}/>
                        DATA DESEJADA
                    </label>

                    <input 
                        type="date" 
                        id="data"
                        value={formulario.data}
                        onChange={(evento) => setFormulario({
                            ...formulario,
                            data: evento.target.value,
                        })}
                        className="mt-2 w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#8B3217]"
                    />
                </div>

                {/* Localização */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <label 
                        htmlFor="endereco"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                        <MapPin size={18}/>
                        LOCAL DO SERVIÇO
                    </label>

                    <input 
                        type="text" 
                        id="endereco"
                        placeholder="Digite o endereço"
                        value={formulario.endereco}
                        onChange={(evento) => setFormulario({
                            ...formulario,
                            endereco: evento.target.value,
                        })}
                        className="mt-2 bg-gray-200 rounded-xl w-full px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#8B3217]" 
                    />
                </div>

                {/* Fotos */}
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                    
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <ImagePlus size={18}/>
                        FOTOS DO SERVIÇO
                    </label>

                    <p className="mt-1 text-xs text-gray-500">
                        {fotos.length}/5 fotos adicionadas
                    </p>

                    <label
                        htmlFor="fotos"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 py-6 text-gray-500 transition hover:border-[#8B3217] hover:text-[#8B3217]"
                    >
                        <ImagePlus size={22}/>
                        Adicionar fotos
                    </label>

                    <input 
                        type="file" 
                        id="fotos"
                        accept="image/*"
                        multiple
                        onChange={handleFotos}
                        className="hidden" 
                    />

                    {fotos.length > 0 && (
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {fotos.map((foto, index) => (
                                <div
                                    key={`${foto.name}-${index}`}
                                    className="relative aspect-square overflow-hidden rounded-xl bg-gray-200"
                                >
                                    <img src={URL.createObjectURL(foto)}
                                    alt={`Foto ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => handleRemoverFotos(index)}
                                        className="absolute right-1 flex top-1 h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white"
                                    >
                                        <X size={16}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Enviar */}
                <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#8B3217] py-4 font-bold text-white shadow-md transition hover:bg-[#70260F] active:scale-[0.98]"
                >
                    SOLICITAR ORÇAMENTO
                </button>
            </form>
        </main>
    )

}

export default Orcamento