const LANGUAGES = {
  EN: [
    // Por completar si es necesario
  ],
  ES: [
    {
      selector: '#portrait',
      attributes: { alt: "Retrato animado de Evelyn, con su setup de fondo." }
    },
    {
      selector: '.container_welcome',
      attributes: {
        innerHTML: `¡Hola! Soy Evelyn, desarrolladora de software; te invito a conocerme tanto personal como profesionalmente. <strong>Si tenés una necesidad, busquemos la solución.</strong>`
      }
    },

    { selector: '#actions_objectives', attributes: { innerText: "OBJETIVOS" } },

    // OBJETIVO 1
    { selector: '#section_item--dev h4', attributes: { innerText: 'OBJETIVO 1' } },
    { selector: '#section_item--dev h3', attributes: { innerText: 'DESARROLLO WEB' } },
    { selector: '#section_item--dev .section_mission p', attributes: { innerText: 'Crear experiencias funcionales y atractivas optimizadas, que se vean bien en todos los dispositivos.' } },
    { selector: '#section_item--dev .section_mission button', attributes: { innerText: 'ACEPTADO' } },

    // OBJETIVO 2
    { selector: '#section_item--ui h4', attributes: { innerText: 'OBJETIVO 2' } },
    { selector: '#section_item--ui h3', attributes: { innerText: 'DISEÑO VISUAL' } },
    { selector: '#section_item--ui .section_mission p', attributes: { innerText: 'Lograr que cada proyecto tenga identidad propia y coherencia, encontrando una solución adecuada para la marca.' } },
    { selector: '#section_item--ui .section_mission button', attributes: { innerText: 'ACEPTADO' } },

    // OBJETIVO 3
    { selector: '#section_item--support h4', attributes: { innerText: 'OBJETIVO 3' } },
    { selector: '#section_item--support h3', attributes: { innerText: 'ASESORÍA Y SOPORTE' } },
    { selector: '#section_item--support .section_mission p', attributes: { innerText: 'Acompañar al cliente cada etapa del proyecto resolviendo dudas y guiando para que todo fluya sin estrés.' } },
    { selector: '#section_item--support .section_mission button', attributes: { innerText: 'ACEPTADO' } },

    // NIVELES
    { selector: 'ol .section_item#section_item--dev h3', attributes: { innerText: 'Nivel 1: INICIACIÓN' } },
    { selector: 'ol .section_item#section_item--dev p', attributes: { innerText: 'Aprender a hacer páginas que no se rompen... casi nunca.' } },
    { selector: 'ol .section_item#section_item--ui h3', attributes: { innerText: 'Nivel 2: INDEPENDENCIA' } },
    { selector: 'ol .section_item#section_item--ui p', attributes: { innerText: 'Ayudar marcas y emprendedores a brillar digitalmente.' } },
    { selector: 'ol .section_item#section_item--support h3', attributes: { innerText: 'Nivel 3: INTEGRACIÓN' } },
    { selector: 'ol .section_item#section_item--support p', attributes: { innerText: 'Armar soluciones integrales, combinando lo anterior para la idea de un producto final; sin perder la magia en el proceso.' } },

    // Botones navegación
    { selector: '#actions_collection', attributes: { innerText: "COLECCIÓN" } },
    { selector: '#actions_contact', attributes: { innerText: "MENSAJES" } },

    // Formulario
    { selector: '.form_control[name="name"]', attributes: { placeholder: "Tu nombre" } },
	{ selector: '#form_icon--name', attributes: { alt: "Ícono de persona, relacionado a nombre" } },
    { selector: '.form_control[name="email"]', attributes: { placeholder: "Tu correo electrónico" } },
    { selector: '#form_icon--email', attributes: { alt: "Ícono de sobre de mensajería, relacionado a correo electrónico" } },
	{ selector: '.form_control[name="phone"]', attributes: { placeholder: "Tu número de contacto" } },
	{ selector: '#form_icon--phone', attributes: { alt: "Ícono de teléfono, relacionado a número de contacto" } },
    { selector: '.form_control[name="message"]', attributes: { placeholder: "¡Hola! Necesito...", innerText: '' } },
    { selector: '.form_button .form_button__submit', attributes: { innerText: "Enviar mensaje" } },
    { selector: '.form_button .form_button__wpp', attributes: { innerText: "Prefiero WhatsApp" } }
  ]
};
