var swiper = new Swiper("#swiper-container", {
    // swiper ist das wenn die bilder groß werden und man wischen kann, hier verschiedene optionen
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false, // loops (das wenn man am letzten foto ist und nach rechts wischt, man wieder beim ersten bild ist) funktionieren leider nicht gut, dann öffnet es nicht immer das bild was man angeklickt hat
    centeredSlides: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: { invert: false },
    pagination: {
        // die Punkte unter dem bild
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
if (window.innerWidth <= 1100) {
    // damit man am handy nicht zoomen kann
    let metaViewport = document.querySelector("meta[name=viewport]");
    metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
}

var thumbnailRect; // merkt sich position vom thumbnail für die Schließungsanimation

function openGallery(event, gallery, startSlide) {
    event.preventDefault();

    const clickedThumbnail = event.currentTarget;
    thumbnailRect = clickedThumbnail.getBoundingClientRect();

    const swiperContainer = document.getElementById("swiper-container");

    // anfangsposition und größe vom thumbnail
    swiperContainer.style.position = "fixed";
    swiperContainer.style.top = `${thumbnailRect.top}px`;
    swiperContainer.style.left = `${thumbnailRect.left}px`;
    swiperContainer.style.width = `${thumbnailRect.width}px`;
    swiperContainer.style.height = `${thumbnailRect.height}px`;

    //zuerst swiper ohne animation zeigen
    swiperContainer.style.transition = "none";
    swiperContainer.classList.add("open");

    void swiperContainer.offsetWidth;

    swiperContainer.style.transition = "all 0.4s ease-in-out";
    swiperContainer.style.top = "0";
    swiperContainer.style.left = "0";
    swiperContainer.style.width = "100%";
    swiperContainer.style.height = "100%";

    document.body.classList.add("blur");
    document.body.style.overflow = "hidden";

    if (window.innerWidth <= 1100) {
        document.body.style.position = "fixed"; // bei safari am handy kann man den hintergrund noch scrollen, hier ein workaround damit man nur nach links und rechts wischen kann
    }

    swiper.removeAllSlides();
    // fügt alle bilder hinzu
    for (var i = 0; i < gallery.length; i++) {
        var slide = document.createElement("div");
        slide.className = "swiper-slide";
        var img = document.createElement("img");
        img.src = gallery[i];
        slide.appendChild(img);
        swiper.appendSlide(slide);
    }

    if (startSlide) {
        swiper.slideTo(startSlide, 0); // wenn kein spezifisches bild zum öffnen angegeben ist, öffnet es das erste
    }
}

function closeGallery() {
    const swiperContainer = document.getElementById("swiper-container");

    function onTransitionEnd() {
        // es wird wieder alles css zurückgesetzt
        swiperContainer.classList.remove("open");
        document.body.classList.remove("blur");
        document.body.style.overflow = "";
        document.body.style.position = "";

        swiperContainer.style.transition = "";
        swiperContainer.style.top = "";
        swiperContainer.style.left = "";
        swiperContainer.style.width = "";
        swiperContainer.style.height = "";

        swiperContainer.removeEventListener("transitionend", onTransitionEnd);
    }

    // swiper verkleinert sich zu originaler thumbnail position
    swiperContainer.style.top = `${thumbnailRect.top}px`;
    swiperContainer.style.left = `${thumbnailRect.left}px`;
    swiperContainer.style.width = `${thumbnailRect.width}px`;
    swiperContainer.style.height = `${thumbnailRect.height}px`;

    // warten bis verkleinerung fertig
    swiperContainer.addEventListener("transitionend", onTransitionEnd);

    // verschwommenes ausmachen animation
    swiperContainer.style.transition = "all 0.4s ease-in-out";
}

document.addEventListener("keydown", function (event) {
    //escape zum schließen möglich
    if (event.key === "Escape") {
        closeGallery();
    }
});
