import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Selección de cirujano dental para clínica especializada | Avanzed',
    description: 'Te ayudamos a contratar perfiles de cirugía oral y bucal con evaluación rigurosa y enfoque en fiabilidad asistencial.',
};

export default function EspecializacionCirugiaOral() {
    const pageData = {
        h1: 'Selección Cirugía Bucal / Oral',
        subheadline: 'Cirujanos e implantólogos de alto rendimiento. Incorporamos perfiles capaces de resolver casos quirúrgicos complejos garantizando seguridad clínica y el máximo rigor técnico.',
        targetAudience: [
            'Clínicas con un fuerte enfoque en rehabilitación sobre implantes',
            'Centros que necesitan ampliar días de cirugía o sumar un maxilofacial',
            'Clínicas dentales de referencia que asumen casos de alta complejidad'
        ],
        problemSolved: 'La cirugía oral es el área de mayor riesgo legal, clínico y reputacional. Contratar un perfil inadecuado impacta directamente en la confianza del paciente. Validamos la técnica, la destreza regenerativa y la experiencia demostrable.',
        howWeWork: [
            'Entendemos la demanda quirúrgica (implantes unitarios, arcadas, elevación seno...).',
            'Evaluamos el portfolio de casos clínicos reales del cirujano.',
            'Revisión en profundidad de habilidades en tejidos blandos y regeneración.',
            'Aseguramos una correcta comunicación interdepartamental con el prostodoncista.'
        ],
        rolesCovered: [
            'Cirujano Bucal / Oral con posgrado o máster',
            'Implantólogo en carga inmediata y protocolos guiados',
            'Periodoncista Quirúrgico',
            'Cirujano Maxilofacial con dedicación a clínica privada'
        ],
        whyAvanzed: [
            { title: 'Auditoría Quirúrgica', desc: 'Nuestra red técnica valida las complicaciones resueltas.' },
            { title: 'Visión Global', desc: 'Un cirujano debe pensar en la posterior prótesis. Validamos ese criterio.' },
            { title: 'Búsqueda Directa', desc: 'Atraemos a perfiles estables que no buscan en portales de empleo.' },
            { title: 'Tranquilidad', desc: 'Cubrimos el área de mayor facturación y riesgo con certezas.' }
        ],
        methodology: [
            { title: 'Análisis de Casos', desc: 'Simulaciones sobre panorámicas o CBCT.' },
            { title: 'Validación de Protocolos', desc: 'Manejo de complicaciones (periimplantitis, fracaso óseo).' },
            { title: 'Verificación de Perfil', desc: 'Seguro de Responsabilidad Civil y certificaciones al día.' }
        ],
        expectedResults: [
            'Aumento de la capacidad quirúrgica del centro',
            'Cero improvisaciones en cirugías complejas',
            'Mejora de la rentabilidad en tratamientos implantológicos'
        ],
        faqs: [
            { q: '¿Evalúan conocimiento en cirugía guiada?', a: 'Sí. Detallamos qué sistemas cad-cam, software de planificación y marcas de implantes domina el candidato.' },
            { q: 'Los buenos cirujanos ya están ocupados. ¿Cómo los atraen?', a: 'A través del Headhunting y nuestra red. Analizamos honorarios, volumen de casos interesantes que ofrezca la clínica y comodidad tecnológica del gabinete.' }
        ],
        relatedLinks: {
            specialties: [
                { name: 'Prostodoncia', href: '/especializaciones/prostodoncia' },
                { name: 'Odontología Restauradora', href: '/especializaciones/odontologia-restauradora' }
            ],
            profiles: [
                { name: 'Contratar Cirujano Oral', href: '/perfiles/seleccion-cirujano-oral' },
                { name: 'Contratar Prostodoncista', href: '/perfiles/seleccion-prostodoncista' }
            ],
            blog: [
                { name: 'Errores al contratar cirujano oral', href: '/blog/errores-al-contratar-cirujano-oral' },
                { name: 'Implantología: Validar perfiles', href: '/blog/implantologia-y-cirugia-oral-como-validar-perfiles' }
            ]
        }
    };

    return <ServicePageTemplate data={pageData} />;
}
