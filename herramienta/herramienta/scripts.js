// Selecciona todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.nav-list a');

// Agrega un evento a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado

        // Obtén el ID de la sección correspondiente
        const sectionId = link.getAttribute('data-section');

        // Oculta todas las secciones
        document.querySelectorAll('.section-content').forEach(section => {
            section.style.display = 'none';
        });

        // Muestra la sección seleccionada
        document.getElementById(sectionId).style.display = 'block';
    });
});
