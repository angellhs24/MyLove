document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const moviesGrid = document.querySelector('.movies-grid');

    // Pantalla de carga
    window.addEventListener('load', () => {
        setTimeout(() => {
            body.classList.add('loaded');
        }, 1000); // Duración del GIF
    });

    // Cambiar el fondo del encabezado al desplazarse
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Datos de las películas
    const movies = [
        { title: 'Avengers', image: 'img/Avengers.jfif' },
        { title: 'Batman', image: 'img/Batman.jfif' },
        { title: 'Endgame', image: 'img/Endgame.jfif' },
        { title: 'Guason', image: 'img/Guason.jfif' },
        { title: 'Spiderman 1', image: 'img/Spiderman 1.jfif' },
    ];

    // Llenar la cuadrícula de películas
    function populateMovies() {
        for (const movie of movies) {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
            `;
            moviesGrid.appendChild(movieItem);
        }

        // Agregar el código QR
        const qrItem = document.createElement('div');
        qrItem.classList.add('movie-item', 'qr-item');
        qrItem.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.google.com" alt="Código QR">`;
        moviesGrid.appendChild(qrItem);
    }

    populateMovies();
});
