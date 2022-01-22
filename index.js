/* Variables */
const btnHeight = document.querySelector('.btn-div');

/* Giving btn-span height */
if (btnHeight) {
    const btnHeightAfter = window.getComputedStyle(btnHeight,':before');
    const btnSpan = document.querySelectorAll('.btn-span');
    btnSpan.forEach(item => {
        item.style.height = btnHeightAfter.height;
    })
}

/* Navbar Interaction */
const main = document.querySelector('main');
const navBtn = document.querySelector('.nav-btn');
const navDisplay = document.querySelector('.nav-display');

navBtn.addEventListener('click', () => {
    navDisplay.classList.toggle('nav-display-move');
    main.classList.toggle('blur-effect');
})