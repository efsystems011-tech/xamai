import { use, useState } from "react"
import { useNavigate } from "react-router-dom"

import Logo from "../components/Logo"
import Input from "../components/Input" 
import Button from "../components/Button"

function Login() {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

    function handleLogin(evento) {
        evento.preventDefault()

       if (nome.trim() === "") {
        setMensagem("Digite seu nome")
        return
       }

       if (senha.trim() === "") {
        setMensagem("Digite sua senha")
        return
       }

       navigate("/home")
    }

    return (
        <main className="min-h-screen bg-[#F3EEE6] flex items-center justify-center p-4">
            <div className="w-full max-w-md">

                {/* logo */}
                <Logo />

                {/* Título */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Login
                    </h2>

                    <p className="mt-1 text-gray=600">
                        Entre para continuar
                    </p>
                </div>

                {/* Formulário */}
                <form 
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5">
                    {/* Nome */}
                   <Input
                        id="nome"
                        label="NOME"
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                   />

                    {/* Senha */}
                    <Input
                        id="senha"
                        label="SENHA"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)}
                    />

                    {/* Botão */}
                    <Button 
                        type="submit"
                        >
                        ENTRAR
                    </Button>

                    {/* Mensagem */}
                    {mensagem && (
                        <p className="text-center text-sm font-semibold text-[#8B3247]">{mensagem}</p>
                    )}
                </form>

                <p className="mt-1 text-gray-600 flex items-center justify-center ">Entre para continuar</p>
            </div>
        </main>
    )
}

export default Login