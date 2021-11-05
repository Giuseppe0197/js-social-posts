/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes. */

/* creiamo un array on dentro gli oggetti necessari che andranno stampati in pagina */

const postArr = [

    {
        "userPostName" : "Filippo",
        "userPostPhoto" : "https://i.picsum.photos/id/926/300/300.jpg?hmac=x4ZAWARrddK0vvdVlj8WFApg0-AkrVQjwYIxccsHHWU",
        "postData" : "3 weeks ago",
        "postText" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "postImg" : "https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        "postButtonLike" : "Mi piace",
        "postLikeNum" : 50
    },

    {
        "userPostName" : "Martina",
        "userPostPhoto" : "https://i.picsum.photos/id/926/300/300.jpg?hmac=x4ZAWARrddK0vvdVlj8WFApg0-AkrVQjwYIxccsHHWU",
        "postData" : "2 weeks ago",
        "postText" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "postImg" : "https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        "postButtonLike" : "Mi piace",
        "postLikeNum" : 78
    },

    {
        "userPostName" : "Leonardo",
        "userPostPhoto" : "https://i.picsum.photos/id/926/300/300.jpg?hmac=x4ZAWARrddK0vvdVlj8WFApg0-AkrVQjwYIxccsHHWU",
        "postData" : "4 months ago",
        "postText" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "postImg" : "https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        "postButtonLike" : "Mi piace",
        "postLikeNum" : 143
    },

    {
        "userPostName" : "Alex",
        "userPostPhoto" : "https://i.picsum.photos/id/926/300/300.jpg?hmac=x4ZAWARrddK0vvdVlj8WFApg0-AkrVQjwYIxccsHHWU",
        "postData" : "3 weeks ago",
        "postText" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "postImg" : "https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        "postButtonLike" : "Mi piace",
        "postLikeNum" : 45
    },

    {
        "userPostName" : "Giorgia",
        "userPostPhoto" : "https://i.picsum.photos/id/926/300/300.jpg?hmac=x4ZAWARrddK0vvdVlj8WFApg0-AkrVQjwYIxccsHHWU",
        "postData" : "1 day ago",
        "postText" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus sapiente necessitatibus molestias, assumenda quas explicabo eveniet maxime, et blanditiis sequi debitis. Tempore veritatis voluptatum ab, sequi explicabo quas dolorum.",
        "postImg" : "https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        "postButtonLike" : "Mi piace",
        "postLikeNum" : 76
    }

]

/* creiamo una variabile per permetterci di stampare gli oggetti in pagina */

const divContainer = document.querySelector(".post");

/* andiamo a stampare gli elmenti necessari ma non a tutti i post, solo ad alcuni */

let postStamp = "";

/* creiamo un ciclo per stampare i post */

function stampa() {

    let postStamp = "";

    for (let i = 0; i < postArr.length; i++){

        /* andiamo a creare le variabili utili per gli oggetti */
    
        const {userPostName, userPostPhoto, postData, postText, postImg, postButtonLike, postLikeNum} = postArr[i];
    

            postStamp += `
            <div class="post__header">
                <div class="post-meta">
    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${userPostPhoto}">
                    </div>
    
                    <div class="post-meta__data">
                        <div class="post-meta__author">${userPostName}</div>
    
                        <div class="post-meta__time">${postData}</div>
                    </div>
                </div>
            </div>
    
            <div class="post__text">${postText}</div>`;
    
            if (postImg) {
                postStamp += `<div class="post__image"><img src="${postImg}"></div>`;
            }

            postStamp += `<div class="post__footer">
    
                <div class="likes js-likes">
    
                    <div class="likes__cta">
    
                        <a class="like-button  js-like-button" data-postid="${i}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">${postButtonLike}</span>
                        </a>
                    </div>
    
                    <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${postLikeNum}</b> persone
                    </div>
                </div>
            </div> 
        `

        divContainer.innerHTML = postStamp;
    
    }
    


}

stampa()

/* prendiamo il numero dei mi piace nell'array */

let buttonForLike = document.querySelectorAll(".js-like-button");

/* andiamo ad aggiungere il click al pulsante in modo che il contatore dei mi piace salga di uno */

for (let i = 0; i < buttonForLike.length; i++){

    buttonForLike[i].addEventListener("click",

    function() {

        const id = this.getAttribute("data-postid");

        postArr[id].postLikeNum++;

        console.log(postArr[id]);

        stampa()

    }

);

}