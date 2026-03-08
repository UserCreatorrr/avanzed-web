import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
    title: 'Blog y Recursos Especializados en Selección Odontológica | Avanzed',
    description: 'Lee nuestros artículos sobre cómo contratar perfiles odontológicos, reducir rotación y evaluar talento.',
};

export default function BlogHubPage() {
    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-overline text-terracota mb-6 block">Blog Clínico y Gestión</span>
                    <h1 className="text-h1 mb-6 text-dark">Recursos para una mejor toma de decisión</h1>
                    <p className="text-body text-gray-dark mb-10 max-w-3xl mx-auto">
                        Conocimiento y estrategias aplicables para directores médicos, gerentes y propietarios de clínicas dentales. Entiende cómo atraemos y validamos el talento.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col justify-between border border-perola-dark p-8 hover:border-terracota transition-colors bg-white hover:shadow-sm">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-[10px] font-bold tracking-widest uppercase font-heading text-terracota bg-perola px-3 py-1 rounded-full">{post.category}</span>
                                        <span className="text-[10px] font-bold text-gray-light uppercase">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-h3 text-dark mb-4 group-hover:text-terracota transition-colors line-clamp-3">{post.title}</h2>
                                    <p className="text-body-small text-gray line-clamp-3 mb-8">{post.excerpt}</p>
                                </div>
                                <span className="text-terracota font-bold text-[12px] uppercase tracking-wider block border-t border-perola-dark pt-4 w-full">Leer artículo →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
