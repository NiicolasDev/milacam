

export const moveLeftCarousel = () => {
    const carousel = document.querySelector('#productsCarousel');
    carousel.classList.add('light-transition');
    carousel.style.left = '-200px';
    carousel.classList.add('light-transition');
}