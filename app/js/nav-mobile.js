function showMenu() {

    const toggleMenu = document.getElementById('toggle-icon');
    const navList = document.getElementById('nav-list');

    function openMenu() {
        toggleMenu.classList.toggle("fa-bars");
        toggleMenu.classList.toggle("fa-times");
        navList.classList.toggle("mobile-open");
        navList.classList.toggle("mobile-close");
    }

    toggleMenu.addEventListener("click", openMenu);

    $(window).resize(function () {

        let width = $(window).width();

        if (width > 575) {
            toggleMenu.classList.add("fa-bars");
            toggleMenu.classList.remove("fa-times");
            navList.classList.remove("mobile-open");
            navList.classList.add("mobile-close");
        }
    });
    
} showMenu();