
const images = ["./images/twt.svg", "./images/VK.com-logo.svg"]

let curIndex = 0;

function rotate() {

   const curImg =  document.querySelector(".carousel__sliderImg");

    if(curIndex === 0) {
        curIndex = 1;
    } else  {
        curIndex = 0;
    }

    curImg.src = images[curIndex];


}

setInterval(rotate , 5000);