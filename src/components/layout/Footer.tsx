import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-20 pb-8 overflow-hidden rounded-t-[2.5rem] mt-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-5">
                        <div className="relative h-16 w-64 mb-8">
                            <Image
                                src="/logo.png"
                                alt="Avanzed Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-body-small text-white/40 max-w-sm mb-8">
                            Consultoría de RRHH especializada en el sector odontológico. Potenciamos procesos de selección para clínicas que priorizan la excelencia.
                        </p>
                        <div className="flex flex-col gap-2">
                            <span className="text-overline text-terracota">Contacto</span>
                            <a href="mailto:hola@avanzed.es" className="text-body-small text-white/60 hover:text-white transition-colors">hola@avanzed.es</a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-7">
                        <h4 className="text-sm font-heading font-bold mb-6">Servicios</h4>
                        <ul className="flex flex-col gap-4 text-body-small text-white/60">
                            <li><Link href="/servicios/seleccion-de-personal-odontologia" className="hover:text-terracota transition-colors">Selección de personal</Link></li>
                            <li><Link href="/servicios/headhunter-odontologia" className="hover:text-terracota transition-colors">Headhunter odontológico</Link></li>
                            <li><Link href="/especializaciones" className="hover:text-terracota transition-colors">Especializaciones</Link></li>
                            <li><Link href="/perfiles" className="hover:text-terracota transition-colors">Perfiles</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-sm font-heading font-bold mb-6">Avanzed</h4>
                        <ul className="flex flex-col gap-4 text-body-small text-white/60">
                            <li><Link href="/metodologia" className="hover:text-terracota transition-colors">Metodología</Link></li>
                            <li><Link href="/casos-de-exito" className="hover:text-terracota transition-colors">Casos de éxito</Link></li>
                            <li><Link href="/sobre-avanzed" className="hover:text-terracota transition-colors">Sobre nosotros</Link></li>
                            <li><Link href="/blog" className="hover:text-terracota transition-colors">Blog y Recursos</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
                    <div className="text-[11px] text-white/25">
                        © {new Date().getFullYear()} Avanzed. Todos los derechos reservados.
                    </div>
                    <div className="flex gap-6 text-[11px] text-white/25">
                        <Link href="/privacidad" className="hover:text-white/50">Política de Privacidad</Link>
                        <Link href="/legal" className="hover:text-white/50">Aviso Legal</Link>
                        <Link href="/cookies" className="hover:text-white/50">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
