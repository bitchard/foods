const icons = document.querySelectorAll('.section-1-icons i')
let i = 1
// we will use set interval it allows us to run the function iver and over again with some intervals. it takes 2 arguments//

setInterval(() => {
        i++

    const icon = document.querySelector('.section-1-icons.change')

    icon.classList.remove('change')

    if(i > icons.length){
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }

}, 4000)