import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Perfiles Odontológicos para Clínicas | Avanzed',
    description: 'Explora los perfiles clínicos y directivos que evaluamos e incorporamos a las mejores clínicas dentales.',
};

export default function PerfilesHubPage() {
    const perfiles = [
        { title: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general', desc: 'El pilar de la clínica. Evaluamos diagnóstico y trato.' },
        { title: 'Contratar Endodoncista', href: '/perfiles/seleccion-endodoncista', desc: 'Precisión microscópica y destreza técnica asegurada.' },
        { title: 'Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador', desc: 'Especialistas en estética y composites complejos.' },
        { title: 'Contratar Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral', desc: 'Implantología segura y regeneración tisular.' },
        { title: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista', desc: 'Expertos en rehabilitación y oclusión digital.' }
    ];

    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Directorio de Perfiles Clínicos</span>
                    <h1 className="text-h1 mb-6 text-dark">Encontramos al experto exacto para tu vacante</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        Cada sillón dental vacío o mal cubierto cuesta prestigio y rentabilidad. Filtramos a los profesionales idóneos para que tú solo tengas que tomar la decisión final.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {perfiles.map((p, i) => (
                            <Link key={i} href={p.href} className="group border border-perola-dark hover:border-terracota p-8 transition-colors block text-left relative overflow-hidden bg-white">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-perola rounded-bl-full group-hover:bg-terracota transition-colors"></div>
                                <h2 className="text-h3 text-dark mb-4">{p.title}</h2>
                                <p className="text-body-small text-gray mb-6">{p.desc}</p>
                                <span className="text-terracota font-bold text-[12px] uppercase tracking-wider">Ver perfil buscado →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
