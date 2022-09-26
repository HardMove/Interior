const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: "true",
      draggable: "true",
   },

   slidesPerView: 3,
   spaceBetween: 70,


   breakpoints: {
      0: {
         slidesPerView: 1,
      },

      768: {
         slidesPerView: 2,
         spaceBetween: 50,
      },

      1024: {
         slidesPerView: 3,
      },
   }
});