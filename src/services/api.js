import { Thermometer } from "lucide-react"
import { profissionais } from "../data/profissionais"

const API_URL = "http://localhost:3000"

function obterToken() {
    return localStorage.getItem("xamai_token")
}

export async function buscarProfissionais() {
    const resposta = await fetch(
        `${API_URL}/api/profissionais`
    )

    if(!resposta.ok) {
        throw new Error("Erro ao buscar profissionais")
    }

    return resposta.json()
}

export async function buscarProfissional(id) {
    const resposta = await fetch(
        `${API_URL}/api/profissionais/${id}`
    )

    if(!resposta.ok) {
        throw new Error("Erro ao buscar profissional")
    }

    return resposta.json()
}

export async function criarSolicitacao(dados) {
   const token = obterToken()

   const resposta = await fetch(
    `${API_URL}/api/solicitacoes`,
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(dados),
    }
   )

   const resultado = await resposta.json()

   if(!resposta.ok) {
    throw new Error(
        resultado.erro || "Erro ao criar solicitação."
    )
   }

   return resultado
}

export async function buscarSolicitacoes() {
    const token = obterToken()

    const resposta = await fetch(
        `${API_URL}/api/solicitacoes`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    const resultado = await resposta.json()

    if(!resposta.ok) {
        throw new Error(
            resultado.erro ||
            "Erro ao buscar solicitações"
        )
    }

    return resultado
}

export async function buscarSolicitacao(id) {

    const token = obterToken()

    const resposta = await fetch(
        `${API_URL}/api/solicitacoes/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    const resultado = await resposta.json()

    if(!resposta.ok) {
        throw new Error(
            resultado.erro ||
            "Erro ao buscar solicitação"
        )
    }

    return resultado
}

export async function cadastrarUsuario(dados) {
    const resposta = await fetch(
        `${API_URL}/api/usuarios`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(dados),
        }
    )

    const resultado = await resposta.json()

    if (!resposta.ok) {
        throw new Error(
            resultado.erro || "Erro ao cadastrar usuário."
        )
    }

    return resultado
}

export async function loginUsuario(dados) {
    const resposta = await fetch(
        `${API_URL}/api/usuarios/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(dados),
        }
    )

    const resultado = await resposta.json()

    if(!resposta.ok) {
        throw new Error(
            resultado.erro || "Erro ao realizar o login."
        )
    }

    return resultado
}

export async function buscarSolicitacoesRecebidas() {
    const token = obterToken()

    const resposta = await fetch(
        `${API_URL}/api/painel/solicitacoes`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    const resultado = await resposta.json()

    if (!resposta.ok) {
        throw new Error(
            resultado.erro || "Erro ao buscar solicitaçoes recebidas"
        )
    }

    return resultado
}

export async function criarOrcamento(dados) {
    const token = obterToken()

    const resposta = await fetch(
        `${API_URL}/api/orcamentos`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify(dados),
        }
    )

    const resultado = await resposta.json()

    if (!resposta.ok) {
        throw new Error(
            resultado.erro || "Erro ao criar orçamentos"
        )
    }

    return resultado
}