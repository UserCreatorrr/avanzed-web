import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Especializaciones Odontológicas para Selección | Avanzed',
    description: 'Conoce las diferentes áreas odontológicas (Endodoncia, Cirugía, Prostodoncia, etc.) en las que somos expertos reclutando talento para tu clínica.',
};

export default function EspecializacionesHubPage() {
    const especializaciones = [
        { title: 'Odontología General', href: '/especializaciones/odontologia-general', desc: 'Perfiles todoterreno alineados con tu nivel asistencial.' },
        { title: 'Endodoncia', href: '/especializaciones/endodoncia', desc: 'Especialistas con procesos rigurosos y microscopía.' },
        { title: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora', desc: 'Criterio técnico, estética y experiencia probada.' },
        { title: 'Cirugía Bucal u Oral', href: '/especializaciones/cirugia-bucal-oral', desc: 'Implantólogos y cirujanos de alta fiabilidad.' },
        { title: 'Prostodoncia', href: '/especializaciones/prostodoncia', desc: 'Expertos en rehabilitación oral compleja.' }
    ];

    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Áreas de Especialización</span>
                    <h1 className="text-h1 mb-6 text-dark">Dominio real de cada área odontológica</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        La odontología contemporánea exige hiperespecialización. Seleccionamos talento comprendiendo a fondo los criterios clínicos de cada rama.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {especializaciones.map((s, i) => (
                            <Link key={i} href={s.href} className="group border-t-4 border-perola-dark hover:border-terracota p-8 transition-colors block bg-perola-light text-center h-full">
                                <h2 className="text-h3 text-dark mb-4 group-hover:text-terracota transition-colors">{s.title}</h2>
                                <p className="text-body-small text-gray mb-6">{s.desc}</p>
                                <span className="inline-block text-terracota font-bold text-[12px] uppercase tracking-wider">Ver perfil →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
