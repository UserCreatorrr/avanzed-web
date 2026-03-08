import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Reclutamiento dental en España para clínicas especializadas | Avanzed',
    description: 'Ayudamos a clínicas dentales a incorporar talento odontológico con procesos seguros, rigurosos y orientados al resultado.',
};

export default function ReclutamientoDentalEspana() {
    const pageData = {
        h1: 'Reclutamiento Dental en España',
        subheadline: 'Te ayudamos a encontrar y retener el mejor talento odontológico en todo el territorio nacional, gestionando cada paso con especialización clínica.',
        targetAudience: [
            'Redes de clínicas dentales en expansión',
            'Clínicas regionales buscando talento foráneo',
            'Instituciones odontológicas de alto nivel'
        ],
        problemSolved: 'La dispersión del buen talento odontológico en España dificulta cubrir posiciones especializadas. Avanzed centraliza, evalúa y asegura que los candidatos cumplan con la alta exigencia que requiere tu práctica clínica.',
        howWeWork: [
            'Mapeamos el mercado odontológico por zonas y especialidad.',
            'Auditoría y revisión de referencias previas del candidato.',
            'Filtro competencial para reducir riesgo de abandono temprano.',
            'Coordinación de entrevistas y cierre de la contratación.'
        ],
        rolesCovered: [
            'Odontología General en diversas autonomías',
            'Dentistas con máster habilitante',
            'Mandos intermedios y Directores de Clínica'
        ],
        whyAvanzed: [
            { title: 'Metodología', desc: 'Un modelo de evaluación unificado para cualquier provincia.' },
            { title: 'Velocidad', desc: 'Búsqueda proactiva, sin depender de anuncios generales.' },
            { title: 'Retención', desc: 'Seleccionamos perfiles orientados a larga duración.' },
            { title: 'Experiencia', desc: 'Dominio de las dinámicas salariales de cada zona.' }
        ],
        methodology: [
            { title: 'Research Local', desc: 'Estudio del talento disponible en la región.' },
            { title: 'Screening', desc: 'Filtrado de perfiles no alineados con la excelencia exigida.' },
            { title: 'Presentación', desc: 'Candidaturas finalistas avaladas técnicamente.' }
        ],
        expectedResults: [
            'Incorporaciones válidas y a largo plazo',
            'Menor carga de entrevistas para el equipo directivo',
            'Seguridad en aperturas o expansión'
        ],
        faqs: [
            { q: '¿Operan en toda España?', a: 'Sí, gestionamos reclutamiento de talento odontológico a nivel nacional, con candidatos dispuestos a reubicarse o perfiles locales.' },
            { q: '¿Cuál es la garantía tras la contratación?', a: 'Ofrecemos procesos de seguimiento post-contratación y garantías de sustitución en los primeros meses si el encaje no es perfecto.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' },
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' }
            ],
            profiles: [
                { name: 'Dentista General Privada', href: '/perfiles/seleccion-dentista-general' },
                { name: 'Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' }
            ],
            blog: [
                { name: 'Expansión de clínicas dentales', href: '/blog/expansion-de-clinicas-dentales-y-reclutamiento-especializado' },
                { name: 'Cómo reducir la rotación', href: '/blog/como-reducir-la-rotacion-en-clinicas-dentales' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
