"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-colors duration-500 ${scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-16 w-64">
                        <Image
                            src="/logo.png"
                            alt="Avanzed Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/servicios" className="nav-link-animated text-[11px] font-semibold text-white/60 hover:text-white uppercase tracking-widest font-heading">
                        Servicios
                    </Link>
                    <Link href="/metodologia" className="nav-link-animated text-[11px] font-semibold text-white/60 hover:text-white uppercase tracking-widest font-heading">
                        Metodología
                    </Link>
                    <Link href="/sobre-avanzed" className="nav-link-animated text-[11px] font-semibold text-white/60 hover:text-white uppercase tracking-widest font-heading">
                        Sobre Avanzed
                    </Link>
                    <Link href="/contacto" className="btn-fill text-[11px] font-semibold text-terracota uppercase tracking-widest font-heading px-4 py-2 border border-terracota/40">
                        Contacto
                    </Link>
                </nav>
                <button className="md:hidden text-white opacity-80" aria-label="Abrir menú">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
