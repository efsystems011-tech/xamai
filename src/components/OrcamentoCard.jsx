import {
    CalendarDays,
    MapPin,
    Clock,
    ChevronRight,
} from "lucide-react"

function OrcamentoCard({ orcamento }) {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">
                        {orcamento.servico}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        {orcamento.profissional}
                    </p>
                </div>

                <span className="bg-yellow-100 rounded-full px-3 py-1 text-xs font-bold text-yellow-700">
                    Aguardando
                </span>
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
        </div>
    )
}

export default OrcamentoCard