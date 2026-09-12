import { createContext, useContext, useState } from "react";

const OrcamentosContext = createContext()

export function OrcamentosProvider({ children }) {
    const [orcamentos, setOrcamentos] = useState([])

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