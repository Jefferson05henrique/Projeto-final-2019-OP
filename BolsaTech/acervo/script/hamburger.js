document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');

    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', function () {
        var expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('nav-open');
    });

    // Fecha o menu ao clicar em um link (bom para mobile)
    var navLinks = document.querySelectorAll('.menu nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (menu.classList.contains('nav-open')) {
                menu.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
