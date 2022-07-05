var list_imgages = document.querySelectorAll('.list-images img');
var images_active = document.querySelector('.list-images .active');
var images_show = document.querySelector('.images-show');
var next = document.querySelector('.next');
var pre = document.querySelector('.pre');
var curentIndex =0;
function nextImage() {
    if (curentIndex === list_imgages.length-1) {
        curentIndex =0;
    } else {
        curentIndex ++;
    }
    setImages(curentIndex);
}
function preImages() {
    if (curentIndex === 0){
        curentIndex = list_imgages.length-1;
    } else {
        curentIndex --;
    }
    setImages(curentIndex);
}
function changeImages() {
    if (curentIndex === list_imgages.length-1) {
        curentIndex =0;
    } else {
        curentIndex ++;
    }
    setImages(curentIndex);
}
function setImages(curentIndex) {
    list_imgages.forEach((element,i) =>{
        element.classList.remove('active');
    });
    list_imgages[curentIndex].classList.add('active');
    //đổi ảnh
    images_active =document.querySelector('.list-images .active');
    images_show.children[0].src = images_active.src;
}
next.onclick = () => {
    nextImage();
}
pre.onclick =() => {
    preImages();
}
setInterval(() => {
    changeImages();
},5000);