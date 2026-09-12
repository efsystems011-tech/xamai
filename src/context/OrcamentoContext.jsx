import { createContext, useContext, useState } from "react";

const OrcamentosContext = createContext()

export function OrcamentosProvider({ children }) {
    const [orcamentos, setOrcamentos] = useState([
        {
            id: 1001,
            cliente: {
                nome: "Maria Oliveira"
            },

            profissionalId: 1,
            profissional: "João Silva",
            servico: "Eletricista",
            descricao: "Preciso instalar duas tomadas e trocar um interruptor.",
            data: "15/09/2026",

            endereco: "Rua das flores, 100",
            fotos: [],
            status: "aguardando",
            valor: null,
            observacao: "",
            prazo: "",
        },

        {
            id: 1002,

            cliente: {
                nome: "Carlos Santos",
            },

            profissionalId: 1,

            profissional: "João Silva",

            servico: "Eletricista",

            descricao:
                "Preciso verificar uma tomada que está apresentando problema.",

            data: "17/09/2026",

            endereco: "Avenida Brasil, 250",

            fotos: [],

            status: "aguardando",

            valor: null,

            observacao: "",

            prazo: "",
        },

        {
            id: 1003,

            cliente: {
                nome: "Carlos Santos",
            },

            profissionalId: 1,

            profissional: "Enzo Furtuoso",

            servico: "Técnico",

            descricao:
                "Preciso formatar um computador e instalar o Office.",

            data: "30/09/2026",

            endereco: "Avenida João Pessoa, 5999",

            fotos: [],

            status: "aguardando",

            valor: null,

            observacao: "",

            prazo: "",
        },

    ])

    function adicionarOrcamento(novoOrcamento) {
        setOrcamentos((orcamentosAtuais) => [
            ...orcamentosAtuais,
            novoOrcamento,
        ])
    }

    function responderOrcamento(id, resposta) {
        setOrcamentos((orcamentosAtuais) =>
            orcamentosAtuais.map((orcamento) => {
                if (orcamento.id !== id) {
                    return orcamento
                }

                return {
                    ...orcamento,
                    ...resposta,
                }
            })
        )
    }

    return (
        <OrcamentosContext.Provider
            value={{
                orcamentos,
                adicionarOrcamento,
                responderOrcamento,
            }}
        >
            {children}
        </OrcamentosContext.Provider>
    )
}


export function useOrcamentos() {
    return useContext(OrcamentosContext)
}