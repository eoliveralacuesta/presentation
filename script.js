//Me aseguro de que se cargaron los elementos del DOM, para poder obtener los elementos sin fallo
//Declarando las variables globales antes de la escucha del evento
var portraitElement, LANGUAGE;
document.addEventListener('DOMContentLoaded', function() {
	//Primero necesito cargar las imágenes para poder generar las animaciones necesarias
	//Se realiza a través de un contador simple y con visibilidad global
	var loadedImages = 0;

	//Esta clase permite que haya una cortina hasta que se cargue lo requerido
	document.body.classList.add('loading');

	//En esta función se verifican las imágenes para poder efectivamente iniciar la animación de la página
	const onLoadedImage = () => {
		if (loadedImages == 2)
		{
			//Remuevo la clase de cortina, y agrego una nueva que es la que da el fondo al body
			document.body.classList.remove('loading');
			document.body.classList.add('loaded');
			//Comienzo la carga de la página (textos y animaciones)
			let lang = navigator.language.toLowerCase().startsWith('es') ? 'ES' : 'EN';
			showLanguage(lang);
		}
	}

	//Cargo el SVG del body para luego usarlo en los estilos del mismo
	const bgImage = new Image();
	bgImage.src = 'img/background.svg';

	bgImage.onload = () => {
		//Acá ya se cargó la imagen de fondo, así que marco una imagen cargada más
		loadedImages++;
		onLoadedImage();
	}

	//Mismo funcionamiento que con el fondo, pero por asincronía uno u otro pueden terminar primero 
	//Ahí la cuestión de usar un contador simple, también se pueden usar 2 flags; en este caso como es una web simple no hace gran diferencia
	portraitElement = document.getElementById('portrait');
	
	let completedPortrait = () => {
		//Acá ya se cargó la imagen del retrato, así que marco una imagen cargada más
		loadedImages++;
		//Le agrego el estilo para que sea visible
		portraitElement.style.display = 'block';
		
		onLoadedImage();
	}
	
	if(portraitElement.complete)
		completedPortrait();
	else {
		portraitElement.onload = () => {
			completedPortrait();
		};
	}
});

function showLanguage(recommended) {
	if(!recommended)
		recommended = LANGUAGE;
	
	let el = document.querySelector('.sections-wrapper');
	el.classList.add('sections-wrapper--lang');
	
	//Recomiendo el idioma del navegador dándole una animación por 3 segundos
	el = document.getElementById('language--' + recommended); 
	if (el)
	{
		el.classList.add('language--recommended');
		
		setTimeout(() => {
			el.classList.remove('language--recommended');
		}, 3000);
	}
}

function setLanguage(language){
	let el = document.querySelector('.sections-wrapper');
	el.classList.remove('sections-wrapper--lang');
	
	//Si no cambió el lenguaje no tiene sentido realizar el reemplazo
	if(LANGUAGE != language) { 
		//Tomo los textos definidos en el archivo constants.js, referenciado antes de este archivo para ser válida la lectura de esta variable
		let values = LANGUAGES[language];
		
		//Si no encuentra algo válido, por las dudas tomo el lenguaje inglés que sí o sí va a estar definido (este caso no debería darse, pero es una validación de contingencia, que nunca está de más)
		if (!values) 
			values = LANGUAGES.EN;
		
		//Reemplazo los valores en el HTML
		values.forEach(item => {
			//Cada item va a tener un selector de elemento para obtenerlo
			const el = document.querySelector(item.selector);
			
			//Validación por si no encuentra el elemento, que realmente no debería ocurrir, pero nuevamente es una validación de contingencia :)
			if (el) {
				Object.entries(item.attributes).forEach(([attr, value]) => {
					if (attr === 'innerText') 
						el.innerText = value;
					else if (attr === 'innerHTML') 
						el.innerHTML = value;
					else 
						el.setAttribute(attr, value);
			  });
			}
		});
	}

	//Acá comienzo la animación ya con los textos cargados, vuelvo a la introducción para que tenga sentido todo el flujo de animación
	goBack();
}

//Recibe un elemento, la cadena a animar y la velocidad (en ms), callback opcional para avisar la finalización de la animación
function animateAsTypewriter(element, html, speed = 30, callback = null) {
    element.innerHTML = "";
    let i = 0;
    let tag = '';
    let writingTag = false;

    function typeChar() {
        if (i < html.length) {
            let char = html[i];
            if (char === '<') writingTag = true;
            if (writingTag) tag += char;
            else element.innerHTML += char;

            if (char === '>') {
                writingTag = false;
                element.innerHTML += tag;
                tag = '';
            }
            i++;
            setTimeout(typeChar, writingTag ? 0 : speed);
        } else if (typeof callback === 'function')
            callback();
    }
	
    typeChar();
}

function goBack(){
	//Agrando el retrato para que se vuelva a animar el texto de introducción
	portraitElement.classList.remove('portrait--small');
	
	//Acá debería tener marcado el contenedor (.container) con una clase --open y de ahí para abajo ya solo trabajar en display block o none desde css para no calentarme haciendo elemento por elemento; el único elemento que sí voy a dejar por js es el de goback
	let wrapperEl = document.querySelector('.sections-wrapper');
	wrapperEl.classList.remove('sections-wrapper--open');
	
	//Si hay una sección existente, entonces le removemos la clase activa para que deje de mostrarse
	let actualSectionElement = document.querySelector('.container_section.container_section--active');
	if (actualSectionElement)
		actualSectionElement.classList.remove('container_section--active');
	
	animateIntro();
}

function animateIntro() {
	//Selecciona el elemento de bienvenida (o introducción) y su contenido
	let el = document.querySelector('.container_welcome');
    let content = el.innerHTML;

	//Esconde todo para realizar la animación
	let wrapperEl = document.querySelector('.sections-wrapper');
	wrapperEl.classList.add('sections-wrapper--animation');

    //Llamamos a la función que escribe caracter a caracter
    animateAsTypewriter(el, content, 18, () => {
        //Ahora se deben mostrar los botones de acción para iniciar la interacción del usuario con la web 
		wrapperEl.classList.remove('sections-wrapper--animation');
		
		//También achicamos el retrato para que ya no sea tan principal
		portraitElement.classList.add('portrait--small');
    });
}

//Se abre una sección, marcando el wrapper con una clase para poder esconder y mostrar datos según la necesidad
function openSection(elementId) {
	let wrapperEl = document.querySelector('.sections-wrapper');
	wrapperEl.classList.add('sections-wrapper--open');
	
	//Ahora le ponemos la clase activa a la sección para mostrarla
	let el = document.getElementById(elementId);
	if (el)
		el.addClass('container_section--active');
}


function onSubmit(form){
	//Revisar los campos, obligatorio es solo el mensaje y email o teléfono (si hay uno de los dos ya es válido)
	
}