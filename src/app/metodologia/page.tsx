import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Metodología Especializada Selección Odontología | Avanzed',
    description: 'Proceso de Selección, Evaluación, Integración y Seguimiento para incorporar perfiles odontológicos con la máxima fiabilidad.',
};

export default function MetodologiaPage() {
    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Nuestro Enfoque</span>
                    <h1 className="text-h1 mb-6 text-dark">Llevamos el rigor clínico a la selección de personal</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        La improvisación cuesta tiempo, dinero y reputación. Entendemos el sector odontológico porque hablamos su mismo idioma. Analizamos, evaluamos, integramos y seguimos cada incorporación.
                    </p>
                    <div className="inline-flex items-center justify-center p-4 border border-terracota/30 bg-white">
                        <span className="text-quote text-bright-red tracking-wide">"Del proceso al resultado."</span>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-20">

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center md:text-right">
                                <span className="text-[6rem] font-heading font-black text-perola-dark leading-none -mb-4 block">01</span>
                                <h2 className="text-h2 text-dark mb-2 relative z-10">Selección</h2>
                            </div>
                            <div className="md:w-2/3 border-l-4 border-terracota pl-8">
                                <p className="text-body text-gray-dark mb-4 drop-cap">
                                    Una búsqueda no comienza publicando un anuncio. Comienza analizando internamente tu clínica.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Auditoría del mapa de vacantes y salarios del entorno.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Redacción técnica de la oferta de valor hacia el profesional.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Headhunting activo y acceso a nuestra comunidad privada de odontólogos.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center md:text-right">
                                <span className="text-[6rem] font-heading font-black text-perola-dark leading-none -mb-4 block">02</span>
                                <h2 className="text-h2 text-dark mb-2 relative z-10">Evaluación</h2>
                            </div>
                            <div className="md:w-2/3 border-l-4 border-bright-red pl-8">
                                <p className="text-body text-gray-dark mb-4 drop-cap">
                                    El currículum solo inicia la conversación. Lo que define la aptitud de un clínico es su capacidad resolutiva real.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-bright-red">✓</span> Entrevistas por competencia sectorial y valores éticos.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-bright-red">✓</span> Revisión de portfolios, radiografías y protocolos clínicos (CBCT, diseño digital).</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-bright-red">✓</span> Test situacional basado en el ritmo real de tu clínica.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center md:text-right">
                                <span className="text-[6rem] font-heading font-black text-perola-dark leading-none -mb-4 block">03</span>
                                <h2 className="text-h2 text-dark mb-2 relative z-10">Integración</h2>
                            </div>
                            <div className="md:w-2/3 border-l-4 border-terracota pl-8">
                                <p className="text-body text-gray-dark mb-4 drop-cap">
                                    Una vez aceptada la oferta, empieza lo más delicado: sincronizar al profesional con el equipo existente.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Gestión documental y asesoramiento en el cierre.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Acompañamiento en el Onboarding corporativo y clínico de los primeros días.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-terracota">✓</span> Presentación armónica al equipo de higienistas, auxiliares y coordinadoras.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center md:text-right">
                                <span className="text-[6rem] font-heading font-black text-perola-dark leading-none -mb-4 block">04</span>
                                <h2 className="text-h2 text-dark mb-2 relative z-10">Seguimiento</h2>
                            </div>
                            <div className="md:w-2/3 border-l-4 border-gray-light pl-8">
                                <p className="text-body text-gray-dark mb-4 drop-cap">
                                    Nuestro compromiso transciende la firma del contrato. Verificamos la rentabilidad y calidad de vida generada.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-gray-dark">✓</span> Auditorías de clima en los días 30 y 90 tras la incorporación.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-gray-dark">✓</span> Alerta temprana de fricciones y mediación para resolverlas.</li>
                                    <li className="flex gap-2 text-body-small text-gray"><span className="text-gray-dark">✓</span> Activación de cláusulas de garantía de reposición si el ajuste decae.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bright-red opacity-10 blur-3xl rounded-full"></div>
                <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
                    <span className="text-overline text-terracota mb-6 block">Comparativa</span>
                    <h2 className="text-h1 text-white mb-8">No asumas riesgos delegando en recursos humanos generalistas</h2>
                    <p className="text-body text-white/70 mb-10">
                        Una mala contratación en odontología cuesta más que el salario mal invertido: cuesta pacientes e impacta en tu reputación local. Confía en la selección especializada.
                    </p>
                    <Link href="/contacto" className="bg-terracota text-white px-10 py-5 text-[14px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
                        Quiero más seguridad en mis contrataciones
                    </Link>
                </div>
            </section>
        </div>
    );
}
