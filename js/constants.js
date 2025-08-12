const LANGUAGES = {
  EN: {},
  ES: {
    general: {
      portrait: "Retrato animado de Evelyn, con su setup de fondo.",
      welcome: "¡Hola! Soy Evelyn, desarrolladora de software; te invito a conocerme tanto personal como profesionalmente. Si tenés una necesidad, busquemos la solución.",
      buttons: {
        back: { alt: 'Volver', aria: 'Volver a la página anterior' },
        lang: { alt: 'Cambiar idioma', aria: 'Abrir selector de idioma' },
        languages: {
          ES: { alt: 'Español', aria: 'Seleccionar idioma español' },
          EN: { alt: 'Inglés', aria: 'Seleccionar idioma inglés' }
        },
        music: {
          on: { alt: 'Silenciar música', aria: 'Silenciar música de fondo' },
          off: { alt: 'Reanudar música', aria: 'Encender música de fondo' }
        },
        objectives: {
          cta: 'Objetivos',
          aria: 'Abrir objetivos y misiones'
        },
        collection: {
          cta: 'Colección',
          aria: 'Abrir portafolio de trabajos'
        },
        contact: {
          cta: 'Mensajes',
          aria: 'Abrir formulario de contacto'
        }
      },
    },
    objectives: {
      missions: {
        dev: {
          cta: 'Objetivo 1',
          title: 'Desarrollo web',
          description: 'Crear experiencias funcionales y atractivas optimizadas, que se vean bien en todos los dispositivos.',
          alt: 'Ícono estilo retro de monitor con ventanas abiertas.'
        },
        ui: {
          cta: 'Objetivo 2',
          title: 'Diseño visual',
          description: 'Lograr que cada proyecto tenga identidad propia y coherencia, encontrando una solución adecuada para la marca.',
          alt: 'Ícono estilo retro de paleta de colores.'
        },
        support: {
          cta: 'Objetivo 3',
          title: 'Asesoría y soporte',
          description: 'Acompañar al cliente cada etapa del proyecto resolviendo dudas y guiando para que todo fluya sin estrés.',
          alt: 'Ícono estilo retro de celular con burbuja de mensaje.'
        },
        button: 'Aceptado'
      },
      levels: {
        first: {
          cta: 'Nivel 1: INICIACIÓN',
          description: 'Aprender a hacer páginas que no se rompen... casi nunca.',
          alt: 'Ícono estilo retro de espadas cruzadas.'
        },
        second:{
          cta: 'Nivel 2: INDEPENDENCIA',
          description: 'Ayudar marcas y emprendedores a brillar digitalmente.',
          alt: 'Ícono estilo retro de tiro al blanco con flecha clavada.'
        },
        third: {
          cta: 'Nivel 3: INTEGRACIÓN',
          description: 'Armar soluciones integrales, combinando lo anterior para la idea de un producto final; sin perder la magia en el proceso.',
          alt: 'Ícono estilo retro de varita mágica con brillos.'
        }
      }
    },
    collection: {
      buttons: {
        cv: { cta: 'Descargar CV', aria: 'Descargar Currículum Vitae en idioma actual', icon: 'Ícono con flecha de descarga hacia abajo, estilo retro animado.' },
        linkedin: { cta: 'LinkedIn', aria: 'Abrir perfil de LinkedIn en nueva pestaña', icon: 'Logotipo de LinkedIn, estilo retro animado.' }
      },
      title: '¿Así que te interesa ver algo de mi colección?',
      lumbra: {
        web: { 
          cta: 'Ver logro',
          aria: 'Abrir nueva pestaña con web de Lumbra',
          alt: 'Animación corta de navegación mobile con interacciones en la web diseñada y desarrollada para Lumbra.',
          title: 'LUMBRA',
          case: 'web de presentación',
          role: 'ROL: DISEÑO + DESARROLLO',
          description: 'Landing liviana con catálogo y CTA a WhatsApp, respetando identidad de la marca con estilos rústicos y paleta de colores acorde.'
        },
        socials: {
          cta: 'Ver logro',
          aria: 'Abrir nueva pestaña con Instagram de Lumbra',
          alt: 'Animación corta de navegación en feed de Instagram diseñado para Lumbra.',
          title: 'LUMBRA',
          case: 'marketing digital',
          role: 'ROL: CONTENIDO + SOCIAL',
          description: 'Diseño de feed + pack de historias con encuestas + catálogo pdf, foco en proceso artesanal y close-ups.'
        }
      },
      subtitle: 'Estos fueron algunos de los logros más recientes, y los siguientes son proyectos solidarios, ¡pero no menos importantes!',
      esicilia: {
        title: 'ESPACIO SICILIA',
        case: 'OBJETIVO: IDENTIFICAR MARCA, PALETA DE COLORES Y PÚBLICO',
        role: 'ROL: DISEÑO + REALIZACIÓN',
        description: 'Kit esencial de identidad. Construcción rápida de marca (colores y tipografía), flyer imprimible y stories con mensajes directos para familias.',
        flyer: 'Folleto de mindfulness y yoga para niñas/os y jóvenes: ilustración suave y lista de beneficios con paleta de colores pastel.',
        stories: 'Línea de historias animadas con colores pastel (celeste, rosa y amarillo), con ideas claras para el público adulto.',
        cta: 'Ver Instagram',
        aria: 'Abrir nueva pestaña con Instagram de Espacio Sicilia'
      },
      aniredes: {
        title: 'ANIRedes',
        case: 'OBJETIVO: IDENTIFICAR MARCA Y PÚBLICO PARA GENERAR CONTENIDO DE VENTAS Y RÁPIDA DIFUSIÓN',
        role: 'ROL: DISEÑO + REALIZACIÓN',
        description: 'Identidad express + difusión. Se definieron paleta, tipografía y tonos de forma ágil; sumando formas geométricas para énfasis en productos. Publicaciones listas con difusión orgánica + kit de productos para WhatsApp Business categorizados en nuevas colecciones.',
        alt: 'Línea de publicaciones orientadas a grupos de difusión orgánica, con identidad de marca definida por el color azul.',
        cta: 'Ver Instagram',
        aria: 'Abrir nueva pestaña con Instagram de ANIRedes'
      }
    },
    contact: {
      title: '¿Tenés dudas o querés consultarme algo? ¡Escribime!',
      name: {
        icon: 'Ícono de persona, relacionado a nombre',
        placeholder: 'Tu nombre'
      },
      email: {
        icon: 'Ícono de sobre de mensajería, relacionado a correo electrónico',
        placeholder: 'Tu correo electrónico'
      },
      phone: {
        icon: 'Ícono de teléfono, relacionado a número de contacto',
        placeholder: 'Tu número de contacto'
      },
      textarea: {
        cta: '',
        placeholder: '¡Hola! Necesito...'
      },
      buttons: {
        send: {
          cta: 'Enviar mensaje',
          aria: 'Enviar correo electrónico'
        },
        wpp: {
          cta: 'Prefiero WhatsApp',
          aria: 'Abrir nueva pestaña para enviar mensaje por WhatsApp'
        }
      }
    }  
  }
};