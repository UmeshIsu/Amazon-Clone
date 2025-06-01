const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control_previous');
const next_button = document.querySelector('.control_next');

let n = 0;

function changeSlides(){
    for(let i = 0;i <imgs.length;i++){
        imgs[i].style.display = 'none';
    }
     imgs[n].style.display = 'block';
}
changeSlides();

prev_button.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length -1;
    }
    changeSlides();
})
next_button.addEventListener('click',(e)=>{
    if(n<imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlides();
})