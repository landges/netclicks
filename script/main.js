//menu
const leftMenu=document.querySelector('.left-menu');
const hamburger=document.querySelector('.hamburger');
//open and close menu
hamburger.addEventListener('click',()=>{
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click',(event)=>{
    if(!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click',(event)=>{
    const target=event.target;
    const dropdown=target.closest('.dropdown');
    if (dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});
let images=document.querySelectorAll('.tv-card__img');
for(let i=0; i<images.length;i++){
    let src=images[i].src;
    images[i].addEventListener('mouseover',()=>{
        images[i].src=images[i].dataset.backdrop;
    })
    images[i].addEventListener('mouseout',()=>{
        images[i].src=src;
    })
};