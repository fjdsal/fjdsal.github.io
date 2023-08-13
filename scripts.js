
    var swiper = new Swiper('#swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      keyboard: { enabled: true, onlyInViewport: true }, // add this line      
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
        
var thumbnailRect;

function openGallery(event, gallery, startSlide) {
  event.preventDefault();

  const clickedThumbnail = event.currentTarget;
  thumbnailRect = clickedThumbnail.getBoundingClientRect();

  const swiperContainer = document.getElementById('swiper-container');

  const scaleX = thumbnailRect.width / window.innerWidth;
  const scaleY = thumbnailRect.height / window.innerHeight;

  swiperContainer.style.transform = `translate(${thumbnailRect.left}px, ${thumbnailRect.top}px) scale(${scaleX}, ${scaleY})`;
  swiperContainer.style.transformOrigin = 'top left';

  swiperContainer.style.transition = 'none';
  swiperContainer.classList.add('open');

  void swiperContainer.offsetWidth;

  swiperContainer.style.transition = 'transform 0.4s ease-in-out';
  swiperContainer.style.transform = 'translate(0, 0) scale(1, 1)';

  document.body.classList.add('blur');
  document.body.style.overflow = 'hidden';

  if (window.innerWidth <= 1100) {
    document.body.style.position = 'fixed';
  }

  swiper.removeAllSlides();

  for (var i = 0; i < gallery.length; i++) {
    var slide = document.createElement('div');
    slide.className = 'swiper-slide';
    var img = document.createElement('img');
    img.src = gallery[i];
    slide.appendChild(img);
    swiper.appendSlide(slide);
  }

  if (startSlide) {
    swiper.slideTo(startSlide, 0);
  }
}

function closeGallery() {
  const swiperContainer = document.getElementById('swiper-container');

  const scaleX = thumbnailRect.width / window.innerWidth;
  const scaleY = thumbnailRect.height / window.innerHeight;

  function onTransitionEnd() {
    swiperContainer.classList.remove('open');
    document.body.classList.remove('blur');
    document.body.style.overflow = '';
    document.body.style.position = '';

    swiperContainer.style.transition = '';
    swiperContainer.style.transform = '';
    swiperContainer.style.transformOrigin = '';

    swiperContainer.removeEventListener('transitionend', onTransitionEnd);
  }

  swiperContainer.addEventListener('transitionend', onTransitionEnd);
  swiperContainer.style.transition = 'transform 0.4s ease-in-out';
  swiperContainer.style.transform = `translate(${thumbnailRect.left}px, ${thumbnailRect.top}px) scale(${scaleX}, ${scaleY})`;
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeGallery();
  }
});

