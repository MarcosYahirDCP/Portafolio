// Obtener la altura del navbar
const navbarHeight = document.querySelector('.navbar').offsetHeight;

// Funcionalidad de desplazamiento suave para los enlaces del menú
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir comportamiento por defecto del enlace
    const targetId = this.getAttribute('href'); // Obtener la ID del destino
    const targetElement = document.querySelector(targetId); // Seleccionar el destino

    // Desplazamiento con ajuste para la altura del navbar
    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight, // Restar la altura del navbar
      behavior: 'smooth' // Desplazamiento suave
    });
  });
});

// Funcionalidad de desplazamiento suave para el botón de inicio
document.querySelector('.home-button').addEventListener('click', () => {
  // Desplazamiento hacia la sección 1, ajustando por la altura del navbar
  const section1 = document.querySelector('#section1');
  window.scrollTo({
    top: section1.offsetTop - navbarHeight, // Desplazar a la sección 1, ajustado por la altura del navbar
    behavior: 'smooth', // Desplazamiento suave
  });
});

const toggleCVButton = document.getElementById("toggleCVButton");
const sectionPDF = document.getElementById("sectionPDF");
const section1 = document.getElementById("section1");

// Inicialmente ocultamos la sección PDF
sectionPDF.style.display = "none";

toggleCVButton.addEventListener("click", () => {
    if (sectionPDF.style.display === "none") {
        // Mostrar la sección PDF
        sectionPDF.style.display = "block";
        toggleCVButton.textContent = "Ocultar C.V.";
        
        // Pequeño timeout para asegurar que la sección esté visible antes de hacer scroll
        setTimeout(() => {
            sectionPDF.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    } else {
        // Ocultar la sección PDF
        sectionPDF.style.display = "none";
        toggleCVButton.textContent = "Ver C.V. en línea";
        
        section1.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    }
});

// const slides = document.querySelector('.slides');
// const totalSlides = document.querySelectorAll('.slide').length;
// let currentIndex = 0;

// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlide();
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateSlide();
// });

// function updateSlide() {
//     const offset = -currentIndex * 100;
//     slides.style.transform = `translateX(${offset}%)`;
// }
// Inicializar todos los sliders en la página
function initializeSliders() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach((card, cardIndex) => {
      const slides = card.querySelector('.slides');
      const totalSlides = card.querySelectorAll('.slide').length;
      let currentIndex = 0;

      // Agregar listeners a los botones de navegación
      const nextButton = card.querySelector('.next');
      const prevButton = card.querySelector('.prev');

      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlide(slides, currentIndex);
      });

      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSlide(slides, currentIndex);
      });
  });
}

// Función para actualizar la posición del slider
function updateSlide(slides, index) {
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Inicializar los sliders cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initializeSliders);


// Función para abrir la imagen en pantalla completa (lightbox)
function openFullScreen(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = imgElement.src;
  lightbox.style.display = 'flex';
}

// Función para cerrar el lightbox
function closeFullScreen() {
  document.getElementById('lightbox').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Cerrar el menú al hacer click en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });

  // Cerrar al hacer click fuera del menú
  document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      }
  });

  // Manejar el redimensionamiento de la ventana
  let resizeTimeout;
  window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          if (window.innerWidth > 768) {
              hamburger.classList.remove('active');
              navMenu.classList.remove('active');
          }
      }, 250);
  });
});
function handleSubmit(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;
  
  // Aquí puedes implementar la lógica de envío del correo
  console.log('Enviando correo:', { nombre, correo, mensaje });
  alert('¡Mensaje enviado correctamente!');
  event.target.reset();
}

function openWhatsApp() {
  const phoneNumber = "5212791164035"; // Reemplaza con tu número en formato internacional
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
}
function sendEmail() {
  const email = "yahirdcp1306@gmail.com"; // Reemplaza con tu correo
  const subject = "Contacto Laboral"; // Cambia el asunto
  const body = "Sustituya esto con su mensaje"; // Cambia el contenido del mensaje
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink; // Abre el cliente de correo predeterminado
}


$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});
//------------------------------------//

