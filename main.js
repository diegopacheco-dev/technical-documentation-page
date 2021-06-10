const showMenu = (menuId, toggleId) => {
    let menu = document.getElementById(menuId);
    let toggle = document.getElementById(toggleId);

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
        toggle.classList.toggle('btn-active');
    } );
}

const linkActivateShowMenu = (menuId, linksClass, toggleId) => {
    let links = Array.from(document.querySelectorAll(`.${linksClass}`));
    let menu = document.getElementById(menuId);
    let toggle = document.getElementById(toggleId);
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
            toggle.classList.remove('btn-active');
        })
    })
}

showMenu('navMenu', 'btnShowMenu')

linkActivateShowMenu('navMenu', 'nav-link', 'btnShowMenu');