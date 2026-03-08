import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Sobre Avanzed | Consultoría de talento odontológico',
    description: 'Conoce a Avanzed, la firma boutique de selección especializada en ayudar a clínicas y grupos dentales a incorporar perfiles de alta odontología.',
};

export default function SobreAvanzedPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-overline text-terracota mb-6 block">Sobre Nosotros</span>
                            <h1 className="text-h1 mb-6 text-dark">Especialización radical en talento odontológico</h1>
                            <p className="text-body text-gray-dark mb-8">
                                Nacimos porque el sector clínico exigía un intermediario que entendiera la diferencia entre una corona de zirconio y una resina, y que supiera evaluar quién las ejecuta mejor.
                            </p>
                            <Link href="/metodologia" className="text-dark border-b-2 border-terracota pb-1 text-[13px] font-bold tracking-wider uppercase font-heading hover:text-terracota transition-colors">
                                Conoce nuestra forma de trabajo
                            </Link>
                        </div>
                        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                            {/* Brand book demands authentic photography, replacing placeholder with the team photo provided */}
                            <Image
                                src="/team.jpg"
                                alt="Equipo Avanzed interactuando"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-h2 text-dark mb-10">La selección no se delega a cualquiera</h2>
                    <p className="text-quote text-terracota mb-12">"Una clínica es tan buena como el dentista que atiende ese martes a las 19:00. Aseguramos que sea el mejor posible."</p>
                    <p className="text-body text-gray-dark mx-auto">
                        Avanzed opera exclusivamente en odontología. Nuestro conocimiento de los másteres, perfiles salariales, aparatología clínica y frustraciones diarias de la gerencia nos permite evaluar a los candidatos como lo haría el propio Director Médico.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-dark text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <span className="text-overline text-terracota mb-10 text-center block">Principios Rectores</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="border-t border-terracota pt-6">
                            <h3 className="text-h3 font-bold mb-4">Rigor Clínico</h3>
                            <p className="text-body-small text-white/70">No somos gestores de currículums. Filtramos la destreza técnica, los protocolos y los casos reales del candidato.</p>
                        </div>
                        <div className="border-t border-terracota pt-6">
                            <h3 className="text-h3 font-bold mb-4">Alineación Estratégica</h3>
                            <p className="text-body-small text-white/70">Unimos a profesionales excelentes con proyectos que merecen la pena, garantizando la motivación a largo plazo.</p>
                        </div>
                        <div className="border-t border-terracota pt-6">
                            <h3 className="text-h3 font-bold mb-4">Confidencialidad Absoluta</h3>
                            <p className="text-body-small text-white/70">Protegemos los procesos de cambio directivo o incorporaciones sensibles mediante NDA estrictos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-perola-light py-24">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-h2 text-dark mb-8">Eleva el nivel de tu equipo clínico hoy mismo</h2>
                    <Link href="/contacto" className="bg-terracota text-white px-10 py-5 text-[14px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
                        Contacta con los especialistas
                    </Link>
                </div>
            </section>
        </div>
    );
}
