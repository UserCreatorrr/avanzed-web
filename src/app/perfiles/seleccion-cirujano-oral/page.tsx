import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Contratar cirujano oral especialista | Avanzed',
    description: 'Procesos de selección de cirujanos orales e implantólogos. Evaluación de complicaciones, carga inmediata y regeneración.',
};

export default function SeleccionCirujanoOral() {
    const pageData = {
        h1: 'Contratar Cirujano Oral',
        subheadline: 'El perfil de mayor riesgo y rentabilidad. Encontramos especialistas quirúrgicos que asumen casos complejos, implantología avanzada y regeneración ósea con solvencia absoluta.',
        targetAudience: [
            'Clínicas con elevado volumen de implantología e injertos',
            'Plataformas dentales que asumen la cirugía de la red general',
            'Inversores o gerentes que buscan delegar la dirección quirúrgica'
        ],
        problemSolved: 'Delegar la cirugía a perfiles con poca experiencia genera periimplantitis, complicaciones intraoperatorias y litigios. Avanzed audita el background quirúrgico para asegurar la tranquilidad total del director médico.',
        howWeWork: [
            'Análisis de la demanda: implantes simples vs carga inmediata/arcadas completas.',
            'Atracción de talento contrastado vía headhunting directo.',
            'Entrevistas centradas en manejo de tejidos, elevación de seno y complicaciones.',
            'Negociación de honorarios y agendas de cirugía exclusivas.'
        ],
        rolesCovered: [
            'Cirujano Bucal / Implantólogo',
            'Periodoncista con enfoque Quirúrgico',
            'Cirujano Maxilofacial Especialista'
        ],
        whyAvanzed: [
            { title: 'Red de Casos Propios', desc: 'Conocemos los requisitos para afrontar atrofias severas.' },
            { title: 'Auditoría Técnica', desc: 'Validamos protocolos de esterilidad, colgajos y suturas en entrevista.' },
            { title: 'Equilibrio Asistencial', desc: 'El cirujano debe interactuar impecablemente con el prostodoncista.' },
            { title: 'Tranquilidad Quirúrgica', desc: 'Solo finalistas con récord de éxito comprobable.' }
        ],
        methodology: [
            { title: 'Validación Curricular', desc: 'Máster Quirúrgico Oficial o vía MIR y residencias.' },
            { title: 'Complicaciones', desc: 'Testeo de capacidad resolutiva ante hemorragias o fallos de oseointegración.' },
            { title: 'Oferta Transparente', desc: 'Cierre del acuerdo económico y vinculación jurídica.' }
        ],
        expectedResults: [
            'Aceptación y finalización con éxito de tratamientos de alta complejidad',
            'Aumento seguro del ticket medio por paciente de la clínica',
            'Cero reclamaciones derivadas de falta de pericia quirúrgica'
        ],
        faqs: [
            { q: '¿Qué experiencia debe exigir una clínica a un implantólogo nuevo?', a: 'Depende de los casos que asuma la clínica. Para cirugías básicas basta experiencia probada; para atrofias o zigomáticos, exigimos capacitación y currículum avanzado.' },
            { q: '¿Pueden encontrar cirujanos que lleven sus propios motores o instrumental?', a: 'Es una negociación habitual. Lo filtramos de entrada si el centro no dispone de aparatología o implantarios de ciertas marcas.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Cirugía Bucal Oral', href: '/especializaciones/cirugia-bucal-oral' },
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' }
            ],
            profiles: [
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' },
                { name: 'Selección Endodoncista', href: '/perfiles/seleccion-endodoncista' }
            ],
            blog: [
                { name: 'Errores al contratar cirujano', href: '/blog/errores-al-contratar-cirujano-oral' },
                { name: 'Validar perfiles quirúrgicos', href: '/blog/implantologia-y-cirugia-oral-como-validar-perfiles' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
