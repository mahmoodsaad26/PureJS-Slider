/****************global****************/
let imgs = Array.from(document.querySelectorAll('.item img'))
let lightBox = document.querySelector('.lightBox')
let boxData = document.querySelector('.boxData')
let closeIcon = document.getElementById('close')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let curentIndex = 0;

/************functions***************/

function close() {
    lightBox.style.display = 'none'
}

function nextSlide() {
    curentIndex++;
    if (curentIndex == imgs.length) {
        curentIndex = 0;
    }
    let nextSrc = imgs[curentIndex].getAttribute('src');
    boxData.style.backgroundImage = `url('${nextSrc}')`
}

function prevSlide() {
    curentIndex--;
    if (curentIndex < 0) {
        curentIndex = imgs.length - 1
    }
    let prevSrc = imgs[curentIndex].getAttribute('src')
    boxData.style.backgroundImage = `url('${prevSrc}')`
}


/************events***************/
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        let curentSrc = e.target.getAttribute('src')
        lightBox.style.display = 'flex'
        boxData.style.backgroundImage = `url('${curentSrc}')`
        curentIndex = imgs.indexOf(e.target)

    })
}

closeIcon.addEventListener('click', function () {
    close();
})

next.addEventListener('click', function () {
    nextSlide()
})

prev.addEventListener('click', function () {
    prevSlide();
})
lightBox.addEventListener('click', function () {
    close()
})

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "ArrowRight":
            nextSlide();

            break;
        case "ArrowLeft":
            prevSlide();

            break;
        case "Escape":
            close();

            break;

        default:
            break;
    }
})