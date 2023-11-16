// script.js

// Cambia el color de fondo de la sección de papers al hacer clic en el botón
function cambiarColorFondo() {
    var papersSection = document.getElementById("papers");
    papersSection.style.backgroundColor = getRandomColor();
}

// Genera un color hexadecimal aleatorio
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Agrega efecto de desplazamiento suave a los enlaces del menú
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            scrollToTarget(targetElement);
        });
    }
});

// Desplazamiento suave hacia el elemento objetivo
function scrollToTarget(targetElement) {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: targetElement.offsetTop - 20 // Ajusta según sea necesario
    });
}

//En este script, la función cambiarColorFondo cambia el color de fondo de la sección de papers al hacer clic en un botón. La función getRandomColor genera un color hexadecimal aleatorio.
//Además, hay un código que agrega un efecto de desplazamiento suave a los enlaces del menú. Al hacer clic en un enlace, el documento se desplazará suavemente hasta la sección correspondiente.

// Función para alternar la visibilidad de la lista de cursos
function toggleCursos() {
    var cursosList = document.getElementById("cursosList");
    cursosList.style.display = (cursosList.style.display === "none") ? "block" : "none";
}
//Cuando haces clic en el título, se ejecuta la función toggleCursos(), que cambia la visibilidad de la lista de cursos entre "block" y "none".
