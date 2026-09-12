import {
  Bell,
  BriefcaseBusiness,
  User,
} from "lucide-react"

import { useOrcamentos } from "../context/OrcamentoContext"

import { useNavigate } from "react-router-dom"

function PainelProfissional() {

  const { orcamentos } = useOrcamentos()

  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#F3EEE6] px-5 pb-8">

      <header className="flex items-center justify-between py-5">

        <div>
          <p className="text-sm text-gray-500">
            Área do profissional
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            Olá, João! 👋
          </h1>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm"
          aria-label="Notificações"
        >
          <Bell size={20} />
        </button>

      </header>

      <section className="mt-3">

        <div className="rounded-2xl bg-[#8B3217] p-5 text-white shadow-sm">

          <div className="flex items-center gap-3">

            <BriefcaseBusiness size={28} />

            <div>
              <p className="text-sm text-white/80">
                Solicitações
              </p>

              <p className="text-3xl font-bold">
                {orcamentos.length}
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="mt-7">

        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Solicitações recebidas
          </h2>

          <p className="text-sm text-gray-600">
            Clientes procurando seus serviços
          </p>
        </div>

        <div className="space-y-4">

          {orcamentos.map((orcamento) => (

            <div
              key={orcamento.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >

              <div className="flex items-start justify-between gap-3">

                <div>
                  <h3 className="font-bold text-gray-900">
                    {orcamento.cliente}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {orcamento.servico}
                  </p>
                </div>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                  Aguardando
                </span>

              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {orcamento.descricao}
              </p>

              <div className="mt-4 border-t border-gray-100 pt-4">

                <p className="text-sm text-gray-500">
                  📅 {orcamento.data}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  📍 {orcamento.endereco}
                </p>

              </div>

              <button
                onClick={() =>  navigate(`/painel-profissional/solicitacao/${orcamento.id}`)}
                className="mt-5 w-full rounded-xl bg-[#8B3217] py-3 font-bold text-white transition hover:bg-[#70260F]"
              >
                VER SOLICITAÇÃO
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}

export default PainelProfissional