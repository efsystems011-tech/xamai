import { useEffect, useState } from "react"

import {
  BriefcaseBusiness,
  LogOut,
  RefreshCcw,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

import SolicitacaoCard from "../components/SolicitacaoCard."

import {
  buscarSolicitacoesRecebidas,
} from "../services/api"

function PainelProfissional() {
  const navigate = useNavigate()

  const [solicitacoes, setSolicitacoes] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  const usuario = JSON.parse(
    localStorage.getItem("xamai_usuario")
  )

  async function carregarSolicitacoes() {
    try {
      setCarregando(true)
      setErro("")

      const dados = await buscarSolicitacoesRecebidas()

      setSolicitacoes(dados)

    } catch (erro) {
      console.error(erro)

      setErro(erro.message)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarSolicitacoes()
  }, [])

  function handleLogout() {
    localStorage.removeItem("xamai_token")
    localStorage.removeItem("xamai_usuario")

    navigate("/")
  }

  return (
    <main className="min-h-screen bg-[#F3EEE6] px-5 pb-10">
      <header className="flex items-center justify-between py-5">

        <div>

          <p className="text-sm text-gray-500">
            Painel profissional
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            Olá, {usuario?.nome}
          </h1>
        </div>

        <button 
          onClick={handleLogout}
          className="rounded-full p-3 text-gray-600 transition hover:bg-white hover:text-[#8B3217]"
          title="Sair"
        >
          <LogOut  size={20}/>
        </button>
      </header>

      <section className="mt-4 rounded-2xl bg-[#8B3217] p-6 text-white shadow-sm">
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-10 items-center justify-center rounded-xl bg-white/15">
            <BriefcaseBusiness size={28}/>
          </div>

          <div>
            <p className="text-sm text-white/70">
              Solicitações recebidas
            </p>

            <p className="text-3xl font-bold">
              {solicitacoes.length}
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Solicitações
          </h2>

          <p className="text-sm text-gray-500">
            Pedidos enviados pelos clientes
          </p>
        </div>

        <button
          onClick={carregarSolicitacoes}
          className="rounded-full bg-white p-3 text-gray-600 shadow-sm transition hover:text-[#8B3217]"
          title="Atualizar"
        >
          <RefreshCcw 
            size={18}
            className={
              carregando ? "animate-spin" : ""
            }
          />
        </button>
      </div>

      {carregando && (
        <div className="py-12 text-center taxt-gray-500">
          Carregando solicitações...
        </div>
      )}

      {erro && (
        <div className="mt-6 rounded-2xl bg-red-50 p-5 text-center ">
          <p className="font-semibold text-red-600">
            {erro}
          </p>

          <button
            onClick={carregarSolicitacoes}
            className="mt-4 rounded-lg bg-red-600 px-5 py-2 text-sm font-bold text-white"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && solicitacoes.length === 0 && (

        <div className="mt-8 rounded-2xl  bg-white p-8 text-center shadow-sm">

          <BriefcaseBusiness 
            size={42}
            className="mx-auto text-gray-300"
          />

          <h3 className="mt-4 font-bold textp-gray-900" >
            Nenhuma solicitação 
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Quando um cliente solicitar seus serviços o pedido aparecerá aqui.
          </p>
        </div>
      )}

      {!carregando && !erro && solicitacoes.length > 0 && (
        <div className="mt-5 space-y-4">
          {solicitacoes.map((solicitacao) => (
            <SolicitacaoCard 
              key={solicitacao.id}
              solicitacao={solicitacao}
              onClick={() => navigate(
                `/solicitacao/${solicitacao.id}`
              )}
            />

          )
          )}
        </div>
      )}
    </main>
  )
}

export default PainelProfissional