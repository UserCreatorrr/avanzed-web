import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Odontólogo restaurador y estética dental | Avanzed',
    description: 'Proceso y criterios para la selección odontólogo restaurador especialista en composites y estética dental minimamente invasiva.',
};

export default function SeleccionOdontologoRestaurador() {
    const pageData = {
        h1: 'Selección Odontólogo Restaurador',
        subheadline: 'Arte, diagnóstico y mínima invasión. Evaluamos odontólogos con un dominio absoluto en estética dental y rehabilitación conservadora.',
        targetAudience: [
            'Clínicas con un marcado enfoque hacia la estética dental',
            'Centros que necesitan gestionar frentes anteriores y carillas',
            'Clínicas boutique que buscan especialistas formados en DSD'
        ],
        problemSolved: 'La odontología actual se juzga, sobre todo, por el resultado estético. Contratar a un perfil sin destreza manual o visión espacial genera reconstrucciones defectuosas que el paciente percibe inmediatamente. Buscamos al artista clínico.',
        howWeWork: [
            'Exigimos y revisamos el portfolio de casos estéticos del dentista.',
            'Sondeamos posgrados focalizados en composites inyectados y estratificación.',
            'Test de conocimientos sobre aislamiento absoluto y adhesión al más alto nivel.',
            'Evaluación de su capacidad de persuasión para planes de tratamiento de alto ticket.'
        ],
        rolesCovered: [
            'Odontólogo Restaurador',
            'Especialista en Estética y Cosmética Dental',
            'Dentista Experto en Composites'
        ],
        whyAvanzed: [
            { title: 'Portfolio Clínico', desc: 'Evaluamos visualmente la calidad de bordes, anatomía y pulido.' },
            { title: 'Visión Digital', desc: 'Conocimiento obligatorio en flujos digitales (DSD, escáner).' },
            { title: 'Exigencia', desc: 'Filtramos perfiles que entienden la importancia del desgaste dental mínimo.' },
            { title: 'Seguridad', desc: 'Garantizamos un trato excepcional al paciente estético.' }
        ],
        methodology: [
            { title: 'Revisión Fotográfica', desc: 'Disponer de protocolo de fotografía clínica intraoral es innegociable.' },
            { title: 'Examen de Protocolos', desc: 'Validación en manejo de incrustaciones de composite o cerámica.' },
            { title: 'Presentación', desc: 'Candidaturas exclusivas aportando evidencias de su nivel clínico.' }
        ],
        expectedResults: [
            'Facturaciones medias y altas gracias al buen posicionamiento estético',
            'Incremento del volumen de casos a través de pacientes recomendados',
            'Coherencia entre el tratamiento planificado y el resultado final'
        ],
        faqs: [
            { q: '¿Obligan a tener un portfolio de casos documentado?', a: 'Sí. En el perfil de Restauradora, no podemos basarnos solo en una entrevista de 40 minutos o un título: es clave ver el arte manual en el antes, durante y después del tratamiento.' },
            { q: '¿Se requiere que trabajen con marcas de composites específicas?', a: 'Normalmente no es excluyente; lo excluyente es que el candidato conozca perfectamente los procesos de adhesión. Las marcas exactas se consensuarán luego con la clínica.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' },
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' }
            ],
            profiles: [
                { name: 'Selección Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' },
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' }
            ],
            blog: [
                { name: 'Cómo contratar odontólogo restaurador', href: '/blog/como-contratar-odontologo-restaurador' },
                { name: 'Proceso selección dentista', href: '/blog/que-evaluar-en-un-proceso-de-seleccion-dental' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
