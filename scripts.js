var swiper = new Swiper('#swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  keyboard: { enabled: true, onlyInViewport: true }, 
  mousewheel: { invert: false },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (window.innerWidth <= 1100) {
  let metaViewport = document.querySelector('meta[name=viewport]');
  metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
}
// Define a variable to store the clicked thumbnail's dimensions
let thumbnailRect;

function openGallery(event, gallery, startSlide) {
  event.preventDefault();

  // Get the clicked thumbnail and its dimensions
  const clickedThumbnail = event.currentTarget;
  thumbnailRect = clickedThumbnail.getBoundingClientRect();

  // Get the swiper container and set its initial size and position
  const swiperContainer = document.getElementById('swiper-container');
  swiperContainer.style.width = `${thumbnailRect.width}px`;
  swiperContainer.style.height = `${thumbnailRect.height}px`;
  swiperContainer.style.transform = `translate(${thumbnailRect.left}px, ${thumbnailRect.top}px)`;

  // Add the 'open' class to make the gallery visible
  swiperContainer.classList.add('open');

  // Initialize or update the swiper with the given gallery and start slide
  if (swiper) {
    swiper.update();
    swiper.slideTo(startSlide, 0, false);
  } else {
    swiper = new Swiper('.swiper-container', {
      // Swiper configuration here
      initialSlide: startSlide,
    });
  }

  // Optional: add a delay before animating to the full screen
  setTimeout(() => {
    swiperContainer.style.width = '100%';
    swiperContainer.style.height = '100%';
    swiperContainer.style.transform = 'translate(0, 0)';
  }, 0);
}

function closeGallery() {
  const swiperContainer = document.getElementById('swiper-container');

  // Define a function to be called when the transition ends
  function onTransitionEnd() {
    // Reset the swiper container's size and position
    swiperContainer.style.width = '';
    swiperContainer.style.height = '';
    swiperContainer.style.transform = '';

    // Remove the 'open' class to hide the gallery
    swiperContainer.classList.remove('open');

    // Other code to clean up after closing the gallery

    // Remove the transition end listener
    swiperContainer.removeEventListener('transitionend', onTransitionEnd);
  }

  // Set a transition for the transform property
  swiperContainer.style.transition = 'transform 0.4s ease-in-out';

  // Animate back to the thumbnail's size and position
  swiperContainer.style.width = `${thumbnailRect.width}px`;
  swiperContainer.style.height = `${thumbnailRect.height}px`;
  swiperContainer.style.transform = `translate(${thumbnailRect.left}px, ${thumbnailRect.top}px)`;

  // Add a transition end listener
  swiperContainer.addEventListener('transitionend', onTransitionEnd);
}


