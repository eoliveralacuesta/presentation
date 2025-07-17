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
    { selector: '#about_me', attributes: { innerText: "About me" } },
    { selector: '#portfolio', attributes: { innerText: "Portfolio" } },
    { selector: '#contact', attributes: { innerText: "Contact me" } },
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
        innerHTML: `¡Hola! Soy Evelyn, desarrolladora de software y eterna autodidacta.<br>
        Fanática de la buena organización mediante café, ¿cómo puedo ayudarte?`
      }
    },
    { selector: '#about_me', attributes: { innerText: "Conoceme" } },
    { selector: '#portfolio', attributes: { innerText: "Portafolio" } },
    { selector: '#contact', attributes: { innerText: "Escribime" } },
    { selector: '.form_control[name="fullname"]', attributes: { placeholder: "Tu nombre (opcional)" } },
    { selector: '.form_control[name="email"]', attributes: { placeholder: "Tu correo electrónico" } },
    { selector: '.form_control[name="phone"]', attributes: { placeholder: "Tu número de contacto" } },
    { selector: '.form_control[name="message"]', attributes: { placeholder: "¡Hola! Necesito..." } },
    { selector: '.form_button', attributes: { innerText: "Enviar mensaje" } }
  ]
};
