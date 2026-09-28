import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Logo from "../components/Logo"
import Input from "../components/Input"
import Button from "../components/Button"

import { loginUsuario } from "../services/api"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    async function handleLogin(evento) {
        evento.preventDefault()

        setMensagem("")
        setErro("")

        try {
            const resultado = await loginUsuario({
                email,
                senha,
            })

            localStorage.setItem(
                "xamai_token",
                resultado.token
            )

            localStorage.setItem(
                "xamai_usuario",
                JSON.stringify(resultado.usuario)
            )

            setMensagem(
                "Login realizado com sucesso!"
            )

            navigate("/home")

        } catch (erro) {
            console.error(erro)

            setErro(erro.message)
        }
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
                        id="email"
                        label="EMAIL"
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
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

                <p className="mt-6 text-center text-sm text-gray-600">
                    Ainda não possui uma conta?{" "}

                    <button
                        type="button"
                        onClick={() => navigate("/cadastro")}
                        className="font-bold text-[#8B3217] hover:underline "
                    >
                        Criar conta
                    </button>

                </p>

            </div>
        </main>
    )
}

export default Login