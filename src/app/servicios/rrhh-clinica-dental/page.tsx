import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'RRHH clínica dental con enfoque en selección especializada | Avanzed',
    description: 'Impulsamos procesos de selección para clínicas dentales con criterio, método y foco en la calidad del equipo.',
};

export default function RRHHClinicaDental() {
    const pageData = {
        h1: 'RRHH Clínica Dental',
        subheadline: 'Construimos e impulsamos equipos clínicos sólidos. Ayudamos a direcciones y gerencias de clínicas dentales a estructurar procesos de incorporación, retención y evaluación especializada.',
        targetAudience: [
            'Clínicas con alta rotación de personal sanitario',
            'Gerentes que necesitan delegar la evaluación del talento',
            'Grupos odontológicos en pleno proceso de expansión y apertura'
        ],
        problemSolved: 'La gestión de Recursos Humanos en una clínica dental suele externalizarse a gestorías generalistas que no entienden la operativa clínica. Avanzed aplica un enfoque de RRHH sectorial exclusivo, garantizando encaje técnico, vocacional y operativo.',
        howWeWork: [
            'Auditoría y diseño del mapa de puestos de tu clínica.',
            'Sistematización de procesos de entrevistas técnicas.',
            'Alineación de compensación y beneficios con la media del mercado odontológico.',
            'Planes de retención e integración (onboarding clínico).'
        ],
        rolesCovered: [
            'Dirección Médica y Gerencia de Clínica',
            'Odontólogos Especializados (Endodoncia, Cirugía, etc.)',
            'Higienistas cualificados y Coordinadoras de Tratamiento'
        ],
        whyAvanzed: [
            { title: 'Conocimiento Operativo', desc: 'Entendemos los protocolos reales de un gabinete.' },
            { title: 'Baja Rotación', desc: 'Metodología enfocada en la permanencia a medio-largo plazo.' },
            { title: 'Red de Talento', desc: 'Acceso directo a profesionales contrastados.' },
            { title: 'Flexibilidad', desc: 'Soluciones a medida para clínicas unitarias y cadenas.' }
        ],
        methodology: [
            { title: 'Onboarding', desc: 'Diseño de la llegada del nuevo odontólogo a la clínica.' },
            { title: 'Evaluación del Clima', desc: 'Análisis del equipo clínico actual y mejora de la cohesión.' },
            { title: 'Estructuración', desc: 'Rediseño de roles y organigrama dental.' }
        ],
        expectedResults: [
            'Un equipo clínico cohesionado y alineado con los objetivos del centro',
            'Incremento en la rentabilidad por gabinete al estabilizar la plantilla',
            'Reducción drástica del estrés en la gerencia'
        ],
        faqs: [
            { q: '¿Son una gestoría laboral?', a: 'No ofrecemos servicios de nóminas. Somos consultores de talento y headhunters. Nuestro foco es la selección, captación, evaluación y retención de perfil clínico y directivo del sector dental.' },
            { q: 'Mi clínica tiene mucha rotación, ¿pueden ayudarme?', a: 'Sí, analizamos la raíz de la fuga de talento, proponemos soluciones organizativas y te ayudamos a incorporar perfiles que estabilicen el centro.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' },
                { name: 'Cirugía Bucal Oral', href: '/especializaciones/cirugia-bucal-oral' }
            ],
            profiles: [
                { name: 'Selección Dentista', href: '/perfiles/seleccion-dentista-general' },
                { name: 'Contratar Endodoncista', href: '/perfiles/seleccion-endodoncista' }
            ],
            blog: [
                { name: 'Errores de onboarding', href: '/blog/errores-de-onboarding-en-clinicas-dentales' },
                { name: 'Reducir la rotación en clínicas', href: '/blog/como-reducir-la-rotacion-en-clinicas-dentales' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
