const LANGUAGES = {
  EN: {
    general: {
      portrait: "Evelyn's animated portrait, with her setup in the background.",
      welcome: "Hey there! I'm Evelyn — software developer. Get to know me, personally and professionally. Got a need? Let's build the solution.",
      buttons: {
        back: { alt: 'Go back', aria: 'Go back to previous page' },
        lang: { alt: 'Switch language', aria: 'Open language menu' },
        languages: {
          ES: { alt: 'Spanish', aria: 'Switch to Spanish' },
          EN: { alt: 'English', aria: 'Switch to English' }
        },
        music: {
          on: { alt: 'Mute music', aria: 'Mute background music' },
          off: { alt: 'Play music', aria: 'Play background music' }
        },
        objectives: {
          cta: 'Objectives',
          aria: 'Open objectives and missions'
        },
        collection: {
          cta: 'Collection',
          aria: 'Open portfolio'
        },
        contact: {
          cta: 'Message me',
          aria: 'Open contact form'
        }
      },
    },
    objectives: {
      missions: {
        dev: {
          cta: 'Objective 1',
          title: 'WEB DEV',
          description: 'Create functional, attractive, optimized experiences — good-looking on every device.',
          alt: 'Retro pixel-art monitor icon with open windows.'
        },
        ui: {
          cta: 'Objective 2',
          title: 'VISUAL DESIGN',
          description: 'Give each project a unique identity and visual consistency — achieving the right solution for each brand.',
          alt: 'Retro pixel-art color palette icon.'
        },
        support: {
          cta: 'Objective 3',
          title: 'GUIDE & SUPPORT',
          description: 'Guide clients through every step — being available to answer questions and keep the flow stress-free.',
          alt: 'Retro pixel-art phone icon with chat bubbles.'
        },
        button: 'Accepted'
      },
      levels: {
        first: {
          cta: 'Level 1: INIT',
          description: "Build pages that hold up... most of the time.",
          alt: 'Retro pixel-art crossed swords icon.'
        },
        second:{
          cta: 'Level 2: BREAK-FREE',
          description: 'Help brands and entrepreneurs shine online.',
          alt: 'Retro pixel-art archery target icon with an arrow stuck in.'
        },
        third: {
          cta: 'Level 3: INTEGRATION',
          description: 'Build end-to-end solutions, combining all the skills learned into a final product — without losing the magic.',
          alt: 'Retro pixel-art magic wand icon with sparkles.'
        }
      }
    },
    collection: {
      buttons: {
        cv: {
          cta: 'Download CV',
          aria: 'Download CV in the current language',
          icon: 'Animated retro pixel-art download arrow icon.'
        },
        linkedin: {
          cta: 'LinkedIn',
          aria: 'Open LinkedIn profile in a new tab',
          icon: 'Animated retro pixel-art LinkedIn logo.'
        }
      },
      title: "So... you'd like to see some of my progress?",
      lumbra: {
        web: { 
          cta: 'View achievement',
          aria: "Open the Lumbra website in a new tab",
          alt: 'Short mobile navigation animation showing interactions on the website designed and developed for Lumbra.',
          title: 'LUMBRA',
          case: 'showcase website',
          role: 'ROLE: DESIGN + DEV',
          description: 'Lightweight landing with catalog and WhatsApp CTA — keeping the brand identity (rustic style + matching palette).',
        },
        socials: {
          cta: 'View achievement',
          aria: 'Open Lumbra on Instagram in a new tab',
          alt: 'Short animation browsing the Instagram feed designed for Lumbra.',
          title: 'LUMBRA',
          case: 'digital marketing',
          role: 'ROLE: CONTENT + SOCIAL',
          description: 'Feed design + story pack with polls + PDF catalog — focusing on the handmade process and close-ups.'
        },
        star: 'Animated retro pixel-art yellow star icon.'
      },
      subtitle: 'These were some of my latest achievements — next up: a few community projects, just as important!',
      esicilia: {
       heart: 'Animated retro pixel-art red heart icon.',
        title: 'ESPACIO SICILIA',
        case: 'OBJECTIVE: IDENTIFY BRAND, COLOUR PALETTE AND TARGET',
        role: 'ROLE: DESIGN + BUILD',
        description: 'Essential identity kit. Quick brand build (colours + typography), printable flyer and a set of stories with straightforward messaging for families.',
        flyer: 'Mindfulness and yoga flyer for kids and teens: soft illustration and a list of benefits in a pastel palette.',
        stories: 'Animated story line in pastel colours (light blue, pink, and yellow), with clear ideas for an adult audience.',
        cta: 'View Instagram',
        aria: 'Open Espacio Sicilia on Instagram in a new tab'
      },
      aniredes: {
        heart: 'Animated retro pixel-art red heart icon.',
        title: 'ANIRedes',
        case: 'OBJECTIVE: IDENTIFY BRAND AND TARGET FOR SALES-CONTENT AND QUICK REACH',
        role: 'ROLE: DESIGN + BUILD',
        description: 'Express identity + rollout. Palette, typography and tone defined quickly; geometric shapes to emphasise products. Ready-to-post templates for organic distribution + WhatsApp Business product kit, categorised into new collections.',
        alt: 'Series of posts for organic broadcast lists, with a blue-led brand identity.',
        cta: 'View Instagram',
        aria: 'Open ANIRedes on Instagram in a new tab'
      }
    },
    contact: {
      title: 'Questions or enquiries? Get in touch — message me!',
      name: {
        icon: 'Person icon (name)',
        placeholder: 'Your name'
      },
      email: {
        icon: 'Envelope icon (email)',
        placeholder: 'Your email'
      },
      phone: {
        icon: 'Phone icon (phone)',
        placeholder: 'Your phone'
      },
      textarea: {
        cta: '',
        placeholder: "Hello! I'm thinking..."
      },
      buttons: {
        send: {
          cta: 'Send message',
          aria: 'Send message via email'
        },
        wpp: {
          cta: "Let's WhatsApp",
          aria: 'Open WhatsApp in a new tab'
        }
      }
    }  
  },
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
          description: 'Landing liviana con catálogo y CTA a WhatsApp, respetando identidad de la marca con estilos rústicos y paleta de colores acorde.',
        },
        socials: {
          cta: 'Ver logro',
          aria: 'Abrir nueva pestaña con Instagram de Lumbra',
          alt: 'Animación corta de navegación en feed de Instagram diseñado para Lumbra.',
          title: 'LUMBRA',
          case: 'marketing digital',
          role: 'ROL: CONTENIDO + SOCIAL',
          description: 'Diseño de feed + pack de historias con encuestas + catálogo pdf, foco en proceso artesanal y close-ups.'
        },
        star: 'Ícono de estrella amarilla en estilo retro animado.'
      },
      subtitle: 'Estos fueron algunos de los logros más recientes, y los siguientes son proyectos solidarios, ¡pero no menos importantes!',
      esicilia: {
        heart: 'Ícono de corazón rojo en estilo retro animado.',
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
        heart: 'Ícono de corazón rojo en estilo retro animado.',
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