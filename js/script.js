
const commentOpenBtn = document.querySelector('.main__comment-open-bar');
const commentBar = document.querySelector('.main .main__comments-section');

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 120) {
        commentBar.classList.add('is-fixed');
        commentOpenBtn.classList.add('is-fixed');
    } else {
        commentBar.classList.remove('is-fixed');
        commentOpenBtn.classList.remove('is-fixed');
    }
});

commentOpenBtn.addEventListener('click', (evt) => {
    if(evt) {
        commentBar.classList.add('is-opened');
    } else {
        commentBar.classList.remove('is-opened');
    }
 });

 document.addEventListener('click', (evt) => {
    if(!commentBar.contains(evt.target) && !commentOpenBtn.contains(evt.target)) {
        commentBar.classList.remove('is-opened');
    }
 });