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

