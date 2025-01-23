const menuBar = document.querySelector('.menu_bar');
const navList = document.querySelector('.nav_list');

menuBar.addEventListener('click', () => {
    navList.classList.toggle('active');
});