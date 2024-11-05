document.querySelectorAll('.social-icon').forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        console.log('Icon clicked'); // Verifica que el evento de clic está funcionando
        e.preventDefault(); // Prevenir la acción predeterminada de ir al enlace

        // Crear o actualizar el mensaje de agradecimiento
        let message = document.getElementById('thank-you-message');
        if (!message) {
            console.log('Creating message element');
            message = document.createElement('div');
            message.id = 'thank-you-message';
            message.style.marginTop = '20px';
            message.style.color = '#333';
            message.style.fontSize = '16px';
            document.querySelector('.social-section').appendChild(message);
        }
        message.textContent = '¡Gracias por seguirnos en nuestras redes sociales!';
        console.log('Message updated');

        // Esperar unos segundos antes de redirigir
        setTimeout(() => {
            console.log('Redirecting to', icon.href);
            window.open(icon.href, '_blank');
        }, 1500);
    });
});
///////////////////////////////////////////////////////

/* let isMapVisible = true;
const map = document.querySelector('.gmap');
const image = document.getElementById('image');

setInterval(() => {
    if (isMapVisible) {
        map.style.opacity = '0';
        setTimeout(() => {
            map.style.display = 'none';
            image.style.display = 'block';
            setTimeout(() => {
                image.style.opacity = '1';
            }, 50);
        }, 500);
    } else {
        image.style.opacity = '0';
        setTimeout(() => {
            image.style.display = 'none';
            map.style.display = 'block';
            setTimeout(() => {
                map.style.opacity = '1';
            }, 50);
        }, 500);
    }
    isMapVisible = !isMapVisible;
}, 10000); */
// Cambiado a 10 segundos img saltillo
//header escritorio
let lastScrollTop = 0;
const header = document.querySelector('header');

function hideHeader() {
    header.classList.add('hidden');
}

function showHeader() {
    header.classList.remove('hidden');
}

// Ocultar el header después de 3 segundos
setTimeout(hideHeader, 4000);

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        // Lógica para pantallas con un ancho mayor a 991px
        if (scrollTop > lastScrollTop) {
            // Desplazándose hacia abajo
            hideHeader();
        } else {
            // Desplazándose hacia arriba
            showHeader();
        }
    } else {
        // Asegurarse de que el header no se oculte en resoluciones menores o iguales a 991px
        showHeader();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos en scrollTop
});


//lateral 
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.navbar');
    const menuCheckbox = document.getElementById('menu');
    const body = document.body;

    // Función para ocultar la barra lateral
    function hideSidebar() {
        sidebar.style.transform = 'translateX(100%)';
        sidebar.style.opacity = '0';
        menuCheckbox.checked = false; // Desmarca el checkbox del menú
    }

    // Mostrar la barra lateral cuando se hace clic en el icono del menú
    menuCheckbox.addEventListener('change', function () {
        if (menuCheckbox.checked) {
            sidebar.style.transform = 'translateX(0)';
            sidebar.style.opacity = '1';
        } else {
            hideSidebar();
        }
    });

    // Ocultar la barra lateral al hacer clic fuera de ella
    body.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuCheckbox.contains(event.target) && window.innerWidth <= 767) {
            hideSidebar();
        }
    });

    // Ocultar la barra lateral al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 767) {
            hideSidebar();
        }
    });
});


///////////////////////////////////////////

// Array de imágenes
const images = [
    "imgs/saltillo1.png",
    "imgs/saltillo2.jpg",
    "imgs/saltillo3.jpg"
];

const slides = document.querySelectorAll('.img-slide');
let currentIndex = 0;

function initSlides() {
    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url(${images[index]})`;
        if (index === 0) slide.classList.add('active');
    });
}

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

initSlides();
setInterval(nextSlide, 5000);


///carrusel de imgs 

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    // Opcional: Agregar desplazamiento automático
    setInterval(() => showSlide(currentIndex + 1), 5000);
});



