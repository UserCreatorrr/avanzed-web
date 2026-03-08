import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Contratar endodoncista especialista para clínica | Avanzed',
    description: 'Selección de endodoncista. Perfiles de endodoncia exclusivos con destreza en microscopía y casos complejos.',
};

export default function SeleccionEndodoncista() {
    const pageData = {
        h1: 'Contratar Endodoncista',
        subheadline: 'El rigor que salva piezas dentales. Incorpora especialistas en tratamientos de conductos con destreza demostrable en microscopía y protocolos avanzados.',
        targetAudience: [
            'Clínicas con un gran volumen de dolor agudo y derivaciones internas',
            'Centros que apuestan por la odontología conservadora al máximo nivel',
            'Clínicas de referencia regional buscando talento especializado que potencie su imagen'
        ],
        problemSolved: 'Una endodoncia fracasada arruina el trabajo previo y futuro del rehabilitador. Buscamos al profesional que, además de realizar endodoncias mecanizadas rápidas, sepa realizar retratamientos complejos.',
        howWeWork: [
            'Identificamos el volumen de pacientes y la aparatología de tu clínica.',
            'Sondeamos a especialistas avalados por sociedades y másteres oficiales.',
            'Evaluación técnica focalizada en endodoncia mecanizada y manejo de casos límite.',
            'Aseguramos la alineación de porcentajes y días de colaboración requeridos.'
        ],
        rolesCovered: [
            'Endodoncista Exclusivo',
            'Endodoncista con Odontología Conservadora Avanzada',
            'Microcirujano Endodóntico'
        ],
        whyAvanzed: [
            { title: 'Conocimiento Técnico', desc: 'No todo dentista que "hace endos" es endodoncista exclusivo.' },
            { title: 'Red Especializada', desc: 'Conocemos los posgrados que exigen rigor real.' },
            { title: 'Ajuste Operativo', desc: 'El candidato debe dominar el sistema de limas y microscopio.' },
            { title: 'Menos fracasos', desc: 'Filtramos perfiles que entienden la endodoncia como ciencia exacta.' }
        ],
        methodology: [
            { title: 'Revisión Académica', desc: 'Máster habilitante de al menos 2 años a tiempo completo.' },
            { title: 'Caso Clínico Complex', desc: 'Entrevista técnica sobre resolución de conductos curvos o perforaciones.' },
            { title: 'Valoración Humana', desc: 'Manejo del dolor y empatía con el paciente asustado.' }
        ],
        expectedResults: [
            'Disminución del estrés de los odontólogos generales al tener a quién derivar internamente',
            'Aumento del éxito en tratamientos de conductos (menor índice de urgencias post-tratamiento)',
            'Rentabilización del equipo rotatorio y microscopio de la clínica'
        ],
        faqs: [
            { q: '¿Qué valoran al entrevistar a un endodoncista?', a: 'Comprobamos su formación base, su manejo de magnificación (microscopio o lupas de alto aumento) y sus protocolos de irrigación y obturación 3D.' },
            { q: 'Cuesta encontrar endodoncistas exclusivos para áreas no céntricas. ¿Es posible?', a: 'Sí. Diseñamos planes de compensación por volumen que atraen a estos especialistas incluso si requiere desplazarse un o dos días por semana.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Endodoncia', href: '/especializaciones/endodoncia' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' },
                { name: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general' }
            ],
            blog: [
                { name: 'Falta de endodoncistas', href: '/blog/como-contratar-endodoncista-para-clinica-dental' },
                { name: 'Qué evaluar en un proceso clínico', href: '/blog/que-evaluar-en-un-proceso-de-seleccion-dental' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
