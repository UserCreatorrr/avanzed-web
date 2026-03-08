import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección de personal odontología para clínicas dentales | Avanzed',
    description: 'Consultoría especializada en selección de personal odontológico. Procesos rigurosos para clínicas que priorizan calidad de equipo.',
};

export default function SeleccionPersonalOdontologia() {
    const pageData = {
        h1: 'Selección de Personal Odontología',
        subheadline: 'Potenciamos los procesos de incorporación de talento para clínicas dentales con especialización, rigor metodológico y foco en la calidad asistencial.',
        targetAudience: [
            'Directores y gerentes de clínicas dentales en expansión',
            'Propietarios de clínicas que buscan elevar su estándar de equipo',
            'Clínicas con alta especialización odontológica'
        ],
        problemSolved: 'La selección de perfiles odontológicos mediante canales generalistas genera alta rotación, frustración y pérdida de nivel clínico. Avanzed elimina la improvisación evaluando a los candidatos con criterio clínico experto.',
        howWeWork: [
            'Definimos el perfil clínico exacto junto a la dirección médica.',
            'Buscamos en el mercado oculto de talento odontológico.',
            'Evaluamos competencias técnicas y ajuste cultural con la clínica.',
            'Acompañamos durante el proceso de oferta y negociación.'
        ],
        rolesCovered: [
            'Odontología General (alta cualificación)',
            'Odontopediatras y Ortodoncistas',
            'Endodoncistas',
            'Cirujanos Orales y Maxilofaciales',
            'Implantólogos y Prostodoncistas',
            'Odontólogos Restauradores'
        ],
        whyAvanzed: [
            { title: 'Conocimiento Clínico', desc: 'Hablamos el mismo idioma que la dirección médica.' },
            { title: 'Evaluación Rigurosa', desc: 'Filtros competenciales y técnicos exhaustivos.' },
            { title: 'Ahorro de Tiempo', desc: 'Gestión externa 100% fiable para la clínica.' },
            { title: 'Baja Rotación', desc: 'Foco en la permanencia y el desarrollo a largo plazo.' }
        ],
        methodology: [
            { title: 'Auditoría Inicial', desc: 'Entendemos tu clínica a nivel operativo.' },
            { title: 'Evaluación 360', desc: 'Entrevistas estructuradas por expertos sectoriales.' },
            { title: 'Seguimiento', desc: 'Monitorización del onboarding del candidato.' }
        ],
        expectedResults: [
            'Reducción de la rotación clínica',
            'Mejora en la operatividad diaria',
            'Equipos más cohesionados y profesionales'
        ],
        faqs: [
            { q: '¿Qué ventajas tiene trabajar con Avanzed?', a: 'El rigor de nuestra evaluación. No enviamos currículums al azar, analizamos a cada profesional con criterios odontológicos probados.' },
            { q: '¿Cuánto dura un proceso de selección de personal de odontología?', a: 'Varía según la dificultad del perfil, pero operamos con agilidad gracias a nuestra red previa de talento validado.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' },
                { name: 'Endodoncia', href: '/especializaciones/endodoncia' }
            ],
            profiles: [
                { name: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general' },
                { name: 'Selección Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' }
            ],
            blog: [
                { name: 'Qué evaluar en un proceso', href: '/blog/que-evaluar-en-un-proceso-de-seleccion-dental' },
                { name: 'Selección vs RRHH generalista', href: '/blog/seleccion-de-personal-odontologia-vs-rrhh-generalista' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
