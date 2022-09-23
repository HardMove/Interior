const accordions = document.querySelectorAll('.accordion-item');
accordions.forEach(el => {
   el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const content = self.querySelector('.accordion-item__content');
      self.classList.toggle('open');

      if (self.classList.contains('open')) {
         content.style.maxHeight = content.scrollHeight + 'px';
         content.style.opacity = 1;
      }
      else {
         content.style.maxHeight = null;
      }
   });
});
