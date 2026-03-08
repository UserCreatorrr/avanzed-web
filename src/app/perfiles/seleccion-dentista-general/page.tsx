import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección de dentista general | Avanzed',
    description: 'Proceso estructurado para contratar dentistas generales de alto nivel para tu clínica privada.',
};

export default function SeleccionDentistaGeneral() {
    const pageData = {
        h1: 'Selección Dentista',
        subheadline: 'El odontólogo de cabecera es la cara de la clínica. Evaluamos trato al paciente, diagnóstico integral y agilidad operatoria.',
        targetAudience: [
            'Clínicas de alta afluencia que necesitan organizar agendas',
            'Gerentes que delegan el filtro de calidad en primeras visitas',
            'Clínicas boutique en busca de excelencia clínica general'
        ],
        problemSolved: 'El dentista general es quien más influye en el paciente. Una selección equivocada aquí afecta toda la facturación de especialidades. Te ahorramos el error de contratar a perfiles sin empatía o sin destreza conservadora.',
        howWeWork: [
            'Validamos su historial de permanencia en centros privados.',
            'Test de comunicación y empatía (el dentista como educador de salud).',
            'Evaluación técnica de composites, endodoncia básica e incrustaciones.',
            'Refuerzo en su capacidad para derivar casos correctos al especialista.'
        ],
        rolesCovered: [
            'Dentista General',
            'Especialista en Conservadora y Preventiva',
            'Odontopediatra General'
        ],
        whyAvanzed: [
            { title: 'Velocidad Comercial', desc: 'Filtramos la rotación natural del mercado rápidamente.' },
            { title: 'Precisión', desc: 'No unimos clínicas premium con dentistas acostumbrados a baja calidad.' },
            { title: 'Fidelización', desc: 'Buscamos candidatos con intención de arraigo.' },
            { title: 'Auditoría', desc: 'Presentamos al dentista con sus referencias verificadas.' }
        ],
        methodology: [
            { title: 'Screening', desc: 'Criba masiva de currículums estériles.' },
            { title: 'Entrevista Personal', desc: 'Testeo de "soft skills" en el trato al paciente.' },
            { title: 'Evaluación Técnica', desc: 'Testeo de "hard skills" para operatoria diaria.' }
        ],
        expectedResults: [
            'Mayor aceptación de presupuestos globales',
            'Agenda generalista optimizada y sin retrasos',
            'Ahorro en formación inicial'
        ],
        faqs: [
            { q: '¿Qué experiencia es ideal en un dentista general?', a: 'Para clínica privada exigente, buscamos idealmente 3-5 años como mínimo, preferiblemente con máster cursado o en curso que asegure actualización.' },
            { q: '¿Suelen trabajar a porcentaje o sueldo fijo?', a: 'El dentista general suele trabajar a porcentaje (o un mix), lo cual analizamos durante la entrevista para asegurar que sus expectativas cuadren con el modelo de tu clínica.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' },
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' }
            ],
            profiles: [
                { name: 'Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' },
                { name: 'Endodoncista', href: '/perfiles/seleccion-endodoncista' }
            ],
            blog: [
                { name: 'Perfil del Dentista General', href: '/blog/perfil-ideal-dentista-general-clinica-privada' },
                { name: 'Selección vs RRHH', href: '/blog/seleccion-de-personal-odontologia-vs-rrhh-generalista' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
