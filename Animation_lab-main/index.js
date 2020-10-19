console.log("index.js")

const element = document.querySelector('[data-parallax="scroll"]')

//  PARALLAX JS

$('.parallax-window').parallax({
    imageSrc: './images/img2.jpg',
    zIndex: 1,
    speed: 0.2
})