import {
    Home,
    Map,
    BriefcaseBusiness,
    User,
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function BottomNavigation() {

    const  navigate = useNavigate()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#8b3217] px-4 py-3 shadow-lg">
            <div className="mx-auto flex max-w-md items-center justify-around">
                <button 
                    onClick={() => navigate("/home")}
                    className="flex flex-col items-center gap-1 text-white">
                    <Home size={22}/>
                    <span className="text-[11px]">
                        Início
                    </span>
                </button>

                <button 
                    onClick={() => navigate("/explorar")}
                    className="flex flex-col items-center gap-1 text-white">
                    <Map size={22} />
                    <span className="text-[11px]">
                        Explorar
                    </span>
                </button>

                <button 
                    onClick={() => navigate("/orcamentos")}
                    className="flex flex-col items-center gap-1 text-white">
                    <BriefcaseBusiness size={22} />
                    <span className="text-[11px]">
                        Orçamentos
                    </span>
                </button>

                <button 
                    onClick={() => navigate("/perfil")}
                    className="flex flex-col items-center gap-1 text-white">
                    <User size={22} />
                    <span className="text-[11px]">
                        Perfil
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default BottomNavigation