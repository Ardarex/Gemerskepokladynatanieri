// NEWCAPTURE SCRIPT


const articleContainer = document.getElementById("articles");


// načítanie článkov

fetch("data/articles.json")

.then(response => response.json())

.then(data => {


    data.forEach(article => {


        const card = document.createElement("div");

        card.className = "card";



        card.innerHTML = `

        <div class="image">

            <img src="${article.image}" alt="${article.title}">

        </div>


        <div class="card-content">

            <span>${article.category}</span>

            <h3>${article.title}</h3>

            <p>${article.short}</p>


            <a href="article.html?id=${article.id}">
                ČÍTAŤ ČLÁNOK →
            </a>

        </div>

        `;


        articleContainer.appendChild(card);


    });


})

.catch(error => {

    console.log("Chyba pri načítaní článkov:", error);

});





// ==========================
// DETAIL ČLÁNKU
// ==========================


const params = new URLSearchParams(window.location.search);

const articleId = params.get("id");



const articleTitle = document.getElementById("article-title");

const articleImage = document.getElementById("article-image");

const articleContent = document.getElementById("article-content");





if(articleId && articleTitle && articleContent){


fetch("data/articles.json")

.then(response => response.json())

.then(data => {


const article = data.find(
item => item.id == articleId
);



if(!article) return;



articleTitle.innerHTML = article.title;


articleImage.src = article.image;





// NOVÝ SYSTÉM S PODNADPISMI


if(article.sections){


articleContent.innerHTML = "";



article.sections.forEach(section => {


articleContent.innerHTML += `

<h2>${section.heading}</h2>

<p>${section.text}</p>

`;


});



}



// STARÝ SYSTÉM

else{


articleContent.innerHTML =

article.content.replace(/\n\n/g,"<br><br>");



}



});


}