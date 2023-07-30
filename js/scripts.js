/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// JavaScript para redireccionar al usuario a la página correspondiente al idioma seleccionado
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('?')[0]; // Remover parámetros de consulta, si los hay

    // Redireccionar a la página correspondiente al idioma seleccionado
    window.location.href = `${baseUrl}?lang=${selectedLanguage}`;
});


function handleClick() {
    open()
}

// Obtener el botón por su id
const miBoton = document.getElementById('miBoton');

// Asignar el evento onclick al botón y asociarlo con la función handleClick
miBoton.onclick = handleClick;

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.getElementById('showPasswordButton');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.innerText = 'Ocultar contraseña';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.innerText = 'Mostrar contraseña';
    }
}
function mostrarAlertita() {
    document.getElementById("ventanaAlerta").style.display = "block";
}

function cerrarAlertita() {
    document.getElementById("ventanaAlerta").style.display = "none";
}