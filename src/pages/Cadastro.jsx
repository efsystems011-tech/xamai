import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input"
import Button from "../components/Button"

import { cadastrarUsuario } from "../services/api"

function Cadastro() {
    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    async function handleCadastro(evento) {
        evento.preventDefault()

        setMensagem("")
        setErro("")

        try {
            const resultado = await cadastrarUsuario({
                nome,
                email,
                senha,
            })

            setMensagem(resultado.mensagem)

            setNome("")
            setEmail("")
            setSenha("")
        } catch (erro) {
            console.error(erro)

            setErro(erro.message)
        }
    }

    return (
        <main className="min-h-screen bg-[#F3EEE6] px-5">
            <div className="mx-auto w-full max-w-md">
                <header className="flex items-center gap-3 py-5">
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-full p-2 text-gray-700 trasition hover:bg-white"
                    >
                        <ArrowLeft size={22}/>
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Criar conta
                    </h1>
                </header>

                <div className="mt-8">

                    <h2 className="text-3xl font-bold text-gra-900">
                        Bem-vindo ao Xamai
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Crie sua conta para solicitar serviços.
                    </p>

                </div>

                <form 
                    onSubmit={handleCadastro}
                    className="mt-8 space-y-5"
                >

                    <Input
                        id="nome"
                        label="NOME"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                    />

                    <Input
                        id="email"
                        label="EMAIL"
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />

                    <Input
                        id="senha"
                        label="SENHA"
                        type="password"
                        placeholder="Mínimo de 6 caracteres"
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)}
                    />

                    <Button type="submit">
                        CRIAR CONTA
                    </Button>

                </form>

                {mensagem && (
                    <p className="mt-5 text-center font-semibold text-green-700">
                        {mensagem}
                    </p>
                )}

                {erro && (
                    <p className="mt-5 text-center font-semibold text-red-600">
                        {erro}
                    </p>
                )}

            </div>
        </main>
    )
}

export default Cadastro