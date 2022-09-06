const slides = document.querySelectorAll('.slider__item');
const sliderArrow = document.querySelectorAll('.slider__arrow');
let oldActiveIndex = 0;

sliderArrow.forEach(element => element.onclick = changeSlideArrow);

updateOldActiveIndex();
sliderControl(oldActiveIndex);

function changeSlideArrow() {
  updateOldActiveIndex();
  let newActiveIndex = null;

  if (this.matches('.slider__arrow_next')) {
    newActiveIndex = oldActiveIndex + 1;
    if (newActiveIndex > slides.length - 1) newActiveIndex = 0;
  } else if (this.matches('.slider__arrow_prev')) {
    newActiveIndex = oldActiveIndex - 1;
    if (newActiveIndex < 0) newActiveIndex = slides.length - 1;
  }

  sliderControl(newActiveIndex);
}

function sliderControl(activeSlideIndex) {
  slides[oldActiveIndex].classList.remove('slider__item_active');
  slides[activeSlideIndex].classList.add('slider__item_active');
}

function updateOldActiveIndex() {
  oldActiveIndex = Array.from(slides).findIndex((element) => {
    return element.matches('.slider__item_active');
  });
}