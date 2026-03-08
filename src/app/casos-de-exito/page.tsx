import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Casos de Éxito en Selección | Avanzed',
    description: 'Proyectos finalizados con éxito aportando odontólogos y cirujanos a clínicas que buscan rentabilidad y prestigio.',
};

export default function CasosDeExitoPage() {
    const casos = [
        {
            title: "Expansión en Red de Clínicas Boutique",
            challenge: "Incorporar 4 odontólogos generales y 2 endodoncistas exclusivos en menos de 60 días para la apertura de dos nuevas sedes.",
            solution: "Headhunting proactivo cruzado con nuestra base de datos fidelizada. Auditoría de ritmos de trabajo y adaptación a las expectativas económicas de cada sede geográficamente dispersa.",
            result: "Proceso completado en 45 días. Plantilla cohesionada desde la apertura, facturando el 110% de la previsión inicial el primer mes."
        },
        {
            title: "Sustitución Confidencial del Director Médico",
            challenge: "Relevo urgente del cirujano jefe sin alarmar al equipo interno ni reducir la programación de cirugías avanzadas.",
            solution: "Búsqueda ciega a través de NDA (Acuerdo de Confidencialidad). Proceso llevado íntegramente off-site. Evaluación de portfolio de casos complejos.",
            result: "Transición en 30 días sin bajas en equipo. Incremento del ticket de rehabilitación gracias al perfil orientador del nuevo especialista."
        },
        {
            title: "Estabilización de Rotación en Prostodoncia",
            challenge: "Clínica de rehabilitación oral con alta repetición de trabajos de laboratorio y enfado de los pacientes debido a rotación del perfil de prótesis.",
            solution: "Identificamos que la clínica solicitaba un perfil mal definido en términos económicos. Se ajustó el package salarial y se reclutó un especialista en flujo digital cad/cam.",
            result: "Reducción de repetición protésica del 18% al 3% anual."
        }
    ];

    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Evidencia y Solidez</span>
                    <h1 className="text-h1 mb-6 text-dark">Resultados clínicos de contrataciones acertadas</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        La mejor prueba de nuestro criterio clínico y metodológico es el impacto económico y operacional que genera el talento que seleccionamos para nuestros clientes.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-16">
                        {casos.map((caso, i) => (
                            <div key={i} className="bg-perola-light border-l-4 border-terracota p-10 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:scale-110 transition-transform"></div>
                                <h2 className="text-h2 text-dark mb-8 relative z-10">{caso.title}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                    <div>
                                        <h3 className="text-overline tracking-widest text-terracota mb-3">El Desafío</h3>
                                        <p className="text-body-small text-gray-dark">{caso.challenge}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-overline tracking-widest text-terracota mb-3">La Solución</h3>
                                        <p className="text-body-small text-gray-dark">{caso.solution}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-overline tracking-widest text-terracota mb-3">El Resultado</h3>
                                        <p className="text-body-small text-gray-dark font-bold">{caso.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-dark text-white py-24">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-h2 text-white mb-8">¿Quieres que tu clínica sea el próximo éxito?</h2>
                    <Link href="/contacto" className="bg-terracota text-white px-10 py-5 text-[14px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
                        Estudiemos tu caso ahora
                    </Link>
                </div>
            </section>
        </div>
    );
}
