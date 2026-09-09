import {
    CalendarDays,
    MapPin,
    Clock,
    ChevronRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import StatusOrcamento from "./StatusOrcamento"

function OrcamentoCard({ orcamento }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/orcamento-detalhes/${orcamento.id}`)
    }
    return (
        <button
            onClick={handleClick}
            className="w-full rounded-2xl bg-white p-4 text-left shadow-sm transition hover:shadow-md active:scale-[0.99]">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">
                        {orcamento.servico}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        {orcamento.profissional}
                    </p>
                </div>

                <StatusOrcamento status={orcamento.status}/>
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays size={17}/>
                    <span>
                        {orcamento.data}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={17}/>
                    <span>
                        {orcamento.endereco}
                    </span>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Clock size={15}/>
                    Aguardando resposta
                </div>

                <ChevronRight 
                    size={20} 
                    className="text-gray-400"
                />
            </div>
        </button>
    )
}

export default OrcamentoCard