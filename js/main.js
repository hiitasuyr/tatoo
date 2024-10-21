"use strick"

window.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll('.primary-tab__items'),
        tabs = document.querySelectorAll('.primary-catalog'),
        tabList = document.querySelector('.primary-tab__list');

    function hideTab(){
        tabs.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('showb', 'fade')
        });

        tabBtns.forEach(item => {
            item.classList.remove('items-active'); // Убираем активный класс с кнопок
        });
    }

    function showTab (i = 0) {
        tabs[i].classList.add('showb', 'fade');
        tabs[i].classList.remove('hide');
        tabBtns[i].classList.add('items-active');
    }

    hideTab();
    showTab();

    tabList.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('primary-tab__items')) {
            tabBtns.forEach((item, i) => {
                if (target == item) {
                    hideTab();
                    showTab(i);
                }
            });
        }
    });

    const navMain = document.querySelector('.nav-hidecatalog'),
        navList = document.querySelectorAll('.nav-hidecatalog__list'),
        navCatal = document.querySelector('.nav-catalog__link');

    navCatal.addEventListener('click', () => {
        if (navMain.style.display === 'flex') {
            navMain.style.display = 'none';
        } else {
            navMain.style.display = 'flex';
        }
    });
});