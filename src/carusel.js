const images = [
  './images/twt.svg',
  './images/VK.com-logo.svg',
  './images/sea.jpg',
];

let curIndex = 0;

function rotate() {
  const curImg = document.querySelector('.carousel__sliderImg');
  if (curIndex === 0) {
    curIndex = 2;
  } else {
    curIndex = 0;
  }
  curImg.src = images[curIndex];
}

function init() {
  // document.getElementById("nextBtn").addEventListener('click', prevImg(-1));
}

rotate();
let int = setInterval(rotate, 5000);
function prevImg() {
  clearInterval(int);
}

function nextImg() {
  int = setInterval(rotate, 5000);
}

init();
const prev = document.getElementById('prevBtn');
prev.addEventListener('click', (ev) => {
  ev.stopPropagation();
  prevImg(-1);
});

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', (ev) => {
  ev.stopPropagation();
  nextImg();
});
