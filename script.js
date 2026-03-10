const hamMenu = document.querySelector('.bx.bx-menu-right');
const closeMEnu = document.querySelector('.bx.bx-x');
const navBar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const navHover =   document.querySelector('.js-log2');
const jsLog = document.querySelector('.js-log');
const jsLog3 =  document.querySelector('.js-log3');
const jsLog4 =  document.querySelector('.js-log4');

function just(){
    hamMenu.classList.toggle('active');
    closeMEnu.classList.toggle('active');
 navBar.classList.toggle('active');
 logo.classList.toggle('active');

}




function jsLog1(){
   navHover.classList.toggle('active');
//    
}

function jsLog2(){
jsLog.classList.toggle('active')
}


function jsLog33(){
   jsLog4.classList.toggle('active');
//    
}

function jsLog44() {
    jsLog3.classList.toggle('active')
}
// Chat gpt Generated

 const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
});   
 AOS.init();