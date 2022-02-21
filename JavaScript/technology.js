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

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const miniTitle = document.getElementById('miniTitle');
const bigTitle = document.getElementById('bigTitle');
const description = document.getElementById('description');
const imageUp = document.getElementById('imageUp');
const imageDown = document.getElementById('imageDown');


first.onclick = function () {
    bigTitle.innerText = "Launch vehicle";
    description.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    imageUp.src = "media/technology/image-launch-vehicle-portrait.jpg";
    imageDown.src = "media/technology/image-launch-vehicle-landscape.jpg";
    first.classList.add("active");
    second.classList.remove("active");
    third.classList.remove("active");
}

second.onclick = function () {
    bigTitle.innerText = "Spaceport";
    description.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
    imageUp.src = "media/technology/image-spaceport-portrait.jpg";
    imageDown.src = "media/technology/image-spaceport-landscape.jpg";
    first.classList.remove("active");
    second.classList.add("active");
    third.classList.remove("active");
}

third.onclick = function () {
    bigTitle.innerText = "Space capsule";
    description.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    imageUp.src = "media/technology/image-space-capsule-portrait.jpg";
    imageDown.src = "media/technology/image-space-capsule-landscape.jpg";
    first.classList.remove("active");
    second.classList.remove("active");
    third.classList.add("active");
}