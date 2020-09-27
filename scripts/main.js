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






