const images = [
  './images/twt.svg',
  './images/VK.com-logo.svg',
  './images/sea.jpg',
];

export function StateSlider(imageCount, rotateFunc, options) {
  this.currentIndex = 0;
  if (options !== undefined && options.enableRotator) {
    this.rotator = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  this.rotate = rotateFunc;
  this.nextImage = function nextImage() {
    this.disableRotation();
    this.currentIndex += 1;
    if (this.currentIndex === imageCount) {
      this.currentIndex = 0;
    }
    this.rotate();
  };
  this.prevImage = function prevImage() {
    this.disableRotation();
    if (this.currentIndex === 0) {
      this.currentIndex = imageCount - 1;
    } else {
      this.currentIndex -= 1;
    }
    this.rotate();
  };

  this.disableRotation = function disableRotation() {
    clearInterval(this.rotator);
  };
}

/* eslint no-use-before-define: ["error", { "functions": false }] */
const state = new StateSlider(images.length, rotate, {
  enableRotator: true,
});

function rotate() {
  const curImg = document.querySelector('.carousel__sliderImg');
  if (curImg !== null) {
    curImg.src = images[state.currentIndex];
  }
}

(function init() {
  rotate();
  const prev = document.getElementById('prevBtn');
  if (prev !== null) {
    prev.addEventListener('click', (ev) => {
      ev.stopPropagation();
      state.prevImage();
    });
  }

  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn !== null) {
    nextBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      state.nextImage();
    });
  }
})();
