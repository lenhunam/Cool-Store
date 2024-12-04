const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.left = index * 100 + "vw"
    
}
const sliderItems = document.querySelector(".slider-items")
const arrowRight = document.querySelector(".ri-arrow-right-circle-fill")
const arrowLeft = document.querySelector(".ri-arrow-left-circle-fill")
let i = 0;
function sliderMove(i) {
    sliderItems.style.left = -i*100 + "vw"
}
arrowRight.addEventListener('click',()=>{   
    if (i<sliderItem.length-1) {
        i++
        sliderMove(i)
    }else{
        return false
    }
})

arrowLeft.addEventListener('click',()=>{
if (i<=0) {
    return false
}else{
    i--
    sliderMove(i)
}
})

function autoSlider() {
    if (i<sliderItem.length-1) {
        i++
        sliderMove(i)
    } else {
        i=0
        sliderMove(i)
    }
}


setInterval(autoSlider,3500)























