import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contacto | Avanzed - Consultoría Odontológica',
    description: 'Ponte en contacto con Avanzed para solicitar especialistas odontológicos o delegar tu proceso de selección.',
};

export default function ContactoPage() {
    return (
        <div className="pt-20">
            <section className="bg-perola text-dark py-24 border-b border-perola-dark">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <span className="text-overline text-terracota mb-6 block">Hablemos de talento</span>
                            <h1 className="text-h1 mb-6 text-dark">Queremos conocer el caso de tu clínica</h1>
                            <p className="text-body text-gray-dark mb-10">
                                Cuéntanos qué perfil técnico o directivo necesitas incorporar. Realizaremos una consultoría inicial sin compromiso para evaluar la viabilidad y tiempos de la búsqueda especializada.
                            </p>
                            <div className="space-y-6 text-body font-bold text-dark">
                                <p className="flex items-center gap-3">
                                    <span className="text-terracota">✉</span> hola@avanzed.es
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-terracota">✆</span> +34 900 000 000
                                </p>
                                <p className="flex items-center gap-3 text-sm text-gray font-normal mt-4">
                                    Operamos a nivel nacional (España) realizando headhunting y procesos integrales desde nuestras sedes.
                                </p>
                            </div>
                        </div>

                        <div className="lg:relative lg:w-[400px] lg:mx-auto">
                            {/* Normal Form (Mobile & Tablet) */}
                            <div className="bg-white p-10 border border-perola-dark shadow-sm lg:hidden">
                                <h2 className="text-h3 text-dark mb-8">Solicita una auditoría de perfil</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold tracking-widest uppercase font-heading text-gray-dark">Nombre</label>
                                            <input type="text" className="w-full border-b border-perola-dark p-2 focus:outline-none focus:border-terracota transition-colors" placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold tracking-widest uppercase font-heading text-gray-dark">Clínica</label>
                                            <input type="text" className="w-full border-b border-perola-dark p-2 focus:outline-none focus:border-terracota transition-colors" placeholder="Nombre completo" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold tracking-widest uppercase font-heading text-gray-dark">Email corporativo</label>
                                        <input type="email" className="w-full border-b border-perola-dark p-2 focus:outline-none focus:border-terracota transition-colors" placeholder="direccion@tuclinica.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold tracking-widest uppercase font-heading text-gray-dark">Perfil a incorporar o desafío principal</label>
                                        <textarea rows={4} className="w-full border border-perola-dark p-3 focus:outline-none focus:border-terracota transition-colors mt-2" placeholder="Ej: Buscamos un cirujano experto en carga inmediata 2 días por semana..."></textarea>
                                    </div>
                                    <button type="button" className="w-full bg-dark text-white p-4 text-[13px] font-bold tracking-widest uppercase font-heading hover:bg-terracota transition-colors">
                                        Enviar solicitud
                                    </button>
                                    <p className="text-[10px] text-gray mt-4 text-center">
                                        Al enviar aceptas nuestra política de privacidad corporativa referida al tratamiento de datos.
                                    </p>
                                </form>
                            </div>

                            {/* iPhone Mockup (Desktop only) */}
                            <div className="hidden lg:block relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="relative rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white z-10 flex flex-col justify-between">
                                    {/* Top Notch Area spacing */}
                                    <div className="pt-10 px-6 pb-4">
                                        <h2 className="text-sm font-heading font-bold text-dark mb-4 mt-2">Solicita una auditoría</h2>
                                        <form className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-bold tracking-widest uppercase font-heading text-gray-dark">Nombre y Clínica</label>
                                                <input type="text" className="w-full text-xs border-b border-perola-dark py-1 focus:outline-none focus:border-terracota transition-colors" placeholder="Tus datos" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-bold tracking-widest uppercase font-heading text-gray-dark">Email corporativo</label>
                                                <input type="email" className="w-full text-xs border-b border-perola-dark py-1 focus:outline-none focus:border-terracota transition-colors" placeholder="email@clinica.com" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[9px] font-bold tracking-widest uppercase font-heading text-gray-dark">Perfil</label>
                                                <textarea rows={3} className="w-full text-xs border border-perola-dark p-2 focus:outline-none focus:border-terracota transition-colors mt-1 resize-none" placeholder="Detalles..."></textarea>
                                            </div>
                                            <button type="button" className="w-full bg-dark text-white py-3 text-[10px] font-bold tracking-widest uppercase font-heading hover:bg-terracota transition-colors mt-2 rounded">
                                                Enviar
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
