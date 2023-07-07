let start = document.querySelector(".w");
let loader = document.querySelector(".wifi"); 
window.addEventListener("load",function(e){
    console.log(document.readyState);
    setTimeout(function(){
        start.style.cssText="display:none";
        document.body.style.overflow="scroll";
        scrollTo({top:0,
            left:0,
            behavior:"instant"});
    },1000)
    this.setTimeout(function(){
    if(this.document.readyState==="complete"){
        AOS.init();
    }
    },1000)
});
ScrollReveal().reveal('.widget', { interval: 200 });


let headerElement = document.querySelectorAll(".header_content li>a");
let beforeElement =document.querySelector(".mega-menu")
let lastElemnt = document.getElementsByClassName("2")
console.log(lastElemnt);
headerElement[3].addEventListener("click",function(){
    headerElement[3].classList.toggle("header-js");
    beforeElement.classList.toggle("mega-menu-js");
})
for(i=0;i<=9;i++){
lastElemnt[i].addEventListener("click",function(){
    headerElement[3].classList.remove("header-js");
    beforeElement.classList.remove("mega-menu-js");
})}

let scrollElemnet = document.querySelector(".scroll-top");
window.onscroll=function(){
    if(window.scrollY >= 800)
    scrollElemnet.style.cssText="visibility: inherit; opacity: 1;";
    else
    scrollElemnet.style.cssText="visibility: hidden; opacity: 0;";
}
scrollElemnet.addEventListener("click",function(){
    scrollTo({top:0,
        left:0,
        behavior:"smooth"})
})

