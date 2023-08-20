

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
    
      // Set the initial position and size of the swiper container to match the thumbnail
      swiperContainer.style.position = 'fixed';
      swiperContainer.style.top = `${thumbnailRect.top}px`;
      swiperContainer.style.left = `${thumbnailRect.left}px`;
      swiperContainer.style.width = `${thumbnailRect.width}px`;
      swiperContainer.style.height = `${thumbnailRect.height}px`;
    
      // Show the swiper container without animation
      swiperContainer.style.transition = 'none';
      swiperContainer.classList.add('open');
    
      // Trigger a reflow to apply the initial transformation before animating
      void swiperContainer.offsetWidth;
    
      // Restore the transition and animate to the normal position and size
      swiperContainer.style.transition = 'all 0.4s ease-in-out';
      swiperContainer.style.top = '0';
      swiperContainer.style.left = '0';
      swiperContainer.style.width = '100%';
      swiperContainer.style.height = '100%';
    
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
    
      // Function to handle the transition end and cleanup
      function onTransitionEnd() {
        swiperContainer.classList.remove('open');
        document.body.classList.remove('blur');
        document.body.style.overflow = '';
        document.body.style.position = '';
    
        // Reset styles
        swiperContainer.style.transition = '';
        swiperContainer.style.top = '';
        swiperContainer.style.left = '';
        swiperContainer.style.width = '';
        swiperContainer.style.height = '';
    
        swiperContainer.removeEventListener('transitionend', onTransitionEnd);
      }
    
      // Set the final thumbnail's dimensions and position
      swiperContainer.style.top = `${thumbnailRect.top}px`;
      swiperContainer.style.left = `${thumbnailRect.left}px`;
      swiperContainer.style.width = `${thumbnailRect.width}px`;
      swiperContainer.style.height = `${thumbnailRect.height}px`;
    
      // Add a transition end event listener
      swiperContainer.addEventListener('transitionend', onTransitionEnd);
    
      // Start the animation
      swiperContainer.style.transition = 'all 0.4s ease-in-out';
    }
    
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeGallery();
      }
    });






  
