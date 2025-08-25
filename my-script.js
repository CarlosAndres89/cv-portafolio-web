    // Efecto de aparición suave para las tarjetas de proyectos
    document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
    // Añadir un pequeño retraso para cada tarjeta
    setTimeout(() => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    // Hacerlas visibles con un retraso
    setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
}, 100);
}, index * 100);
});
});
