import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

import { criarSolicitacao} from "../services/api"

function Orcamento() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [descricao, setDescricao] = useState("")

  return (
    <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">

      <header className="flex items-center gap-4 py-5">
        <button
          onClick={() => navigate(-1)}
          className="rounded-full p-2 text-gray-700 hover:bg-white"
        >
          <ArrowLeft size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Solicitar orçamento
          </h1>

          <p className="text-sm text-gray-600">
            Conte o que você precisa
          </p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-5"
      >

        <div>
          <label
            htmlFor="descricao"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            DESCRIÇÃO DO SERVIÇO
          </label>

          <textarea
            id="descricao"
            value={descricao}
            onChange={(evento) =>
              setDescricao(evento.target.value)
            }
            placeholder="Descreva o serviço que você precisa..."
            rows={6}
            className="w-full resize-none rounded-xl bg-white p-4 text-gray-800 outline-none shadow-sm focus:ring-2 focus:ring-[#8B3217]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#8B3217] py-4 font-bold text-white transition hover:bg-[#70260F] active:scale-[0.98]"
        >
          ENVIAR SOLICITAÇÃO
        </button>

      </form>

    </main>
  )
}

export default Orcamento