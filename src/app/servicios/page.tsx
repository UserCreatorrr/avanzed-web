import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Consultoría Especializada en RRHH y Selección Odontológica | Avanzed',
    description: 'Descubre nuestros servicios de selección, reclutamiento y headhunting para clínicas dentales exigentes.',
};

export default function ServiciosHubPage() {
    const servicios = [
        { title: 'Selección de personal odontología', href: '/servicios/seleccion-de-personal-odontologia', desc: 'Búsqueda especializada para equipos clínicos.' },
        { title: 'Reclutamiento dental España', href: '/servicios/reclutamiento-dental-espana', desc: 'Procesos rigurosos para cubrir vacantes a nivel nacional.' },
        { title: 'Headhunter odontología', href: '/servicios/headhunter-odontologia', desc: 'Búsqueda directa de perfiles quirúrgicos y altamente especializados.' },
        { title: 'RRHH Clínica Dental', href: '/servicios/rrhh-clinica-dental', desc: 'Acompañamiento en retención, onboarding y expansión de equipos.' },
        { title: 'Proceso selección dentista', href: '/servicios/proceso-seleccion-dentista', desc: 'Sistematización de la validación del talento dental.' }
    ];

    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Nuestros Servicios</span>
                    <h1 className="text-h1 mb-6 text-dark">Soluciones en selección odontológica</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        Acompañamos a clínicas dentales en el estratégico proceso de incorporación de talento.
                        Proporcionamos estructura, conocimiento clínico y seguridad en cada decisión.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicios.map((s, i) => (
                            <Link key={i} href={s.href} className="group border border-perola-dark hover:border-terracota p-8 transition-colors block bg-perola-light relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-terracota opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h2 className="text-h3 text-dark mb-4">{s.title}</h2>
                                <p className="text-body-small text-gray">{s.desc}</p>
                                <span className="mt-6 inline-block text-terracota font-bold text-sm">Ver detalles →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
