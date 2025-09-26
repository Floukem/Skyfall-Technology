const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
    const menu = drop.querySelector('.dropdown-menu');

    drop.addEventListener('mouseenter', () => {
        let desiredHeight = menu.scrollHeight;       // altura real do conteúdo
        if (desiredHeight < 95) desiredHeight = 95; // altura mínima
        menu.style.maxHeight = desiredHeight + 'px';
        menu.style.opacity = '1';
        drop.classList.add('open'); // seta vira
    });

    drop.addEventListener('mouseleave', () => {
        menu.style.maxHeight = '0';
        menu.style.opacity = '0';
        drop.classList.remove('open'); // seta volta
    });
});
