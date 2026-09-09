function StatusOrcamento({ status }) {
    const statusConfig = {
        aguardando: {
            texto: "Aguardando resposta",
            classe: "bg-yellow-100 text-yellow-700"
        },

        recebido: {
            texto: "Orçamento recebido",
            classe: "bg-blue-100 text-blue-700"
        },

        aceito: {
            texto: "Orçamento aceito",
            classe: "bg-green-100 text-green-700",
        },

        recusado: {
            texto: "Orçamento recusado",
            classe: "bg-red-100 text-red-700"
        },

        cancelado: {
            texto: "Cancelado",
            classe: "bg-gray-200 text-gray-600"
        },
    }

    const configuracao = statusConfig[status] || statusConfig.aguardando

    return(
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${configuracao.classe}`}>
            {configuracao.texto}
        </span>
    )
}

export default StatusOrcamento