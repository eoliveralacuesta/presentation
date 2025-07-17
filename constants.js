const LANGUAGES = {
  EN: [
    {
      selector: '#portrait',
      attributes: { alt: "Evelyn's animated portrait, with her setup behind." }
    },
    {
      selector: '.container_welcome',
      attributes: {
        innerHTML: `Hi! I'm Evelyn, software developer and eternal self-learner.<br>
        Fan of great organization powered by coffee, how can I help you?`
      }
    },
    { selector: '#actions_info span', attributes: { innerText: "About me" } },
    { selector: '#actions_portfolio span', attributes: { innerText: "Portfolio" } },
    { selector: '#actions_contact span', attributes: { innerText: "Contact me" } },
    { selector: '.form_control[name="fullname"]', attributes: { placeholder: "Your name (optional)" } },
    { selector: '.form_control[name="email"]', attributes: { placeholder: "Your email" } },
    { selector: '.form_control[name="phone"]', attributes: { placeholder: "Your phone number" } },
    { selector: '.form_control[name="message"]', attributes: { placeholder: "Hello! I need..." } },
    { selector: '.form_button', attributes: { innerText: "Send message" } }
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
    { selector: '#actions_info span', attributes: { innerText: "EXPERIENCIA" } },
    { selector: '#actions_portfolio span', attributes: { innerText: "COLECCIÓN" } },
    { selector: '#actions_contact span', attributes: { innerText: "MENSAJES" } },
    { selector: '.form_control[name="fullname"]', attributes: { placeholder: "Tu nombre (opcional)" } },
    { selector: '.form_control[name="email"]', attributes: { placeholder: "Tu correo electrónico" } },
    { selector: '.form_control[name="phone"]', attributes: { placeholder: "Tu número de contacto" } },
    { selector: '.form_control[name="message"]', attributes: { placeholder: "¡Hola! Necesito..." } },
    { selector: '.form_button', attributes: { innerText: "Enviar mensaje" } }
  ]
};
