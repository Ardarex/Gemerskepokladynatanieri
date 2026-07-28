// ===================================
// NEWCAPTURE MAIN SCRIPT
// ===================================



// ===============================
// NAČÍTANIE ČLÁNKOV Z JSON
// ===============================


const articleBox = document.getElementById("articles");



if(articleBox){


fetch("data/articles.json")


.then(response => response.json())


.then(data => {



data.forEach(article => {



articleBox.innerHTML += `


<article class="card">


<div class="image">


<img src="${article.image}" alt="${article.title}">


</div>



<div class="card-content">



<span>

${article.category}

</span>




<h3>

${article.title}

</h3>




<p>

${article.short}

</p>




<a href="article.html?id=${article.id}" target="_blank">

Čítať článok →

</a>



</div>


</article>



`;



});



})



.catch(error => {


console.log(
"Chyba pri načítaní článkov:",
error
);


});



}








// ===============================
// NAVBAR EFEKT PRI SCROLLOVANÍ
// ===============================



const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(navbar){



if(window.scrollY > 80){


navbar.style.background =
"rgba(0,0,0,0.75)";


navbar.style.backdropFilter =
"blur(20px)";


navbar.style.padding =
"20px 7%";



}

else{


navbar.style.background =
"transparent";


navbar.style.backdropFilter =
"none";


navbar.style.padding =
"30px 7%";



}


}



});









// ===============================
// HERO PARALLAX
// ===============================


const hero = document.querySelector(".hero-bg");



window.addEventListener("scroll",()=>{


if(hero){


let value = window.scrollY;


hero.style.transform =
`scale(1.1) translateY(${value * 0.2}px)`;


}



});










// ===============================
// SMOOTH SCROLL
// ===============================



document.querySelectorAll('a[href^="#"]')
.forEach(link => {



link.addEventListener("click",function(e){



const target =
document.querySelector(
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










// ===============================
// SCROLL REVEAL ANIMÁCIE
// ===============================



const revealElements =
document.querySelectorAll(
".card, .feature-box, .section-head"
);



const observer =
new IntersectionObserver((entries)=>{



entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}



});



},{
threshold:0.15
});





revealElements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);



});










// ===============================
// CARD TILT EFEKT
// ===============================



document.addEventListener(
"mousemove",
(e)=>{



document.querySelectorAll(".card")
.forEach(card=>{


const box =
card.getBoundingClientRect();



const x =
e.clientX - box.left;



const y =
e.clientY - box.top;



if(

x > 0 &&
x < box.width &&
y > 0 &&
y < box.height

){



const rotateX =
(y - box.height/2) / 25;



const rotateY =
(box.width/2 - x) / 25;



card.style.transform =
`

perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;



}


else{


card.style.transform =
"translateY(0)";



}



});



});









// ===============================
// DOPLNENIE CSS PRE ANIMÁCIE
// ===============================



const animationCSS = document.createElement("style");



animationCSS.innerHTML = `



.hidden{

opacity:0;

transform:translateY(50px);

transition:1s ease;

}



.show{

opacity:1;

transform:none;

}



.card{

transition:
transform .4s ease,
box-shadow .4s ease;

}



`;



document.head.appendChild(animationCSS);