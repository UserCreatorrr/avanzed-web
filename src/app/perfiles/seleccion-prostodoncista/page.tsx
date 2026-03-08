import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Contratar prostodoncista especialista en rehabilitación | Avanzed',
    description: 'Selección de prostodoncistas enfocados en rehabilitación oral, prótesis sobre implantes y flujo digital avanzado.',
};

export default function SeleccionProstodoncista() {
    const pageData = {
        h1: 'Contratar Prostodoncista',
        subheadline: 'Especialistas en la fase resolutiva definitiva. Encontramos rehabilitadores que controlan la oclusión, la carga oclusal y lideran flujos de trabajo digitales complejos.',
        targetAudience: [
            'Clínicas interdisciplinares y grandes rehabilitadores',
            'Laboratorios y fresadoras vinculados a clínica',
            'Centros donde se carga implantes masivamente y requieren perfección protésica'
        ],
        problemSolved: 'La cirugía perfecta no sirve si la prótesis fracasa. Evaluamos el entendimiento mecánico de pilares, manejo de carga oclusal, diseño en CAD-CAM y capacidad para trabajar en sintonía con cirujanos y laboratorio.',
        howWeWork: [
            'Comprendemos las marcas de escáner y fresado del centro.',
            'Sondeamos graduados de posgrados universitarios exclusivos de Rehabilitación Oral.',
            'Testamos la agilidad en prótesis fija, removible y sobre grandes reconstrucciones.',
            'Validamos la comunicación con laboratorios protésicos.'
        ],
        rolesCovered: [
            'Prostodoncista Experto en Implantes',
            'Rehabilitador Oral Integral',
            'Especialista CAD/CAM en Clínica'
        ],
        whyAvanzed: [
            { title: 'Evaluación de Oclusión', desc: 'Validación en atm, dimensión vertical y plan reconstructivo.' },
            { title: 'Conocimiento Digital', desc: 'Dominio de escáneres y software de diseño.' },
            { title: 'Interdisciplinariedad', desc: 'El prostodoncista que une el puzle de endodoncia, perio y cirugía.' },
            { title: 'Solidez', desc: 'Reduce reclamaciones por roturas de cerámicas o desajustes a medio plazo.' }
        ],
        methodology: [
            { title: 'Casos Completos', desc: 'Evaluación desde toma de registros (arco facial virtual) hasta el ajuste pasivo.' },
            { title: 'Rendimiento Comercial', desc: 'Aptitud para convencer al paciente del plan rehabilitador 360.' },
            { title: 'Propuesta de Valor Final', desc: 'Coordinación del encaje con las expectativas de la clínica.' }
        ],
        expectedResults: [
            'Menos fracaso protésico y repeticiones',
            'Procesos estandarizados en prótesis',
            'Sinergia total entre gabinete y laboratorio'
        ],
        faqs: [
            { q: '¿Evalúan que dominen ciertos software tipo exocad?', a: 'Sí, podemos requerir a especialistas con alta carga de diseño o simplemente que sean expertos en toma de registros digitales precisos.' },
            { q: '¿Encuentran prostodoncistas que también operen implantes?', a: 'Buscamos habitualmente perfiles híbridos (cirugía + prótesis), aunque aconsejamos el perfil exclusivo para rehabilitaciones muy complejas.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Contratar Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' },
                { name: 'Selección Endodoncista', href: '/perfiles/seleccion-endodoncista' }
            ],
            blog: [
                { name: 'Cómo contratar prostodoncista', href: '/blog/como-contratar-prostodoncista' },
                { name: 'Perfiles estéticos y quirúrgicos', href: '/blog/errores-al-contratar-cirujano-oral' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
