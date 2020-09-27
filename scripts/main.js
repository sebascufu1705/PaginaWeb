const img = document.querySelector('.galery__img');
const galeryThumbs = document.querySelectorAll('.galery__peque img');


function galeryHandle(event){
    const src = event.target.src;
    img.src = src;
console.log('click', event.target);
}

galeryThumbs.forEach(function(elem, index){
elem.addEventListener('click', galeryHandle);
});



const carrouselBtn = document.querySelectorAll('.carrousel__btn');
const images = document.querySelectorAll('.carrousel__img');

carrouselBtn[0].addEventListener('click', function(){
    images[0].classList.add("carrousel__img--active");
    images[1].classList.remove("carrousel__img--active");
});
carrouselBtn[1].addEventListener('click', function(){
    images[1].classList.add("carrousel__img--active");
    images[0].classList.remove("carrousel__img--active");
});



