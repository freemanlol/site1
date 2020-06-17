document.addEventListener("DOMContentLoaded", () => {
    const closeAndOpen = document.querySelector('.btn-burger-menu'),
        navigationMobile = document.querySelector('.navigation__mobile');
    let c = 0;
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
});