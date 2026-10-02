import {
    User,
    Clock,
    ChevronRight,
} from "lucide-react"

function SolicitacaoCard({ solicitacao, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full rounded-2xl bg-white p-5 text-left shadow-sm transition hover:shadow-md actice:scale-[0.99]"
        >
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    <User size={22} />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <h3 className="truncate text-lg font-bold text-gray-900">
                                {solicitacao.cliente_nome}
                            </h3>

                            <p className="text-sm text-gray-500">
                                Cliente
                            </p>
                        </div>

                        <ChevronRight
                            size={20}
                            className="shrink-0 text-gray-400"
                        />
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                        {solicitacao.descricao}
                    </p>

                    <div className="mt-4 flex items-center justify-between ">

                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock
                                size={14}
                            />
                            {new Date(
                                    solicitacao.criado_em
                                ).toLocaleDateString("pt-BR")}
                        </span>

                        <span className="rounded-full bg-yellow px-3 py-1 text-xs font-bold capitalize text-yellow-700">
                            {solicitacao.status}
                        </span>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default SolicitacaoCard