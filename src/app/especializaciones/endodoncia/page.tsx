import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección endodoncista para clínicas dentales | Avanzed',
    description: 'Apoyamos la incorporación de especialistas en endodoncia con procesos rigurosos y mejor ajuste clínico.',
};

export default function EspecializacionEndodoncia() {
    const pageData = {
        h1: 'Selección Endodoncista',
        subheadline: 'El rigor que salva piezas. Evaluamos y seleccionamos especialistas en tratamientos de conductos con destreza en microscopía y protocolos avanzados de instrumentación.',
        targetAudience: [
            'Clínicas con un gran volumen de derivaciones de odontología general',
            'Centros que necesitan un endodoncista exclusivo con manejo de microscopio',
            'Clínicas de referencia regional buscando talento especializado'
        ],
        problemSolved: 'Una endodoncia fallida, sea por instrumentación o diagnóstico, condena el prestigio de la clínica. Los endodoncistas premium son escasos. Nosotros atraemos perfiles que aseguran la supervivencia de la pieza dental y la satisfacción del paciente.',
        howWeWork: [
            'Identificamos el volumen de trabajo y requerimientos técnicos exigidos.',
            'Buscamos especialistas, prioritariamente con máster oficial / exclusivo.',
            'Evaluación sobre el nivel en endodoncia mecanizada y retratamientos.',
            'Aseguramos la alineación de honorarios y porcentajes.'
        ],
        rolesCovered: [
            'Endodoncista Exclusivo',
            'Endodoncista con Odontología Conservadora Avanzada',
            'Especialistas en Microcirugía Endodóntica',
            'Docentes / Referentes en Endodoncia'
        ],
        whyAvanzed: [
            { title: 'Conocimiento Técnico', desc: 'Distinguimos perfiles básicos de especialistas reales (microscopía, CBCT).' },
            { title: 'Red Especializada', desc: 'Contactos directos en másteres universitarios y sociedades.' },
            { title: 'Ajuste Quirúrgico', desc: 'El candidato debe dominar el equipo y los sistemas de tu clínica.' },
            { title: 'Rigor', desc: 'Protegemos tu agenda y las derivaciones de los generalistas.' }
        ],
        methodology: [
            { title: 'Revisión Académica', desc: 'Validación de títulos de posgrado e historial formativo.' },
            { title: 'Caso Clínico Complex', desc: 'Validación en resolución de conductos curvos o retratamientos.' },
            { title: 'Encaje Económico', desc: 'Acuerdo transparente de colaboración clínica.' }
        ],
        expectedResults: [
            'Endodoncista de alto nivel resolutivo',
            'Retratamientos y complicaciones solventados in-house',
            'Tranquilidad para los rehabilitadores y prostodoncistas'
        ],
        faqs: [
            { q: '¿Evalúan el uso de marcas específicas de instrumentación?', a: 'Sí, adaptamos la entrevista técnica para conocer los sistemas rotatorios que domina el candidato y si concuerda con tu aparatología.' },
            { q: '¿Pueden encontrar endodoncistas dispuestos a residir fuera de grandes ciudades?', a: 'Es un reto conocido, pero mediante headhunting proactivo logramos diseñar propuestas atractivas para atraer talento a la periferia.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' },
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' }
            ],
            profiles: [
                { name: 'Contratar Endodoncista', href: '/perfiles/seleccion-endodoncista' },
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' }
            ],
            blog: [
                { name: 'Cómo contratar endodoncista', href: '/blog/como-contratar-endodoncista-para-clinica-dental' },
                { name: 'Qué evaluar en un proceso', href: '/blog/que-evaluar-en-un-proceso-de-seleccion-dental' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
