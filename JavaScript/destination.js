const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

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

const planetUp = document.getElementById('planet-up');
const planetDown = document.getElementById('planet-down');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
const planetName = document.getElementById('name');
const info = document.getElementById('info');
const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
const borderMoon = document.getElementById('border-moon');
const borderMars = document.getElementById('border-mars');
const borderEuropa = document.getElementById('border-europa');
const borderTitan = document.getElementById('border-titan');

moon.onclick = function () {
    planetName.innerText = "moon";
    info.innerText = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    data1.innerText = "384,400 km";
    data2.innerText = "3 days";
    planetUp.src = "media/destination/image-moon.png";
    planetDown.src = "media/destination/image-moon.png";
    borderMoon.classList.add("border", "border-planet");
    borderMars.classList.remove("border", "border-planet");
    borderEuropa.classList.remove("border", "border-planet");
    borderTitan.classList.remove("border", "border-planet");
}

mars.onclick = function () {
    planetName.innerText = "mars";
    info.innerText = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    data1.innerText = "225 mil. km";
    data2.innerText = "9 months";
    planetUp.src = "media/destination/image-mars.png";
    planetDown.src = "media/destination/image-mars.png";
    borderMoon.classList.remove("border", "border-planet");
    borderMars.classList.add("border", "border-planet");
    borderEuropa.classList.remove("border", "border-planet");
    borderTitan.classList.remove("border", "border-planet");
}

europa.onclick = function () {
    planetName.innerText = "europa";
    info.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    data1.innerText = "628 mil. km";
    data2.innerText = "3 years";
    planetUp.src = "media/destination/image-europa.png";
    planetDown.src = "media/destination/image-europa.png";
    borderMoon.classList.remove("border", "border-planet");
    borderMars.classList.remove("border", "border-planet");
    borderEuropa.classList.add("border", "border-planet");
    borderTitan.classList.remove("border", "border-planet");
}

titan.onclick = function () {
    planetName.innerText = "titan";
    info.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    data1.innerText = "1.6 bil. km";
    data2.innerText = "7 years";
    planetUp.src = "media/destination/image-titan.png";
    planetDown.src = "media/destination/image-titan.png";
    borderMoon.classList.remove("border", "border-planet");
    borderMars.classList.remove("border", "border-planet");
    borderEuropa.classList.remove("border", "border-planet");
    borderTitan.classList.add("border", "border-planet");
}