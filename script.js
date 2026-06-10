document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const video = document.getElementById('hero-video');
    const videoPoster = document.querySelector('.video-poster');

    // --- Loading Screen --- //
    window.addEventListener('load', () => {
        setTimeout(() => {
            body.classList.add('loaded');
        }, 1000); // GIF duration
    });

    // --- Video Behavior --- //
    if(video) {
        video.addEventListener('ended', () => {
            video.style.opacity = 0;
            if(videoPoster) {
                videoPoster.classList.add('visible');
            }
        });
    }

    // Reset video when scrolling to the top
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            if (video && video.paused) {
                if(videoPoster) {
                    videoPoster.classList.remove('visible');
                }
                video.style.opacity = 1;
                video.play();
            }
        }
    });
});
