export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
}

export const posts: BlogPost[] = [
    {
        slug: 'que-evaluar-en-un-proceso-de-seleccion-dental',
        title: 'Qué evaluar en un proceso clínico competitivo de odontología',
        excerpt: 'Ir más allá del currículum es clave en odontología. Descubre qué criterios técnicos evaluar.',
        category: 'Procesos de Selección',
        readTime: '5 min de lectura',
        content: `
      <h2>El currículum no opera pacientes</h2>
      <p>Entrevistar a un profesional clínico no es lo mismo que entrevistar a un comercial o a un diseñador. La destreza manual, el respeto por los protocolos y la empatía en gabinete son imposibles de certificar con una simple lectura de historial laboral.</p>
      <h3>El enfoque clínico</h3>
      <p>En Avanzed validamos los conocimientos exigiendo al candidato la resolución verbal (o fotográfica) de situaciones clínicas cotidianas. Evaluamos su comunicación (¿sabe explicar el plan sin usar jerga aterradora?) y verificamos su tasa de éxito en tratamientos anteriores. La odontología basada en la evidencia debe reflejarse en cada contratación.</p>
    `
    },
    {
        slug: 'perfil-ideal-dentista-general-clinica-privada',
        title: 'El perfil ideal del dentista general para clínica privada exigente',
        excerpt: 'El generalista es el pilar de la facturación global de la clínica. ¿Cómo identificar al mejor?',
        category: 'Perfiles Clínicos',
        readTime: '4 min de lectura',
        content: `
      <h2>Más allá de "cubrir huecos"</h2>
      <p>El dentista general suele ser la primera barrera con el paciente. Un profesional con excelente capacidad empática conseguirá que los tratamientos sean aceptados mucho antes que el especialista estrella.</p>
      <h3>Diagnóstico preventivo</h3>
      <p>El perfil ideal diagnostica con vocación integral de salud y deriva con rapidez a cirujanos y endodoncistas cuando el caso lo requiere. No retiene tratamientos que superan sus habilidades ni ignora focos de infección por falta de atención.</p>
    `
    },
    {
        slug: 'seleccion-de-personal-odontologia-vs-rrhh-generalista',
        title: 'Selección Especializada en Odontología vs. RRHH Generalista',
        excerpt: 'Por qué delegar el talento clínico a gestorías sin conocimiento sectorial es un error costoso.',
        category: 'Sector Dental',
        readTime: '6 min de lectura',
        content: `
      <h2>No puedes evaluar lo que no entiendes</h2>
      <p>Cuando un analista de RRHH que selecciona contables también selecciona implantólogos, el margen de error es enorme. Al no hablar el lenguaje clínico, estos perfiles se dejan llevar por la verborrea del candidato y no pueden auditar la calidad real de su praxis médica.</p>
      <h3>Eficiencia extrema</h3>
      <p>Un equipo de talento especializado como Avanzed sabe qué preguntar. Si requerimos un endodoncista, preguntamos sobre el uso de biocerámicos, irrigación sónica y microscopía óptica. Ese nivel de filtro ahorra semanas de ensayo y error al Director Médico de la clínica.</p>
    `
    },
    {
        slug: 'expansion-de-clinicas-dentales-y-reclutamiento-especializado',
        title: 'Expansión de clínicas dentales y estrategias de reclutamiento',
        excerpt: 'Abre nuevos gabinetes o sedes reduciendo el riesgo de la falta de equipo desde el día 1.',
        category: 'Expansión de Clínicas',
        readTime: '5 min de lectura',
        content: `
      <h2>Abrir sin equipo estabilizado</h2>
      <p>Una nueva apertura o ampliación de sillones es una inversión de alto ticket. Generar flujo de pacientes cuesta dinero. Si esos pacientes aterrizan en manos de un doctor sin la capacitación adecuada o sin encaje cultural, la inversión de marketing se esfuma por retención nula.</p>
      <h3>Clonar la cultura clínica</h3>
      <p>El headhunter experto entiende qué hizo exitosa a tu sede principal y busca profesionales que actúen y compartan los mismos valores centrales para tus nuevas aperturas.</p>
    `
    },
    {
        slug: 'como-reducir-la-rotacion-en-clinicas-dentales',
        title: 'Cómo reducir la rotación en clínicas dentales de manera efectiva',
        excerpt: 'Análisis de las verdaderas causas de fuga de talento en los boxes dentales.',
        category: 'RRHH Dental',
        readTime: '6 min de lectura',
        content: `
      <h2>La rotación sangra la cuenta de resultados</h2>
      <p>La rotación de personal obliga a reiniciar la curva de aprendizaje (tiempos de gabinete), desgasta emocionalmente al paciente que ve caras nuevas siempre, e incrementa costes directos.</p>
      <h3>Claves de retención</h3>
      <p>1. Ajuste cultural en la fase de selección. 2. Ofertas retributivas transparentes. 3. Formación continua, un driver esencial para el odontólogo ambicioso. Avanzed audita estos tres pilares en nuestra Metodología.</p>
    `
    },
    {
        slug: 'implantologia-y-cirugia-oral-como-validar-perfiles',
        title: 'Implantología y cirugía oral: Cómo validar perfiles sin margen de error',
        excerpt: 'El perfil de mayor riesgo. Descubre cómo certificar credenciales y casos clínicos.',
        category: 'Especializaciones',
        readTime: '7 min de lectura',
        content: `
      <h2>El área legal más sensible</h2>
      <p>La cirugía avanzada no perdona errores de inexperiencia. La periimplantitis, los fallos de osteointegración y las quejas de los pacientes hunden el prestigio del centro.</p>
      <h3>Metodología de cribado Avanzed</h3>
      <p>Filtramos el máster cursado (presencial, no online), pedimos documentación radiográfica anonomizada y planteamos simulaciones: ¿qué protocolo usaría para una fenestración en zona anterior? Esto blinda a tu clínica frente a la temeridad.</p>
    `
    },
    {
        slug: 'errores-al-contratar-cirujano-oral',
        title: 'Errores comunes al contratar a un cirujano oral',
        excerpt: 'Evita los sobrecostes asociados a un perfil quirúrgico erróneo.',
        category: 'Especializaciones',
        readTime: '5 min de lectura',
        content: `
      <h2>Ceguera ante los casos complejos</h2>
      <p>Uno de los errores más comunes es asumir que años de experiencia equivalen a pericia en atrofias óseas severas. Si tu clínica no asume regeneraciones mayores, un cirujano intermedio bastará. Si agendas All-on-4 diarios, el filtro debe ser draconiano.</p>
      <h3>La compatibilidad con prótesis</h3>
      <p>Otro error es el cirujano "estrella" que no dialoga con el prostodoncista. El cirujano que seleccionamos siempre entiende que todo implante sirve a un fin restaurador posterior.</p>
    `
    },
    {
        slug: 'cuando-necesitas-un-headhunter-odontologia',
        title: 'Por qué y cuándo necesitas un headhunter en odontología',
        excerpt: 'En qué escenarios el talento que buscas no va a enviar su currículum por Infojobs.',
        category: 'Headhunting',
        readTime: '4 min de lectura',
        content: `
      <h2>El mercado oculto</h2>
      <p>El talento de altísimo nivel (directores médicos, ortodoncistas exclusivos con gran caché, maxilofaciales) está cómodamente alojado en buenas posiciones. El Headhunting es necesario porque ellos no buscan trabajo activo: debes presentarles una oportunidad que mejore sus condiciones corporativas actuales. Avanzed hace esta intermediación de forma confidencial.</p>
    `
    },
    {
        slug: 'errores-de-onboarding-en-clinicas-dentales',
        title: 'Errores de Onboarding en clínicas dentales',
        excerpt: 'El buen candidato llegó... y se fue a los 15 días. Qué salió mal.',
        category: 'Gestión Clínica',
        readTime: '5 min de lectura',
        content: `
      <h2>Abandonar al doctor en el box</h2>
      <p>El error número uno es "aquí tienes el gabinete, el material está en los cajones, ¡suerte!". El onboarding clínico debe pautar el uso del software de gestión, presentar al personal auxiliar de manera protocolaria y ofrecer las libretas de fungibles. Avanzed ayuda a diseñar planes de acogida para frenar el abandono temprano.</p>
    `
    },
    {
        slug: 'como-contratar-endodoncista-para-clinica-dental',
        title: 'Cómo contratar endodoncista exclusivo sin perder el tiempo de la clínica',
        excerpt: 'El perfil más técnico. Claves para evaluar a alguien que trabaja bajo magnificación.',
        category: 'Especializaciones',
        readTime: '4 min de lectura',
        content: `
      <h2>Microscopía como estándar</h2>
      <p>Si la clínica posee microscopio óptico operativo, el endodoncista a contratar debe tener formación demostrada en su uso intensivo y cotidiano. No podemos improvisar formaciones internas. Analizamos con qué herramientas rotatorias rotatorias trabaja y su capacidad para abordar ápices de difícil anatomía.</p>
    `
    },
    {
        slug: 'como-contratar-odontologo-restaurador',
        title: 'Cómo contratar odontólogo restaurador con altas aptitudes estéticas',
        excerpt: 'Descubrir el talento artístico clínico. Cómo separar el grano de la paja en composites y carillas.',
        category: 'Especializaciones',
        readTime: '5 min de lectura',
        content: `
      <h2>El portfolio es el rey</h2>
      <p>La odontología estética es visual. Requerimos sistemáticamente los protocolos fotográficos de los candidatos en nuestra primera fase. Nos fijamos en la integración de carillas, contorno gingival post-tratamiento y el dominio de texturas en resina compuesta.</p>
    `
    },
    {
        slug: 'como-contratar-prostodoncista',
        title: 'Cómo contratar prostodoncista y asegurar el control de las rehabilitaciones',
        excerpt: 'El especialista transversal. Cómo evaluar sus capacidades interdisciplinares.',
        category: 'Especializaciones',
        readTime: '5 min de lectura',
        content: `
      <h2>El director de orquesta rehabilitador</h2>
      <p>El Prostodoncista diseña la sonrisa y la función. Su evaluación por parte de Avanzed recae sobre su entendimiento de la patología oclusal, ATM y sobre su dominio absoluto de los escáneres intraorales (impresiones digitales 3D). Deben demostrar liderazgo ante ortodoncistas y cirujanos para poder guiar los pasos del equipo hasta la entrega de la prótesis definitiva.</p>
    `
    }
];
