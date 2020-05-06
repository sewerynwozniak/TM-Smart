//logo navigation
$('.nav__logo').on('click', function(e){
   
    $('html, body').animate(
        {
            scrollTop: $(home).offset().top - $(navigation).height()
        },
        800
    )
})

// ul navigation
$('.nav__ul a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - $(navigation).height() - 50
            },
            800
        )
    }
})


//navigation - arrow
$('.section1static__arrow').on('click', function(e){
           
        $('html, body').animate(
            {            
                scrollTop: $(sklep).offset().top -100
            },
            800
        )     
    }
)

//navigation - button
$('.section1__btn').on('click', function(e){
           
        $('html, body').animate(
            {            
                scrollTop: $(zapytaj).offset().top -100
            },
            800
        )     
    }
)

//navigation - button
$('.section1-1__btn').on('click', function(e){
           
        $('html, body').animate(
            {            
                scrollTop: $(zapytaj).offset().top -100
            },
            800
        )     
    }
)

//variables

const alert = document.querySelector('.alert');
const hamburgerMenu = document.querySelector('.nav__hamburgerMenu');
const hamburgerLayer1 = document.querySelector('.nav__hamburgerLayer1');
const hamburgerLayer2 = document.querySelector('.nav__hamburgerLayer2');
const hamburgerLayer3 = document.querySelector('.nav__hamburgerLayer3');
const allHamburgerLayers = document.querySelectorAll('.nav__hamburgerLayer');
const nav = document.querySelector('.nav__ul');
const navbar = document.querySelector('.nav');
const nav__as = document.querySelectorAll('.nav__a');
const section1__dots = document.querySelectorAll('.section1static__dot');
const sections1 = document.querySelectorAll('#home');
const section1__btn = document.querySelector('.section1__btn');
const section1__textWrapper = document.querySelector('.section1__textWrapper');
const section2__abstractImg = document.querySelector('.section2__abstractImg');
const section6__moveLeft = document.querySelector('.section6__moveLeft');
const section6__moveRight = document.querySelector('.section6__moveRight');
const section6__sliders = document.querySelectorAll('.section6__slider');
const botchecker = document.querySelector('.section5__input--botchecker')
const submit = document.querySelector('.section5__submit');
const input__noEmpty = document.querySelectorAll('.section5__noEmpty');




//alert

function alertFunction(txt){
if(alert.style.animation!='')return;
alert.innerText = txt;
alert.style.animation = 'alertAnimation 3s linear';
setTimeout(()=>{alert.style.animation=''},3000)
}






//home slider


let current=0;

section1__dots.forEach(dot=>dot.addEventListener('click', changeSlide))


let automaticSlide = setInterval(nextSlide,7000)

    function nextSlide(){

        current++
        if(current>1){
            current=0
        }
    
        sections1.forEach(section=>section.style.display='none');
        sections1[current].style.display='block';
        
    
        section1__dots.forEach(dot=>dot.classList.remove("section1static__dot--marked"));
        section1__dots[current].classList.add("section1static__dot--marked");

    }


function changeSlide(e){

    section1__dots.forEach(dot=>dot.classList.remove("section1static__dot--marked"));
    e.target.classList.add("section1static__dot--marked");

    clearInterval(automaticSlide);

    // number of clicked button
    current = [...e.target.parentElement.children].indexOf(e.target);

    sections1.forEach(section=>section.style.display='none');
    sections1[current].style.display='block';

    automaticSlide = setInterval(nextSlide,7000)

}

   



//show mobile navigation

hamburgerMenu.addEventListener('click', showMobileNav);
hamburgerMenu.addEventListener('click', hamburgerAnimation);

function showMobileNav(){
nav.classList.toggle('nav__aside');

}

function hamburgerAnimation(){
    
    hamburgerLayer1.classList.toggle('nav__hamburgerLayer--hamburgerUpper');
    hamburgerLayer2.classList.toggle('nav__hamburgerLayer--displayNone');
    hamburgerLayer3.classList.toggle('nav__hamburgerLayer--hamburgerLower');

    }


window.onscroll = function(){

    
    if(window.pageYOffset>200 ){
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0px 0.5px 5px -0.5px';
        nav__as.forEach(nav=>nav.style.color = '#000');
        allHamburgerLayers.forEach(layer=>layer.style.backgroundColor='#000')
        }

    
    else if(window.pageYOffset<200){
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
        nav__as.forEach(nav=>nav.style.color = '#ddd');
        allHamburgerLayers.forEach(layer=>layer.style.backgroundColor='rgb(221, 221, 221)')
    }
    if(window.pageYOffset<200 && window.innerWidth< 1000){ 
        nav__as.forEach(nav=>nav.style.color = '#000');
    }
}





// slider

let sliderNr =0;

displaySlider()

function displaySlider(){



section6__sliders.forEach(slider=>{
    slider.style.display='none';
    slider.style.opacity='0';
    
})    
section6__sliders[sliderNr].style.display='block';
section6__sliders[sliderNr].style.opacity='1';
}

section6__moveLeft.addEventListener('click',()=>{
    
    section6__sliders[sliderNr].style.opacity=0;
    sliderNr--;
    if(sliderNr<0){
        sliderNr=4
    }
    setTimeout(displaySlider, 300)
     
})


section6__moveRight.addEventListener('click',()=>{

    section6__sliders[sliderNr].style.opacity=0;
    sliderNr++;
    if(sliderNr>4){
        sliderNr=0
    }
    setTimeout(displaySlider, 300)

})





// submit form


function checkIfEmpty(){
    
    for(let i=0;i<input__noEmpty.length;i++){
        if(input__noEmpty[i].value == ''){
            return true;
        }
    }
    return false;
}


submit.addEventListener('click', (e)=>{
   
    e.preventDefault();

    if(checkIfEmpty()){
       return alertFunction('Uzupełnij wszystkie pola!')
    }

    if(botchecker.value!=''){
        return alertFunction('Usuń tekst z ostatniego wiersza!')
        
    }else{
        

        let name = encodeURIComponent(document.getElementById("name").value);
        let email = encodeURIComponent(document.getElementById("email").value);
        let phoneNumber = encodeURIComponent(document.getElementById("phoneNumber").value);
        let message = encodeURIComponent(document.getElementById("message").value);


        let params = "name=" + name + "&email=" + email +  "&phoneNumber=" + phoneNumber + "&message=" + message;

        let xhr = new XMLHttpRequest();
        xhr.open("POST","contactform.php",true);
    
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        

        xhr.onload = function(){
            if(xhr.status == 200){
                alertFunction('Wiadomość została wysłana!');
            }
        }

        xhr.send(params);

        //set default values on form after submitting
        input__noEmpty.forEach(input=>input.value='');
        botchecker.value='usuń ten tekst w celu weryfikacji botów!';
        
    }
    
})