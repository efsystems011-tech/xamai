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

    return(
        <OrcamentosContext.Provider
            value={{
                orcamentos,
                adicionarOrcamento,
            }}
        >
            { children }
        </OrcamentosContext.Provider>
    )
}

export function useOrcamentos() {
    return useContext(OrcamentosContext)
}