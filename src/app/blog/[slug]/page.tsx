import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import Link from 'next/link';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const p = await params;
    const post = posts.find((p_in) => p_in.slug === p.slug);

    if (!post) {
        return { title: 'Post no encontrado' };
    }

    return {
        title: `${post.title} | Blog Avanzed`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const p = await params;
    const post = posts.find((p) => p.slug === p.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-20">
            <header className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Link href="/blog" className="text-sm font-bold text-gray hover:text-terracota transition-colors mb-8 inline-block">← Volver al blog</Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[11px] font-bold tracking-widest uppercase font-heading text-white bg-terracota px-3 py-1">{post.category}</span>
                        <span className="text-[11px] font-bold text-gray-dark uppercase">{post.readTime}</span>
                    </div>
                    <h1 className="text-h1 mb-6 text-dark leading-tight">{post.title}</h1>
                    <p className="text-body text-gray-dark text-xl">{post.excerpt}</p>
                </div>
            </header>

            <div className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    {/* Article content injected safely as per requested simple HTML implementation */}
                    <div
                        className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:text-h2 prose-h2:mb-6 prose-h3:text-h3 prose-h3:mt-8 prose-h3:mb-4 prose-p:text-body prose-p:mb-6 prose-p:text-gray-dark max-w-none prose-a:text-terracota prose-a:border-b prose-a:border-terracota prose-a:no-underline hover:prose-a:text-terracota-dark hover:prose-a:border-terracota-dark"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-16 border-t border-perola-dark text-center">
                        <h3 className="text-h2 text-dark mb-6">¿Preparado para asegurar el talento de tu clínica?</h3>
                        <Link href="/contacto" className="bg-terracota text-white px-8 py-4 text-[13px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
                            Hablemos sobre tu equipo
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
