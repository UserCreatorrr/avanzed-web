import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Headhunter odontología para perfiles difíciles de captar | Avanzed',
    description: 'Búsqueda directa de talento odontológico para clínicas que necesitan incorporar perfiles de alta especialización.',
};

export default function HeadhunterOdontologia() {
    const pageData = {
        h1: 'Headhunter Odontología',
        subheadline: 'Búsqueda directa y confidencial para incorporar perfiles de alta especialización quirúrgica, directivos clínicos o expertos nicho que no buscan empleo activamente.',
        targetAudience: [
            'Clínicas que necesitan relevar a un especialista clave sin que el equipo lo sepa todavía.',
            'Propietarios buscando un director médico con solvencia probada.',
            'Centros que necesitan cirujanos o implantólogos altamente reputados.'
        ],
        problemSolved: 'El talento odontológico de máximo nivel rara vez responde a ofertas de empleo orgánicas. Nuestro servicio de Headhunter ataca el mercado oculto, atrayendo a líderes de opinión y ejecutores de alto volumen.',
        howWeWork: [
            'Delineamos el "target profile" y las competencias críticas.',
            'Investigación directa y aproximación altamente confidencial.',
            'Evaluación técnica rigurosa del desempeño y casos de éxito del profesional.',
            'Intermediación en la negociación económica y societaria si aplica.'
        ],
        rolesCovered: [
            'Cirujano Maxilofacial Especialista',
            'Implantólogo de Alta Complejidad',
            'Director Médico de Grupo Dental',
            'Endodoncista Microscopista Exclusivo'
        ],
        whyAvanzed: [
            { title: 'Confidencialidad', desc: 'Rastreamos el mercado con absoluta discreción.' },
            { title: 'Red de Contactos', desc: 'Cientos de especialistas mapeados a nivel nacional.' },
            { title: 'Alineación de Intereses', desc: 'Aseguramos que el proyecto sea seductor para talento top.' },
            { title: 'Validación Técnica', desc: 'Procesos auditados para asegurar el máximo calibre.' }
        ],
        methodology: [
            { title: 'Hunting Pasivo', desc: 'Ataque directo a profesionales recomendados y de prestigio.' },
            { title: 'Negociación', desc: 'Alineación de honorarios, estatus y rol en la clínica.' },
            { title: 'Gestión del Cierre', desc: 'Control de contraofertas de su clínica actual.' }
        ],
        expectedResults: [
            'Incorporación de figuras de autoridad al equipo',
            'Fidelización de pacientes gracias al nivel del doctor',
            'Cero impacto negativo durante el proceso de búsqueda confidencial'
        ],
        faqs: [
            { q: '¿Cuándo contratar un servicio de headhunter dental y no de selección?', a: 'La selección atrae a candidatos activos o semi-activos. El headhunting va directamente a convencer al talento feliz y asentado mediante confidencialidad y propuestas de altísimo valor.' },
            { q: '¿Garantizan que el candidato no hablará sobre el proceso?', a: 'Todos los procesos de headhunting se blindan mediante Acuerdos de Confidencialidad (NDA) firmados desde el primer contacto.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Cirugía Bucal Oral', href: '/especializaciones/cirugia-bucal-oral' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Contratar Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' },
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' }
            ],
            blog: [
                { name: 'Cuándo necesitas un headhunter odontología', href: '/blog/cuando-necesitas-un-headhunter-odontologia' },
                { name: 'Validar perfiles quirúrgicos', href: '/blog/implantologia-y-cirugia-oral-como-validar-perfiles' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
