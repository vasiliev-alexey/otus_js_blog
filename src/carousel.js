const images = [
  './images/twt.svg',
  './images/VK.com-logo.svg',
  './images/sea.jpg',
];

const upperBound = images.length;

export  function StateSlider() {
  this.currentIndex = 0;
  this.rotator = null;
  this.nextImage = function nextImage() {
    this.currentIndex += 1;
    if (this.currentIndex === upperBound) {
      this.currentIndex = 0;
    }
  };
  this.prevImage = function prevImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = upperBound - 1;
    } else {
      this.currentIndex -= 1;
    }
  };

  this.disableRotation = function disableRotation() {
    clearInterval(this.rotator);
  };
}

const state = new StateSlider();

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

  prev.addEventListener('click', (ev) => {
    ev.stopPropagation();
    state.disableRotation();
    state.prevImage();
    rotate();
  });

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    state.disableRotation();
    state.nextImage();
    rotate();
  });
})();


