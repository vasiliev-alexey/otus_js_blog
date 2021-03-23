const images = [
  './images/twt.svg',
  './images/VK.com-logo.svg',
  './images/sea.jpg',
];

export function StateSlider(imageCount) {
  this.currentIndex = 0;
  this.rotator = null;
  this.nextImage = function nextImage() {
    this.currentIndex += 1;
    if (this.currentIndex === imageCount) {
      this.currentIndex = 0;
    }
  };
  this.prevImage = function prevImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = imageCount - 1;
    } else {
      this.currentIndex -= 1;
    }
  };

  this.disableRotation = function disableRotation() {
    clearInterval(this.rotator);
  };
}

const state = new StateSlider(images.length);

function rotate() {
  const curImg = document.querySelector('.carousel__sliderImg');
  curImg.src = images[state.currentIndex];
}

(function init() {
  state.rotator = setInterval(() => {
    state.nextImage();
    rotate();
  }, 5000);

  const prev = document.getElementById('prevBtn');

  if (prev !== null) {
    prev.addEventListener('click', (ev) => {
      ev.stopPropagation();
      state.disableRotation();
      state.prevImage();
      rotate();
    });
  }

  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn !== null) {
    nextBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      state.disableRotation();
      state.nextImage();
      rotate();
    });
  }
})();
