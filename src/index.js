const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const HIDDEN = "hidden";


burger.addEventListener('click', (e) => {
    if (menu.classList.contains(HIDDEN)) {
        menu.classList.remove(HIDDEN)
    } else {
        menu.classList.add(HIDDEN)
    }
})