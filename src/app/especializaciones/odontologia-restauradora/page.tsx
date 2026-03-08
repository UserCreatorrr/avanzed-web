import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección de odontólogo restaurador para clínica | Avanzed',
    description: 'Procesos de selección para odontología restauradora con foco en criterio técnico, precisión y experiencia clínica.',
};

export default function EspecializacionOdontologiaRestauradora() {
    const pageData = {
        h1: 'Selección Odontología Restauradora',
        subheadline: 'La estética y la función en un solo perfil. Aseguramos la incorporación de especialistas en composites, carillas y estratificación conservadora.',
        targetAudience: [
            'Clínicas boutique con fuerte demanda estética',
            'Academias y centros formadores que asisten pacientes VIP',
            'Propietarios que derivan casos estéticos de alta exigencia'
        ],
        problemSolved: 'El paciente actual evalúa el resultado por la estética. Trabajos deficientes en composite o restauradora provocan insatisfacción inmediata. Buscamos el equilibrio entre la habilidad manual artística y la solidez diagnóstica del candidato.',
        howWeWork: [
            'Evaluamos el portfolio de casos estéticos del candidato (antes/después).',
            'Comprobamos la coherencia entre el máster cursado y su práctica real.',
            'Analizamos la comprensión fotográfica y de diseño digital de sonrisas (DSD).',
            'Validamos la calidad en el manejo de biomateriales.'
        ],
        rolesCovered: [
            'Especialista en Estética y Cosmética Dental',
            'Odontólogo Restaurador (Composites y Carillas directas/indirectas)',
            'Experto en Manejo de Tejidos Blandos perimetrales'
        ],
        whyAvanzed: [
            { title: 'Portfolio Clínico', desc: 'No nos basta el CV; revisamos la ejecución de bordes, texturas y pulido.' },
            { title: 'Conocimiento Digital', desc: 'Aseguramos que el dentista converse con laboratorios 3D.' },
            { title: 'Candidatos Validados', desc: 'Reducimos el riesgo de falsas expectativas en estética dentaria.' },
            { title: 'Empatía y Venta', desc: 'El perfil estético requiere comunicar alto valor al paciente.' }
        ],
        methodology: [
            { title: 'Casuística', desc: 'Resolución de casos tipo de reconstrucciones complejas.' },
            { title: 'Examen de Protocolos', desc: 'Adhesión, aislamiento absoluto y estratificación.' },
            { title: 'Presentación', desc: 'Aportamos el informe técnico detallado de su idoneidad estética.' }
        ],
        expectedResults: [
            'Incremento de facturación en líneas de alto margen (estética)',
            'Recomendaciones y boca-oreja positivo por estética excelente',
            'Flujo de trabajo armónico con el técnico de laboratorio'
        ],
        faqs: [
            { q: '¿Piden al candidato que muestre sus propios casos?', a: 'Obligatoriamente. Un perfil restaurador / estético debe disponer de un archivo fotográfico protocolizado que demuestre su evolución y resultados a largo plazo.' },
            { q: 'Mis pacientes son muy exigentes, ¿tienen perfiles de lujo?', a: 'Atendemos a clínicas que operan en un segmento premium. Buscamos perfiles que igualen el nivel comunicacional exigido en odontología boutique.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' },
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' }
            ],
            profiles: [
                { name: 'Selección Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' },
                { name: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general' }
            ],
            blog: [
                { name: 'Cómo contratar odontólogo restaurador', href: '/blog/como-contratar-odontologo-restaurador' },
                { name: 'Clínica Privada: Perfil Ideal', href: '/blog/perfil-ideal-dentista-general-clinica-privada' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
