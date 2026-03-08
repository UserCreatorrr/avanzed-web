import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección prostodoncista para clínicas dentales | Avanzed',
    description: 'Incorpora especialistas en prostodoncia con un proceso de selección estructurado y adaptado a tu clínica.',
};

export default function EspecializacionProstodoncia() {
    const pageData = {
        h1: 'Selección Prostodoncista',
        subheadline: 'El arquitecto de la sonrisa. Proveemos clínicas especializadas con rehabilitadores expertos en prótesis fija, removible y sobre implantes.',
        targetAudience: [
            'Clínicas interdisciplinares donde la rehabilitación dicta el de tratamiento',
            'Laboratorios y centros fresadores con perfil clínico',
            'Centros que necesitan el eslabón final tras grandes cirugías'
        ],
        problemSolved: 'La rentabilidad y reputación de un implante o elevación se pierden si la prótesis fracasa biomecánicamente. Avanzed filtra prostodoncistas con dominio absoluto de flujos digitales, la oclusión y la planificación.',
        howWeWork: [
            'Comprensión del ecosistema digital de la clínica (escáneres intraorales, EXOCAD, etc).',
            'Búsqueda de Masters en Prótesis y Rehabilitación Oral.',
            'Test de planificación de casos complejos y desgaste interoclusal.',
            'Entrevista profunda sobre comunicación con el especialista cirujano.'
        ],
        rolesCovered: [
            'Prostodoncista / Rehabilitador Oral',
            'Especialista en Prótesis sobre Implantes',
            'Líder Clínico de Odontología Digital'
        ],
        whyAvanzed: [
            { title: 'Conocimiento Digital', desc: 'El flujo analógico pasó. Verificamos cad/cam.' },
            { title: 'Filtro Interdisciplinar', desc: 'Evaluamos cómo delega o recibe de endodoncia y cirugía.' },
            { title: 'Validación en Oclusión', desc: 'Comprobación técnica para evitar fracasos a medio plazo.' },
            { title: 'Resolución de conflictos', desc: 'Control de garantías y repeticiones a laboratorio.' }
        ],
        methodology: [
            { title: 'Sondeo Curricular', desc: 'Validación de residencias o postgrados dedicados a la prótesis.' },
            { title: 'Revisión de Flujo', desc: 'Evaluamos desde toma de impresión digital hasta cementado.' },
            { title: 'Gestión de Pacientes', desc: 'Validación de su capacidad de persuasión en rehabilitaciones completas.' }
        ],
        expectedResults: [
            'Menos fracaso protésico y repeticiones de laboratorio',
            'Diagnósticos interdisciplinares eficaces',
            'Armonía entre cirugía y prostodoncia'
        ],
        faqs: [
            { q: '¿Buscan dentistas con conocimientos básicos de prótesis o especialistas puros?', a: 'Nos focalizamos en especialistas puros o rehabilitadores con dedicación exclusiva. Una prótesis mal planificada resulta en pérdida financiera directa para la clínica.' },
            { q: '¿Qué peso le dan al conocimiento digital?', a: 'Hoy es innegociable. Evaluamos el manejo de escáner intraoral, entendimiento de librerías virtuales y la fluidez comunicando digitalmente con los protésicos.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Cirugía Bucal Oral', href: '/especializaciones/cirugia-bucal-oral' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' },
                { name: 'Contratar Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' }
            ],
            blog: [
                { name: 'Cómo contratar prostodoncista', href: '/blog/como-contratar-prostodoncista' },
                { name: 'Implantología: Validar perfiles', href: '/blog/implantologia-y-cirugia-oral-como-validar-perfiles' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
