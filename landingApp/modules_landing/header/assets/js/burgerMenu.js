const burger_menu_btn = document.querySelector('.burger-menu-btn-wrapper');
const burger_menu_list = document.querySelector('.header-nav-list-burger .header-nav-list');
const links = document.querySelectorAll('.header-nav-list-burger .header-nav-list-item');
links.forEach(link => {
    link.onclick = () => {
        burger_menu_btn.classList.toggle('active');
        burger_menu_list.classList.toggle('active');
    }
})

burger_menu_btn.onclick = () => {
    burger_menu_btn.classList.toggle('active');
    burger_menu_list.classList.toggle('active');
}