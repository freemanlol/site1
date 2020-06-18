document.addEventListener("DOMContentLoaded", () => {
    const closeAndOpen = document.querySelector('.btn-burger-menu'),
        navigationMobile = document.querySelector('.navigation__mobile'),
        none = document.querySelector('.none'),
        titleAuthorGreat = document.querySelector('.title__author--great'),
        titleAuthorActor = document.querySelector('.title__author--actor'),
        cardOne = document.querySelector('.card-1'),
        cardTwo = document.querySelector('.card-2'),
        newItemCollaction = document.querySelectorAll('.new__item'),
        arrowRight = document.querySelector('.news__arrow--right');



        
    let c = 0,
        co = -1;


    closeAndOpen.addEventListener('click', () => {
        c++;
        navigationMobile.classList.remove("animate__backOutUp");
        navigationMobile.classList.add("flex-block");
        navigationMobile.classList.add("animate__backInDown");
        if (c == 2) {
            navigationMobile.classList.add("animate__backOutUp");
            setTimeout(function timeAnime() {
                navigationMobile.classList.remove("flex-block");
            }, 1000);
            c -= 2;
        }
    });

    titleAuthorActor.addEventListener('click', () => {
        cardOne.classList.remove("none");
        cardTwo.classList.add("none");
        titleAuthorGreat.classList.remove("title__author--active");
        titleAuthorActor.classList.add("title__author--active");
    });
    titleAuthorGreat.addEventListener('click', () => {
        cardOne.classList.add("none");
        titleAuthorActor.classList.remove("title__author--active");
        cardTwo.classList.remove("none");
        titleAuthorGreat.classList.add("title__author--active");
    });
    
    
    arrowRight.addEventListener('click', () => {
        co++;
        if (co == 4) {
            co = 0;
        }
        newItemCollaction.forEach((elem, index) => {            
            elem.classList.add("none");
            if (co == index) {
                elem.classList.remove("none");
                elem.classList.add("animate__animated", "animate__fadeIn");
                
            }
            // elem.classList.remove("none");
        })
    });
});