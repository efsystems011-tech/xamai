import { useNavigate } from "react-router-dom"

import {
    Star,
    MapPin,
    ChevronRight
} from "lucide-react"

function ProfessionalCard({ profissional }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/profissional/${profissional.id}`)
    }

    return (
        <button 
            onClick={handleClick}
            className="w-full rounded-2xl bg-white p-4 text-left shadow-sm transition hover:shadow-md active:scale-[0.99]"
        >
            <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-600">
                    {profissional.nome.charAt(0)}
                </div>

                {/* Informações */}
                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-bold text-gray-900">
                        {profissional.nome}
                    </h3>

                    <p className="text-sm text-gray-600">
                        {profissional.profissao}
                    </p>

                    <div className="mt-1 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                            <Star
                                size={15}
                                fill="currentColor"
                            />

                            {profissional.avaliacao}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-gray-500">
                            <MapPin size={15} />

                            {profissional.cidade}
                        </span>
                    </div>
                </div>

                {/* Seta */}
                <ChevronRight
                    size={22}
                    className="shrink-0 text-gray-400"
                />
            </div>
        </button>
    )

}

export default ProfessionalCard