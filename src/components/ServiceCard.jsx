import { useNavigate } from "react-router-dom"

function ServiceCard({ nome, icone: Icon, slug }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/resultados/${slug}`)
    }

    return(
        <button 
            onClick={handleClick}
            className="flex flex-col items-center gap-2">

            <div 
                className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-600 text-white shadow-sm transition hover:scale-105 hover:bg-[#8B3217]">
                <Icon size={38} strokeWidth={1.8}/>
            </div>

            <span className="text-sm font-semibold text-gray-700">
                {nome}
            </span>
        </button>
    )
}

export default ServiceCard