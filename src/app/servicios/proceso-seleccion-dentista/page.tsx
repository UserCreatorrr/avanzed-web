import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Proceso de selección dentista con rigor y método | Avanzed',
    description: 'Diseñamos procesos de selección para dentistas y especialistas con evaluación, integración y seguimiento.',
};

export default function ProcesoSeleccionDentista() {
    const pageData = {
        h1: 'Proceso de Selección Dentista',
        subheadline: 'Metodología avanzada para evaluar e incorporar odontólogos generales y especialistas. Validamos competencias técnicas, destreza clínica y habilidades interpersonales.',
        targetAudience: [
            'Clínicas que necesitan un odontólogo generalista de alto nivel',
            'Centros que buscan especialistas (Ortodoncia, Implantología, Endodoncia)',
            'Inversores o gerentes que carecen de criterio estrictamente clínico'
        ],
        problemSolved: 'Una mala contratación de un dentista puede suponer quejas de pacientes, tratamientos mal ejecutados y fugas de rentabilidad. Estructuramos un proceso seguro y objetivo que despeja las dudas del contratador.',
        howWeWork: [
            'Definición de las competencias clínicas obligatorias para la vacante.',
            'Sondeo exhaustivo del mercado (portales, bases propias, headhunting activo).',
            'Test y entrevistas por competencias orientadas a casos clínicos.',
            'Toma de referencias formales en clínicas previas del dentista.'
        ],
        rolesCovered: [
            'Odontólogo General',
            'Cirujano Implantólogo',
            'Endodoncista Microscopista',
            'Odontopediatra Exclusivo',
            'Odontólogo Restaurador'
        ],
        whyAvanzed: [
            { title: 'Entrevistas Técnicas', desc: 'Validamos a nivel clínico, algo que un recruiter genérico no puede hacer.' },
            { title: 'Velocidad vs Precisión', desc: 'Procesos equilibrados para no perder al buen candidato sin bajar el filtro.' },
            { title: 'Match Cultural', desc: 'El dentista debe encajar tecnológicamente y en el ritmo de tu box.' },
            { title: 'Exclusividad', desc: 'Presentación de finalistas alineados al 100%.' }
        ],
        methodology: [
            { title: 'Validación Curricular', desc: 'Comprobación de títulos, másters habilitantes y trayectoria.' },
            { title: 'Caso Práctico / Clínico', desc: 'Pruebas de conocimiento o resolución de casos reales.' },
            { title: 'Propuesta Final', desc: 'Alineación de expectativas para el cierre exitoso del contrato.' }
        ],
        expectedResults: [
            'Incorporación de dentistas confiables desde el día 1',
            'Menos tiempo dedicado por la gerencia a entrevistar candidatos no válidos',
            'Confianza para delegar agenda de pacientes al nuevo perfil'
        ],
        faqs: [
            { q: '¿Cómo evalúan la destreza clínica sin verle trabajar?', a: 'Diseñamos entrevistas situacionales, planteamos supuestos clínicos reales de tu propia clínica y validamos en base a los criterios del director médico.' },
            { q: '¿Ofrecen garantías sobre el dentista incorporado?', a: 'Totalmente. Incluimos periodos de garantía para reiniciar la búsqueda sin coste si la integración no es la esperada durante los primeros meses.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Odontología General', href: '/especializaciones/odontologia-general' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Selección Dentista General', href: '/perfiles/seleccion-dentista-general' },
                { name: 'Contratar Odontólogo Restaurador', href: '/perfiles/seleccion-odontologo-restaurador' }
            ],
            blog: [
                { name: 'Perfil ideal del dentista de clínica privada', href: '/blog/perfil-ideal-dentista-general-clinica-privada' },
                { name: 'Qué evaluar en selección', href: '/blog/que-evaluar-en-un-proceso-de-seleccion-dental' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
