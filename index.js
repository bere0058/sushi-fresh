/* Variables */
const btnHeight = document.querySelector('.btn-1');
const btnHeightAfter = window.getComputedStyle(btnHeight,':after');
const btnSpan = document.querySelectorAll('.btn-span');
/* Giving btn-span height */
btnSpan.forEach(item => {
    item.style.height = btnHeightAfter.height;
})