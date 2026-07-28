// =========================
// NEWCAPTURE JAVASCRIPT
// =========================



// NAVBAR EFFECT

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", ()=>{


if(window.scrollY > 80){

navbar.style.background = "rgba(0,0,0,0.75)";
navbar.style.backdropFilter = "blur(20px)";
navbar.style.padding = "20px 7%";

}

else{

navbar.style.background = "transparent";
navbar.style.backdropFilter = "none";
navbar.style.padding = "30px 7%";

}


});






// SCROLL REVEAL


const revealElements = document.querySelectorAll(
".card, .section-head, .feature-box"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{

threshold:0.15

}


);



revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});







// PARALLAX HERO


const heroImage = document.querySelector(".hero-bg");


window.addEventListener("scroll",()=>{


let scroll = window.scrollY;


if(heroImage){

heroImage.style.transform =
`scale(1.1) translateY(${scroll * 0.25}px)`;

}


});








// SMOOTH BUTTON SCROLL


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


let target = document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// CURSOR GLOW


const cursor = document.createElement("div");


cursor.classList.add("cursor");


document.body.appendChild(cursor);



document.addEventListener("mousemove",(e)=>{


cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";


});







// CARD TILT EFFECT


const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect = card.getBoundingClientRect();


const x = e.clientX - rect.left;

const y = e.clientY - rect.top;



const rotateX =
(y - rect.height/2) / 20;


const rotateY =
(rect.width/2 - x) / 20;



card.style.transform =
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});





card.addEventListener("mouseleave",()=>{


card.style.transform =
"translateY(0)";


});



});








// TEXT REVEAL


const title = document.querySelector(".hero h1");


if(title){


let text = title.innerHTML;


title.innerHTML = text
.split("")
.map(letter=>{

return `<span>${letter}</span>`;

})
.join("");



document.querySelectorAll(".hero h1 span")
.forEach((span,index)=>{


span.style.animation =
`
letterShow .8s ease forwards
${index * 0.03}s
`;



});


}








// ADD CSS CLASSES


const style = document.createElement("style");


style.innerHTML = `


.hidden{

opacity:0;

transform:translateY(60px);

transition:
opacity 1s ease,
transform 1s ease;

}



.show{

opacity:1;

transform:none;

}



.cursor{

position:fixed;

width:25px;

height:25px;

border-radius:50%;

background:#35ff88;

pointer-events:none;

mix-blend-mode:screen;

transform:translate(-50%,-50%);

z-index:99999;

opacity:.7;

transition:.1s;

}



.hero h1 span{

display:inline-block;

opacity:0;

transform:translateY(40px);

}



@keyframes letterShow{

to{

opacity:1;

transform:none;

}

}



`;



document.head.appendChild(style);







// PAGE LOADED


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});