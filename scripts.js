
    body,table,td,tr,div,p,pre,h1,h2,h3,h4,h5,ul {
      font-weight:100; 
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    }
    body,td,div,p,pre,ul {font-weight:100; font-size: 13px;}

    h0 {font-weight:bold; font-size: 30px; color:#FF0000}
    h1 {font-weight:100; font-size: 18px;}
    h2 {font-weight:100; font-size: 16px;}
    h3 {font-weight:100; font-size: 13px;}
    h4 {font-weight:100; font-size: 11px;}
    h4 {font-weight:100; font-size: 9px;}
    h5 {font-weight:100; font-size: 8px;}
    h6 {font-weight:bold; font-size: 30px; color:#FF0000}

    .small {font-size: 12px;}
    .mini {	font-size: 11px;}
    .minimini {font-size: 10px;}

    a {	font-size: 13px; text-decoration: none; font-weight : 100;}
    a:link {color:#0000FF}
    a:visited {color:#808080}
    a:active {color:#00FF00}
    a:hover{color: #FF0000;}

    body {background: white}



  
    html, body {
      height: 100%;
      overflow: auto;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    h1 {
      padding: 20px 0;
    }
    .content-wrapper {
      max-width: 60vw;  /* You can adjust this value */
      margin: 0 auto;  /* Center the content */
      padding: 0 20px;  /* Give some space on the sides, especially for smaller screens */
    }

    .thumbnail-container {
      display: flex;
      flex-wrap: wrap; 
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .thumbnail-block {
      position: relative;
      margin-top: 30px;
    }

    .thumbnail-block span {
      position: absolute;
      /* top: -20px; */
      bottom: 102%;
      left: 50%;
      width: 105%;
      transform: translateX(-50%);
      color: #000;
    }
    #overlay {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: rgba(0,0,0,0);
      backdrop-filter: blur(0px);
      opacity: 0;
      transition: background-color 0.4s, backdrop-filter 0.4s, opacity 0.4s;
      pointer-events: none; /* Ensures that the overlay does not block interactions when hidden */
    }
    
    body.blur #overlay {
      background-color: rgba(0,0,0,0.6);
      backdrop-filter: blur(5px);
      opacity: 1;
      pointer-events: all; /* Allows the overlay to block interactions when visible */
    }




    .swiper-container {
      transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
      opacity: 0;
      visibility: hidden;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      padding: 0;
      margin: 0;
    }
    
    .swiper-container.open {
      opacity: 1;
      visibility: visible;
    }


    .swiper-wrapper {
      height: 100%;
      padding: 0;
      margin: 0;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      height: 100%;
    }
    .swiper-slide img {
      width: 100%;
      height: 100%;
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
    }
    img {
      max-width: 80vw;
      max-height: 80vh;
    }

    .thumbnail {
      -webkit-tap-highlight-color: transparent;
      height: 20vh;
      width: auto;
      cursor: pointer;
      box-shadow: 4px 4px 2px #888888;
    }

    .swiper-button-next, .swiper-button-prev {
      padding: 40px;
      color: black !important;
    }
    .swiper-pagination {
      line-height: 20px; 
    }

    .swiper-pagination-bullet {
       background: white !important;
       width: 20px; 
       height: 20px;
    }
    .swiper-pagination-bullet {
      background: white !important;
    }
    
    /* Hide the arrows on mobile devices */
    @media (max-width: 1100px) {
      body, table, td, tr, div, p, pre, h1, h3, h4, h5, ul, {
          font-size: 12px;
          font-weight:150
      }
  
      h1 { font-size: 16px; }
      h2 { font-size: 15px; }
      h3 { font-size: 13px; }
      h4 { font-size: 11px; }
      h5 { font-size: 9px;  }
      h6 { font-size: 27px; }
      a {
          font-size: 16px;
          font-weight: 300;
      }
      
      .content-wrapper {
        max-width: 100vw;  /* You can adjust this value */
        margin: 0 auto;  /* Center the content */

      }
      .swiper-button-next, .swiper-button-prev {
        display: none;
      }
      .thumbnail {
        width: 32vw;
        height: auto;

      }

      body {
          margin: 0;
          padding: 0;
      }


      
      H2 {
        font-weight: 200;
        /*font-size: 15px;
        padding-left: 0%; 
        padding-right: 0%;

        margin-left: 0;
        margin-right: 0;        
        */
        text-align: left; 

      }
      .thumbnail-block span {
        position: absolute;
        /* top: -20px; */
        bottom: 102%;
        left: 50%;
        width: 105%;
        transform: translateX(-50%);
        color: #000;
        font-size: 14px; 
        font-weight:190

      }
      /*.swiper-container.open {
        opacity: 1;
        visibility: visible;
        height: 100%; 
        overflow: hidden
      }*/
      .swiper-pagination {
        line-height: 15px; 
      }

      .swiper-pagination-bullet {
         width: 15px; 
         height: 15px;
      }
      .mobile-text-padding {
        padding-left: 0%; 
        padding-right: 0%;
        margin-left: 0;
        margin-right: 0;
        
      }    
      body.blur #overlay {
        background-color: rgba(0,0,0,0.6);
        backdrop-filter: blur(1px);
        opacity: 1;
        pointer-events: all; /* Allows the overlay to block interactions when visible */
      }
    }


  
