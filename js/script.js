'use strict'
document.addEventListener('DOMContentLoaded', () => {
   // header ------------------------------------------------------------------------------------------------------------------------
   const header = document.querySelector('.header');

   window.addEventListener('scroll', function () {

      if (window.pageYOffset >= 5) {
         header.classList.add('_scroll');
      } else {
         if (header.classList.contains('_scroll')) {
            header.classList.remove('_scroll');
            console.log(window.pageXOffset);
         }
      }
   })

   const burgerBtn = document.querySelector('.burger-btn');
   burgerBtn.addEventListener('click', function () {
      header.classList.toggle('_active-menu');
      document.querySelector('body').classList.toggle('_lock');
   })

   //bunner -----------------------------------------------------------------------------------------------------------------------------
   let unSubmit = function (event) {
      event.preventDefault();
   }

   const bunnerSelects = document.querySelectorAll('.bunner__form select');
   for (let i = 0; i < bunnerSelects.length; i++) {
      const group = bunnerSelects[i].closest('.form__group');

      bunnerSelects[i].addEventListener('focus', function () {
         group.classList.add('_is-open');
      });

      bunnerSelects[i].addEventListener('change', function () {
         group.classList.remove('_is-open');
         bunnerSelects[i].blur();
      });

      bunnerSelects[i].addEventListener('blur', function () {
         group.classList.remove('_is-open');
      });
   }

   const fakeDate = document.querySelector('._fake-date');
   const doubleDateBlock = document.querySelector('.form__double-date');

   fakeDate.addEventListener('click', () => { doubleDateBlock.classList.toggle('date-on'); });


   const doubleDateInputs = doubleDateBlock.querySelectorAll('.double-date__input');
   const today = new Date();
   const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
   const writeDate = (date) => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
   };
   doubleDateInputs[0].min = writeDate(today);
   doubleDateInputs[0].max = writeDate(maxDate);
   doubleDateInputs[1].min = writeDate(today);
   doubleDateInputs[1].max = writeDate(maxDate);

   let doubleDateBtn = doubleDateBlock.querySelector('button');
   doubleDateBtn.addEventListener('click', function () {
      if (doubleDateInputs[0].value != '' && doubleDateInputs[1].value != ''
         && doubleDateInputs[0].value >= writeDate(today) && doubleDateInputs[0].value <= writeDate(maxDate)
         && doubleDateInputs[1].value >= writeDate(today) && doubleDateInputs[1].value <= writeDate(maxDate)) {
         let fakeDate = document.getElementById('fake-date');
         if (doubleDateInputs[0].value > doubleDateInputs[1].value) {
            fakeDate.value = `${doubleDateInputs[1].value} - ${doubleDateInputs[0].value}`
         } else {
            fakeDate.value = `${doubleDateInputs[0].value} - ${doubleDateInputs[1].value}`
         }
         doubleDateBlock.classList.remove('date-on');
         console.log('true');
      } else {
         alert('неправильное значение!');
         doubleDateInputs[0].value = '';
         doubleDateInputs[1].value = '';
      }
   });

   // Gallary ----------------------------------------------


   const swiper = new Swiper('.gallary__swiper', {
      loop: true,

      zoom: {
         maxRatio: 3,
         minRatio: 1,
      },

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      keyboard: {
         enabled: true,
         onlyInViewport: true,
      },
   });

   const sliderClose = document.querySelector('.gallary__slider-closer');
   const galarySlider = document.querySelector('.gallary__slider');

   sliderClose.addEventListener('click', function () {
      galarySlider.classList.remove('_open');
      document.querySelector('body').classList.remove('_locked');
   });

   const slideLinks = document.querySelectorAll('.gallary__img');

   slideLinks.forEach(link => {
      link.addEventListener('click', (e) => {
         const targetIndex = parseInt(link.getAttribute('data-slide-index'), 10);
         swiper.slideToLoop(targetIndex, 0);
         galarySlider.classList.add('_open');
         document.querySelector('body').classList.add('_locked');
      });
   });

   // footer ---------------------------------------------------------

   const accordionBtn = document.querySelectorAll('.accordion__header');

   accordionBtn.forEach(item => {
      item.addEventListener('click', (event) => {
         item.closest('.accordion').classList.toggle('_open');
      });
   });

   // window ------------------------------------------------------------

   const consultingBtns = document.querySelectorAll('._consulting');
   consultingBtns.forEach(item => {
      item.addEventListener('click', () => {
         console.log(item);
      })
   })




});