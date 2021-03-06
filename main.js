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


const container = document.getElementById('container');
container.innerHTML = '';
const postIcons = document.getElementsByClassName('post-meta__icon');
const likeButton = document.getElementsByClassName('like-button');
const counter = document.getElementsByClassName('js-likes-counter');


// ciclo lunghezza array
for(let index in posts){
    // creo post
    const newPost = posts[index];
    createPost(newPost);

      
    // gestione immagine del profilo null
    if(newPost.author.image === null){
        // console.log(postIcons[index]);
        postIcons[index].innerHTML = 
        `
            <div class="profile-pic-default">
                <span>
                    ${getInitials(newPost.author.name)}
                </span>
            </div>
        `;
    };
   
    // click su Mi Piace
    likeButton[index].addEventListener('click',function(){
        this.classList.add('like-button--liked');
        counter[index].innerHTML = newPost.likes + 1;
        
    });

};



// funzione che crea il singolo post
function createPost (singlePost){
    //creazione div post
    const post = document.createElement('div');
    post.className = 'post';  
    

    //contenuto nel post
    post.innerHTML=
    `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" 
                    src="${singlePost.author.image}" 
                    alt="${singlePost.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">
                        ${singlePost.author.name}
                    </div>
                    <div class="post-meta__time">
                        ${singlePost.created.split("-").reverse().join("/")}
                    </div>
                </div>                    
            </div>
        </div>
        <div class="post__text">
            ${singlePost.content}
        </div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${singlePost.id}" class="js-likes-counter">${singlePost.likes}</b> persone
                </div>
            </div> 
        </div>  
    `;
    

    container.append(post);
};


// funzione per avere iniziali
function getInitials(fullName) {
    
    const arrayFullName = fullName.split(' ');
    // console.log('arrayFullName', arrayFullName);
    let initials = '';

    for(let i = 0; i < arrayFullName.length; i++){     
        const name = arrayFullName[i] ;
        // console.log('name', name);
        const initial = name[0];
        // console.log('initial',initial);
        initials += initial;
    };

    // console.log('initials', initials);
    return initials;
};


