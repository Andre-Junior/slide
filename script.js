let time = 5000;
let imageIndex = 0;
let imagens = document.querySelectorAll("#slider img");
let max = imagens.length;

const nextImagem = () => {

    imagens[imageIndex].classList.remove('active')

    imageIndex++

    if(imageIndex >= max) {
        imageIndex = 0
    }

    imagens[imageIndex].classList.add('active')
}

const start = () => {
    setInterval(() => {
        nextImagem()
    }, time)
}

window.addEventListener('load', start)