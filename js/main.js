// 
// ================================================== 
let burger = document.querySelector('.burger');
let mobildkaMenu = document.querySelector('.mobilka');
let liHeader = document.querySelectorAll('.header__menu-item');
let vrHeader = document.querySelector('.header__wrap-fon');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		// liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');
  
  if (vrHeader) {
	vrHeader.classList.toggle('header__wrap-clous');
  }


  if (mobildkaMenu.style.display === "block") {
    mobildkaMenu.style.display = "none";
  } else {
    mobildkaMenu.style.display = "block";
  }
}

// ===============================================

// slider
$('.review__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

// ======== akkardion-2 ========
class ItcAccordion2 {
	constructor(target, config) {
	  this._el = typeof target === 'string' ? document.querySelector(target) : target;
	  const defaultConfig = {
		 alwaysOpen: false
	  };
	  this._config = Object.assign(defaultConfig, config);
	  this.addEventListener();
	}
	addEventListener() {
	  this._el.addEventListener('click', (e) => {
		 const elHeader = e.target.closest('.accordion-2__header');
		 if (!elHeader) {
			return;
		 }
		 if (!this._config.alwaysOpen) {
			const elOpenItem = this._el.querySelector('.accordion-2__item_show');
			if (elOpenItem) {
			  elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion-2__item_show') : null;
			}
		 }
		 elHeader.parentElement.classList.toggle('accordion-2__item_show');
	  });
	}
 }

 new ItcAccordion2('#accordion2');
// ======== akkardion2 / ========


// на втором херо секшен прячет блюр с ним не работает кнопка

let storyTxt = document.querySelectorAll('.story__text');

let story = document.querySelector('.story__btn');
let storyTextClous = document.querySelector('.story__text-clous');

	
for (let i = 0; i < storyTxt.length; i++) {
	story.addEventListener('click', () => {
		storyTxt[i].classList.toggle('story__text-show');
		story.style.display = 'none';
	});
}

// вращающие карточки ============================================
const muzBtn = document.querySelectorAll('.muzsty__face-btn');
const muzBtnClose = document.querySelectorAll('.muzsty__back-btn');
const muzFace = document.querySelectorAll('.muzsty__face');
const muzBack = document.querySelectorAll('.muzsty__back');

for (let i = 0; i < muzFace.length; i++) {
	muzBtn[i].addEventListener('click', () => {
		muzFace[i].style.transform = 'rotateY(180deg)';
		// console.log(muzFace[i]);
		muzBack[i].style.transform = 'rotateY(360deg)';
	});
}

for (let i = 0; i < muzBack.length; i++) {
	muzBtnClose[i].addEventListener('click', () => {
		muzFace[i].style.transform = 'rotateY(0deg)';
		muzBack[i].style.transform = 'rotateY(180deg)';
	});
}
