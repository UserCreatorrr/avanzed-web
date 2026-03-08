import React from 'react';
import Link from 'next/link';

export interface ServicePageProps {
    h1: string;
    subheadline: string;
    targetAudience: string[];
    problemSolved: string;
    howWeWork: string[];
    rolesCovered: string[];
    whyAvanzed: { title: string; desc: string }[];
    methodology: { title: string; desc: string }[];
    expectedResults: string[];
    faqs: { q: string; a: string }[];
    relatedLinks: {
        specialties: { name: string; href: string }[];
        profiles: { name: string; href: string }[];
        blog: { name: string; href: string }[];
    };
}

export default function ServicePageTemplate({ data }: { data: ServicePageProps }) {
    return (
        <>
            {/* 1, 2, 3. Hero */}
            <section className="bg-perola text-dark py-24 border-b border-perola-dark mt-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-overline text-terracota mb-6 block">Servicio Especializado</span>
                    <h1 className="text-h1 mb-6 text-dark">{data.h1}</h1>
                    <p className="text-body text-gray-dark mb-10">{data.subheadline}</p>
                    <div className="flex gap-6 items-center">
                        <Link href="/contacto" className="bg-terracota text-white px-8 py-4 text-overline transition-colors hover:bg-terracota-dark">
                            Solicitar propuesta
                        </Link>
                        <Link href="/metodologia" className="text-dark border-b-2 border-terracota pb-1 text-[13px] font-bold tracking-wider uppercase font-heading hover:text-terracota transition-colors">
                            Conocer metodología
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Para quién es este servicio & 5. Qué problema resuelve */}
            <section className="py-24 bg-white border-b border-perola-light">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-h2 text-dark mb-6">¿Para quién es este servicio?</h2>
                            <ul className="space-y-4">
                                {data.targetAudience.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-body text-gray-dark">
                                        <span className="text-terracota font-bold">—</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-beige-rose-light p-8 border-l-4 border-terracota">
                            <h2 className="text-h3 text-dark mb-4">El problema que resolvemos</h2>
                            <p className="text-body text-gray-dark">{data.problemSolved}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Cómo trabaja Avanzed & 7. Qué perfiles cubrimos */}
            <section className="py-24 bg-perola-light">
                <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <h2 className="text-h2 text-dark mb-8">Cómo trabajamos en Avanzed</h2>
                        <div className="space-y-6">
                            {data.howWeWork.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-terracota font-heading font-bold font-xl">0{i + 1}.</span>
                                    <p className="text-body text-gray-dark">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 bg-white p-8 border border-perola-dark shadow-sm">
                        <h3 className="text-h3 text-dark mb-6">Perfiles que cubrimos</h3>
                        <ul className="space-y-3">
                            {data.rolesCovered.map((role, i) => (
                                <li key={i} className="text-body-small text-gray pb-3 border-b border-perola-dark last:border-0">{role}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 8. Por qué Avanzed */}
            <section className="py-24 bg-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bright-red opacity-10 blur-3xl rounded-full"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-overline text-terracota mb-4 block">Diferencial</span>
                        <h2 className="text-h2 text-white">Por qué Avanzed para este proceso</h2>
                        <p className="text-body mt-4 text-white/70 max-w-2xl mx-auto">
                            Especialización real, criterio clínico y foco en el resultado a largo plazo.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.whyAvanzed.map((wa, i) => (
                            <div key={i} className="bg-white/5 p-6 border-t-2 border-terracota hover:border-bright-red transition-colors">
                                <h4 className="font-heading font-bold text-lg mb-3">{wa.title}</h4>
                                <p className="text-body-small text-white/60">{wa.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Nuestra metodología */}
            <section className="py-24 bg-white border-b border-perola-light border-t-[3px] border-terracota">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-h2 text-dark mb-12 text-center">Fases de la Metodología</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.methodology.map((m, i) => (
                            <div key={i} className="bg-perola-light p-6 border border-perola-dark">
                                <span className="text-terracota font-bold block mb-2">Fase 0{i + 1}.</span>
                                <h4 className="font-heading font-bold text-lg mb-3 text-dark">{m.title}</h4>
                                <p className="text-body-small text-gray-dark">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Resultados esperables */}
            <section className="py-24 bg-white border-b border-perola-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-h2 text-dark mb-8">Resultados esperables</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {data.expectedResults.map((res, i) => (
                            <div key={i}>
                                <div className="w-12 h-12 bg-perola rounded-full flex items-center justify-center mx-auto mb-4 text-terracota font-bold">✓</div>
                                <p className="text-body-small text-gray-dark font-medium">{res}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FAQs */}
            <section className="py-24 bg-perola">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-h2 text-dark text-center mb-16">Preguntas frecuentes del proceso</h2>
                    <div className="space-y-4">
                        {data.faqs.map((faq, i) => (
                            <details key={i} className="bg-white p-6 border border-perola-dark group cursor-pointer">
                                <summary className="text-h3 text-dark font-bold list-none flex justify-between items-center">
                                    {faq.q}
                                    <span className="text-terracota text-2xl group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-body text-gray pt-4 border-t border-perola-dark">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. Prueba social & 13. CTA final */}
            <section className="bg-dark py-24 text-white">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <p className="text-quote text-bright-red mb-12">"Procesos seguros. Resultados fiables."</p>
                    <span className="text-overline text-terracota mb-6 block">Pasos siguientes</span>
                    <h2 className="text-h1 text-white mb-8">Asegura la calidad de tu próximo equipo</h2>
                    <Link href="/contacto" className="bg-terracota text-white px-10 py-5 text-[14px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
                        Solicitar propuesta
                    </Link>
                </div>
            </section>

            {/* 14. Enlaces contextuales (Interlinking) */}
            <section className="bg-perola-light py-16 border-t border-perola-dark border-b-8 border-terracota">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h3 className="text-overline text-terracota mb-8 text-center">Continúa explorando</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-body-small">
                        <div>
                            <h4 className="font-heading font-bold text-dark mb-4">Especializaciones</h4>
                            <ul className="space-y-2">
                                {data.relatedLinks.specialties.map((link, i) => (
                                    <li key={i}><Link href={link.href} className="text-gray hover:text-terracota transition-colors">{link.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-dark mb-4">Perfiles Relacionados</h4>
                            <ul className="space-y-2">
                                {data.relatedLinks.profiles.map((link, i) => (
                                    <li key={i}><Link href={link.href} className="text-gray hover:text-terracota transition-colors">{link.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-dark mb-4">Artículos del Blog</h4>
                            <ul className="space-y-2">
                                {data.relatedLinks.blog.map((link, i) => (
                                    <li key={i}><Link href={link.href} className="text-gray hover:text-terracota transition-colors">{link.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
