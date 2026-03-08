import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/sections/HomeHero';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HomeHero />

      {/* 2. Qué hace Avanzed */}
      <section className="py-24 bg-perola-light">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-10 md:col-start-2 text-center">
            <h2 className="text-h2 text-dark mb-6">Talento clínico seleccionado con criterio, método y especialización real</h2>
            <p className="text-body text-gray-dark max-w-3xl mx-auto">
              Avanzed acompaña a clínicas dentales que necesitan incorporar perfiles con alta exigencia técnica y humana.
              No abordamos la selección como un trámite administrativo, sino como una decisión estratégica que condiciona
              la calidad del equipo, la estabilidad operativa y la experiencia del paciente.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Especializaciones */}
      <section className="py-24 bg-white border-t border-perola-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-overline text-terracota mb-4 block">Áreas de especialización</span>
              <h2 className="text-h2 text-dark">Especialización real en las áreas donde la selección no admite improvisación</h2>
            </div>
            <Link href="/especializaciones" className="text-terracota text-[12px] font-bold tracking-widest uppercase border border-terracota px-6 py-3 hover:bg-terracota hover:text-white transition-colors shrink-0">
              Ver todas
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Odontología general', href: '/especializaciones/odontologia-general', desc: 'Perfiles alineados con el nivel asistencial y operativo.' },
              { title: 'Endodoncia', href: '/especializaciones/endodoncia', desc: 'Especialistas con procesos rigurosos y ajuste clínico.' },
              { title: 'Odontología restauradora', href: '/especializaciones/odontologia-restauradora', desc: 'Criterio técnico, precisión y experiencia probada.' },
              { title: 'Cirugía bucal u oral', href: '/especializaciones/cirugia-bucal-oral', desc: 'Evaluación quirúrgica y fiabilidad asistencial.' },
              { title: 'Prostodoncia', href: '/especializaciones/prostodoncia', desc: 'Incorporación de alto nivel de especialización.' }
            ].map((spec, i) => (
              <Link key={i} href={spec.href} className="bg-perola-light p-8 border-l-[3px] border-terracota hover:bg-terracota hover:border-dark transition-all duration-300 group">
                <span className="text-overline text-terracota mb-4 block group-hover:text-perola transition-colors">0{i + 1}</span>
                <h3 className="text-h3 text-dark mb-3 group-hover:text-white transition-colors">{spec.title}</h3>
                <p className="text-body-small text-gray group-hover:text-white/80 transition-colors">{spec.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Metodología */}
      <section className="py-24 bg-beige-rose-light border-l-[3px] border-terracota">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-overline text-terracota mb-4 block">Nuestro enfoque</span>
              <h2 className="text-h2 text-dark mb-6">Del proceso al resultado</h2>
              <p className="text-body text-gray-dark mb-8">
                El equipo correcto construye la clínica de excelencia. Potenciamos procesos seguros y resultados fiables mediante un método contrastado.
              </p>
              <Link href="/metodologia" className="bg-terracota text-white px-8 py-4 text-overline transition-colors hover:bg-terracota-dark inline-block">
                Conocer la metodología
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '1. Selección', desc: 'Definición precisa del perfil ideal.' },
                { title: '2. Evaluación', desc: 'Auditoría técnica y competencial.' },
                { title: '3. Integración', desc: 'Onboarding y ajuste clínico.' },
                { title: '4. Seguimiento', desc: 'Validación de éxito a largo plazo.' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 border border-perola-dark shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-terracota-light transition-all duration-300 cursor-default">
                  <h4 className="font-heading font-bold text-dark text-lg mb-2">{step.title}</h4>
                  <p className="text-body-small text-gray">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Por qué Avanzed (Diferencial) */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-bright-red opacity-10 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-overline text-terracota mb-4 block">El Diferencial</span>
              <h2 className="text-h2 text-white mb-8">Por qué una selección especializada marca la diferencia</h2>
              <div className="p-8 bg-white/5 border-l-2 border-bright-red mb-8">
                <p className="text-quote text-white mb-2">
                  "No aceleramos procesos sin criterio. Los potenciamos para que funcionen mejor."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-6">
                {[
                  'Mejor definición del perfil clínico y humano',
                  'Evaluación más rigurosa desde el conocimiento sectorial',
                  'Menor margen de error en la contratación',
                  'Mayor coherencia con los valores y nivel de la clínica',
                  'Incorporación más segura y duradera'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 border-b border-white/10 hover:bg-white/10 hover:pl-6 transition-all duration-300 rounded cursor-default">
                    <span className="text-terracota text-xl font-bold font-heading">0{i + 1}.</span>
                    <span className="text-body text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* 7. FAQs */}
      <section className="py-24 bg-perola">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-h2 text-dark text-center mb-16">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿En qué se diferencia Avanzed de una consultora generalista?', a: 'Nuestro conocimiento exclusivo del sector odontológico nos permite evaluar a los candidatos con criterio clínico real, entendiendo las necesidades operativas de la clínica.' },
              { q: '¿Qué perfiles puede ayudar a incorporar Avanzed?', a: 'Cubrimos odontólogos generales y especialistas (endodoncia, cirugía oral, prostodoncia, etc.), asegurando un encaje técnico y cultural.' },
              { q: '¿Cómo se inicia un proceso con Avanzed?', a: 'Comenzamos con una auditoría de necesidades para definir el perfil ideal con exactitud, antes de iniciar la búsqueda y validación del talento.' }
            ].map((faq, i) => (
              <details key={i} className="bg-white p-6 border border-perola-dark group cursor-pointer hover:border-terracota transition-colors duration-300 shadow-sm hover:shadow-md">
                <summary className="text-h3 text-dark font-bold list-none flex justify-between items-center group-hover:text-terracota transition-colors">
                  {faq.q}
                  <span className="text-terracota text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 text-body text-gray pt-4 border-t border-perola-dark">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-terracota to-bright-red"></div>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-overline text-terracota mb-6 block">Hablemos</span>
          <h2 className="text-h1 text-white mb-8">Construyamos el equipo correcto para tu clínica</h2>
          <p className="text-body text-white/70 mb-10">
            Especialización real en talento odontológico para decisiones de incorporación más seguras.
          </p>
          <Link href="/contacto" className="bg-terracota text-white px-10 py-5 text-[14px] font-bold tracking-widest uppercase font-heading hover:bg-terracota-dark transition-colors inline-block">
            Agendar una consulta
          </Link>
        </div>
      </section>
    </>
  );
}
