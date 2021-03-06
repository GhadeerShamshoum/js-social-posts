/*Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Milestone 3
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.*/ 
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
function postsContainer(){

    

    let created = posts[i].created;
    let changeDate =  created.split("-");
    let newDate = changeDate[2]+"-"+ changeDate[1]+"-"+changeDate[0];

    

document.getElementById('container').innerHTML+=` <div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${ posts[i].author.image}" alt="${firstLetters ()}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${posts[i].author.name}</div>
            <div class="post-meta__time">${newDate}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${posts[i].content}</div>
<div class="post__image">
    <img src="${posts[i].media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#!" data-postid="${posts[i].id}" >
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${i}" class="js-likes-counter">${posts[i].likes}</b> persone
        </div>
    </div> 
</div>            
</div>`




//click-like button
}
for(i=0; i<posts.length; i++){
    
    if(posts[i].author.image==null){
        posts[i].author.image='https://i.picsum.photos/id/831/300/300.jpg?hmac=rOb_4UPQBeuEgrJON2yaO31CcDAsYAlTST77RIVz1W0'
        
    }
    postsContainer()
    
    console.log(posts[i].author.image);
}

function firstLetters (){
    const fullName = posts[i].author.name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    console.log(initials)
    return initials.toUpperCase();
   
    


}

const likeBtn = document.getElementsByClassName('like-button');




for(let i=0; i< posts.length; i++){

let clicked = false;

    likeBtn[i].addEventListener("click", function(){
        if(!clicked){
            clicked = true;
            likeBtn[i].classList.add("like-button--liked");
            document.getElementById(`like-counter-${i}`).textContent ++;
    
        }else{
            clicked = false;
            likeBtn[i].classList.remove("like-button--liked");
            document.getElementById(`like-counter-${i}`).textContent --;
    
        }
    })
}


