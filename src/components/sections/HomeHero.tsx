"use client"

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useRef } from "react";

export default function HomeHero() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.8]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-dark text-white">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Selección de personal odontología"
                        fill
                        className="object-cover"
                        priority
                    />
                    <motion.div
                        className="absolute inset-0 bg-dark"
                        style={{ opacity: overlayOpacity }}
                    />
                </div>

                {/* Content Revealed on Scroll */}
                <motion.div
                    className="container relative z-30 mx-auto px-8 md:pl-24 md:pr-12 pointer-events-auto"
                    style={{ opacity: contentOpacity, y: contentY }}
                >
                    <span className="text-overline text-white/70 mb-6 block drop-shadow-md">Consultoría de RRHH · Sector Odontológico</span>
                    <h1 className="text-h1 mb-6 max-w-4xl text-white drop-shadow-lg">
                        Selección de personal odontología para clínicas que priorizan la excelencia
                    </h1>
                    <p className="text-body text-white/90 max-w-2xl mb-10 text-lg drop-shadow-md">
                        Potenciamos los procesos de selección de clínicas odontológicas especializadas con una metodología rigurosa orientada a la seguridad, la fiabilidad y la calidad del equipo.
                    </p>

                    {/* Searchbar Request */}
                    <div className="max-w-xl mb-10 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full flex items-center shadow-2xl transition-all hover:bg-white/20">
                        <div className="pl-4 text-white/70">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="¿Qué perfil clínico buscas? (ej. Cirujano Oral)"
                            className="bg-transparent border-none outline-none text-white placeholder-white/60 px-4 py-2 w-full text-body-small"
                        />
                        <button className="bg-terracota text-white px-6 py-3 rounded-full text-overline tracking-widest uppercase hover:bg-terracota-dark transition-colors shrink-0">
                            Buscar
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <Link href="/contacto" className="btn-fill bg-terracota text-white px-8 py-4 text-overline inline-block">
                            Solicitar propuesta
                        </Link>
                        <Link href="/metodologia" className="nav-link-animated text-white text-[13px] font-semibold tracking-wider uppercase font-heading pb-1">
                            Conocer metodología
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
