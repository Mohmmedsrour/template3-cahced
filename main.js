if(window.localStorage.getItem("color"))
{
document.styleSheets[0].cssRules[2].style.setProperty("--main-color",window.localStorage.getItem("color"));
}
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
var typed = new Typed('#element', {
    strings: ['iam mohammed srour', ' iam web developer'],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 700,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    backSpeed:100
    });
    elemnetColor1= document.querySelector(".color-component");
    elemnetColor = document.getElementById("color-button");
    elemnetColor.addEventListener("click",function(){
        elemnetColor1.classList.toggle("color-component-click");
    })
let color1 =document.getElementById("1");
let color2 =document.getElementById("2");
let color3 =document.getElementById("3");
let color4 =document.getElementById("4");
let color5 =document.getElementById("5");
let color6 =document.querySelectorAll('.color-component input[type="radio"]')

color1.addEventListener("click",function(){
    window.localStorage.setItem("color","#ff4e6b");
})
color2.addEventListener("click",function(){
    window.localStorage.setItem("color","#003c00");
})
color3.addEventListener("click",function(){
    window.localStorage.setItem("color","#ff0f1c");
})
color4.addEventListener("click",function(){
    window.localStorage.setItem("color","#1c1833");
})
color5.addEventListener("click",function(){
    window.localStorage.setItem("color","#2196f3");
})

for(i=0; i<5;i++){
    color6[i].addEventListener("click",function(){
        document.styleSheets[0].cssRules[2].style.setProperty("--main-color",window.localStorage.getItem("color"));

    })
}
/*scoller*/
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("resize",function(){
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
});
let scroller = document.querySelector(".scroller");
window.addEventListener("scroll",function(){
    console.log(height);
    console.log("//////////////");
    let scrolltop1 =document.documentElement.scrollTop;
    console.log(scrolltop1);
    scroller.style.width =`${(scrolltop1/height)*100}%`
})
