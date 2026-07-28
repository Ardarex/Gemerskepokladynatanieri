// =================================
// NEWCAPTURE SCRIPT
// =================================


// ================================
// NAČÍTANIE ČLÁNKOV Z JSON
// ================================


const articleBox = document.getElementById("articles");


if(articleBox){


fetch("data/articles.json")

.then(response => response.json())

.then(data => {


data.forEach(article => {


articleBox.innerHTML += `


<article class="card">


<div class="image">


<img 
src="${article.image}" 
loading="lazy"
alt="${article.title}"
>


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

.catch(error=>{

console.log(
"Chyba článkov:",
error
);


});


}






// ================================
// NAVBAR SCROLL
// ================================


const navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(!navbar) return;



if(window.scrollY > 50){


navbar.classList.add("active");


}

else{


navbar.classList.remove("active");


}


});








// ================================
// SMOOTH SCROLL
// ================================


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});







// ================================
// JEMNÉ OBJAVENIE PRI SCROLLOVANÍ
// ================================


const elements =
document.querySelectorAll(
".card, .feature-box, .section-head"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},
{

threshold:0.1

}

);



elements.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);


});







// ================================
// HERO PARALLAX LEN PC
// ================================


if(window.innerWidth > 900){


const hero =
document.querySelector(".hero-bg");



window.addEventListener(
"scroll",
()=>{


if(hero){


hero.style.transform =
`translateY(${window.scrollY * 0.15}px)`;


}



});


}