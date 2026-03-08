import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección de dentista general para clínica dental | Avanzed',
    description: 'Encontramos perfiles de odontología general alineados con el nivel asistencial, humano y operativo de tu clínica.',
};

export default function EspecializacionOdontologiaGeneral() {
    const pageData = {
        h1: 'Selección Odontología General',
        subheadline: 'El motor diario de la clínica. Evaluamos y seleccionamos dentistas generalistas que combinen velocidad de diagnóstico, destreza clínica y excelente trato al paciente.',
        targetAudience: [
            'Clínicas con un alto volumen de primeras visitas que necesitan canalizar tratamientos',
            'Gerencias buscando estabilizar el equipo base',
            'Directores médicos que requieren delegar la operativa diaria con total confianza'
        ],
        problemSolved: 'La odontología general abarca desde la conservadora hasta el diagnóstico temprano de derivación. Una mala contratación en este área genera cuellos de botella y pérdida de pacientes. Nosotros validamos la solidez integral del candidato.',
        howWeWork: [
            'Auditoría del "ritmo de box" y los tiempos que estipula la clínica.',
            'Sondeo de odontólogos generalistas con experiencia probada y máster habilitante.',
            'Test de competencias relacionales (comunicación de planes de tratamiento).',
            'Verificación de referencias clínicas con especialistas con los que ha trabajado.'
        ],
        rolesCovered: [
            'Odontólogo de Cabecera / Primeras Visitas',
            'Especialista en Odontología Conservadora',
            'Dentista General con enfoque preventivo'
        ],
        whyAvanzed: [
            { title: 'Visión Integral', desc: 'Sabemos que el generalista es el director de orquesta del paciente.' },
            { title: 'Filtro Comercial Ético', desc: 'Validamos su capacidad de empatizar sin venta agresiva.' },
            { title: 'Estabilidad', desc: 'Buscamos candidatos que no estén de paso mientras esperan un máster.' },
            { title: 'Validación Técnica', desc: 'Revisión exhaustiva de su praxis en conservadora.' }
        ],
        methodology: [
            { title: 'Entrevista Estructurada', desc: 'Casos clínicos de diagnóstico multidisciplinar.' },
            { title: 'Evaluación de Tiempos', desc: 'Adecuación al ritmo del centro (ej: endo en 45 min vs 60 min).' },
            { title: 'Presentación', desc: 'Envío de opciones altamente alineadas a la gerencia.' }
        ],
        expectedResults: [
            'Aumento en la conversión de primeras visitas',
            'Tratamientos conservadores y preventivos realizados con solvencia',
            'Confianza para la dirección clínica'
        ],
        faqs: [
            { q: '¿Tienen candidatos recién graduados o solo senior?', a: 'Nos adaptamos al requerimiento. Si la clínica tiene sistema de mentoría, podemos aportar talento junior excepcional. Si requieren delegación inmediata, buscamos perfiles de 5+ años de experiencia.' },
            { q: '¿Cómo evalúan la capacidad de diagnóstico?', a: 'Presentamos casos tipo y pedimos al candidato que diagrame el plan de tratamiento y explique cómo se lo comunicaría al paciente.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Endodoncia', href: '/especializaciones/endodoncia' },
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' }
            ],
            profiles: [
                { name: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general' },
                { name: 'Selección Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' }
            ],
            blog: [
                { name: 'Perfil ideal dentista general', href: '/blog/perfil-ideal-dentista-general-clinica-privada' },
                { name: 'Selección especializada vs generalista', href: '/blog/seleccion-de-personal-odontologia-vs-rrhh-generalista' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
