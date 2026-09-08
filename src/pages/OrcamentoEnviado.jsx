import { CheckCircle} from "lucide-react"
import { useNavigate } from "react-router-dom"

function OrcamentoEnviado() {

    const navigate = useNavigate()

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F3EEE6] p-5">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle 
                        size={48}
                        className="text-green-600"
                    />
                </div>

                <h1 className="mt-6 text-3xl font-bold text-gray-900">Orçamento enviado</h1>

                <p className="mt-2 text-gray-600">
                    Sua solicitação foi registrada com sucesso.
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    Agora você pode acompanhar seus orçamentos pelo aplicativo.
                </p>

                <button 
                    onClick={() => navigate("/orcamentos")}
                    className="mt-8 w-full rounded-xl bg-[#8B3217] py-4 font-bold text-white transition hover:bg-[#70260F]"
                >
                    MEUS ORÇAMENTOS
                </button>

                <button
                    onClick={() => navigate("/home")}
                    className="mt-3 w-full rounded-xl border border-gray-300 py-4 font-bold text-gray-700 transition hover:bg-gray-50"
                >
                    VOLTAR PARA HOME
                </button>
            </div>
        </main>
    )
}

export default OrcamentoEnviado