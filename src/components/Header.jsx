import {
    Menu,
    Bell,
    Share2,
    Search

} from "lucide-react"

function Header() {

    return (
        <header className="flex items-center justify-between px-5 py-4">

            {/* Menu */}
            <button 
                className="text-gray-500 transition hover:text-[#8b3217]"
                aria-label="Abrir menu"
            >
                <Menu size={22} />
            </button>

        {/* Logo */}
        <div className="text-center">
            <h1 className="text-3x font-extrabold tracking-tight text-[#8B3217]">
                Xamai
            </h1>

            <p className="mt-1 text-[9px] font-semibold text-gray-600">
                Que resolve!
            </p>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3">
            <button
                className="text-gray-500 transition hover:text-[#8B3217]"
                aria-label="Notificações"    
            >
                <Bell size={19}/>
            </button>

            <button
                className="text-gray-500 transition hover:text-[#8B3217]"
                aria-label="Compartilhar"
            >
                <Share2 size={19}/>
            </button>

            <button
                className="text-gray-500 transition hover:text-[#8B3217]"
                aria-label="Pesquisar"
            >
                <Search size={19}/>
            </button>
        </div>

        </header>
    )
}

export default Header