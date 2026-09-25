import { profissionais } from "../data/profissionais"

const API_URL = "http://localhost:3000"

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
    const resposta = await fetch(
        `${API_URL}/api/solicitacoes`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dados),
        }
    )

    if(!resposta.ok) {
        throw new Error(
            "Erro ao criar solicitação."
        )
    }

    return resposta.json()
}

export async function buscarSolicitacoes() {
    const resposta = await fetch(
        `${API_URL}/api/solicitacoes`
    )

    if(!resposta.ok) {
        throw new Error(
            "Erro ao buscar solicitações"
        )
    }

    return resposta.json()
}

export async function buscarSolicitacao(id) {
    const resposta = await fetch(
        `${API_URL}/api/solicitacoes/${id}`
    )

    if(!resposta.ok) {
        throw new Error(
            "Erro ao buscar solicitação"
        )
    }

    return resposta.json()
}

