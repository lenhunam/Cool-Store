const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.left = index * 100 + "vw"
    
}
const sliderItems = document.querySelector(".slider-items")
const arrowRight = document.querySelector(".ri-arrow-right-circle-fill")
const arrowLeft = document.querySelector(".ri-arrow-left-circle-fill")
let i = 0;
arrowRight.addEventListener('click',()=>{
    // console.log(i)
    if (i<sliderItem.length-1) {
        i++
        sliderItems.style.left = -i*100 + "vw"
    }else{
        return false
    }

})

arrowLeft.addEventListener('click',()=>{
if (i<=0) {
    return false
}else{
    // console.log(i)
    i--
    sliderItems.style.left = -i*100 + "vw"
}
})
























