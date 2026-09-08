import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import BottomNavigation from "../components/BottomNavigation";

import { servicos } from "../data/servicos"

function Home() {

    return (
        <main className="min-h-screen bg-[#F3EEE6]">
            <Header />

            <section className="px-5 pt-4 pb-24">
                <div className="mb-6 items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Tipo de Serviço
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                    {servicos.map((servico) => (
                        <ServiceCard 
                            key={servico.id}
                            nome={servico.nome}
                            icone={servico.icone}
                            slug={servico.slug}
                        />
                    ))}
                </div>
            </section>

            <BottomNavigation />
            
        </main>
    )
}

export default Home