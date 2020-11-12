let time = 9000;
let imageIndex = 0;
let imagens = document.querySelectorAll("#slider img");
let max = imagens.length;

let sliderNext = document.querySelector("#slider-next")
let sliderPrev = document.querySelector("#slider-prev")



const classImage = () => {

    imagens[imageIndex].classList.remove('active')

    imageIndex++

    if(imageIndex >= max) {
        imageIndex = 0
    }

    imagens[imageIndex].classList.add('active')
}

const start = () => {
    setInterval(() => {
        classImage()
    }, time)
}




const prev = () => {
    
    imagens[imageIndex].classList.remove('active')

    imageIndex--

    if(imageIndex < 0) {
        imageIndex = 4
    }

    imagens[imageIndex].classList.add('active')
}


sliderNext.addEventListener("click", classImage)
sliderPrev.addEventListener("click", prev)
window.addEventListener('load', start)