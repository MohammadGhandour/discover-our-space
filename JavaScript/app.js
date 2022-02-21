const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle')
const content = document.getElementById('content');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === 'false') {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
