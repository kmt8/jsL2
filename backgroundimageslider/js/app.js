// UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
// console.log(slides);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');


let activeslide = 0;

function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}
setbody();


function setactiveslide(){
    // slides.forEach((slide)=>{
        // slide.classList.remove('active')
        // console.log(slide);
    // });

    // single line
    slides.forEach(slide=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click',function(){
    activeslide++;
    // console.log(activeslide);

    if(activeslide > slides.length - 1){        
        activeslide = 0;
    }

    setbody();
    setactiveslide();

    // console.log(activeslide);
});

leftbtn.addEventListener('click',function(){
    activeslide--;
    // console.log(activeslide);

    if(activeslide < 0){
        activeslide = slides.length - 1;
    }

    setbody();
    setactiveslide();
});