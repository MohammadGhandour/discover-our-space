const open = document.getElementById('open');
const close = document.getElementById('close');
const secondNavbar = document.getElementById('secondNavbar');

open.onclick = function () {
    secondNavbar.style.opacity = "1";
    secondNavbar.style.zIndex = "0";
    open.style.opacity = "0";
    close.style.visibility = "visible";
    close.style.marginRight = "176px";
}

close.onclick = function () {
    secondNavbar.style.opacity = "0";
    secondNavbar.style.zIndex = "-1";
    open.style.opacity = "1";
    close.style.visibility = "hidden";
    close.style.marginRight = "0px";
}


const role = document.getElementById('role');
const nom = document.getElementById('nom');
const description = document.getElementById('description');
const member = document.getElementById('member');

/*buttons*/
const commander = document.getElementById('commander');
const engineer = document.getElementById('engineer');
const pilot = document.getElementById('pilot');
const specialist = document.getElementById('specialist');


commander.onclick = function () {
    role.innerText = "Commander";
    nom.innerText = "Douglas Hurley";
    description.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    member.src="media/crew/image-douglas-hurley.png";
    commander.classList.add("active");
    engineer.classList.remove("active");
    pilot.classList.remove("active");
    specialist.classList.remove("active");
}

engineer.onclick = function () {
    role.innerText = "flight engineer";
    nom.innerText = "Anousheh Ansari";
    description.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    member.src="media/crew/image-anousheh-ansari.png";
    commander.classList.remove("active");
    engineer.classList.add("active");
    pilot.classList.remove("active");
    specialist.classList.remove("active");
}

pilot.onclick = function () {
    role.innerText = "pilot";
    nom.innerText = "Victor Glover";
    description.innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    member.src="media/crew/image-mark-shuttleworth.png";
    commander.classList.remove("active");
    engineer.classList.remove("active");
    pilot.classList.add("active");
    specialist.classList.remove("active");
}

specialist.onclick = function () {
    role.innerText = "Mission Specialist";
    nom.innerText = "Mark Shuttleworth";
    description.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    member.src="media/crew/image-victor-glover.png";
    commander.classList.remove("active");
    engineer.classList.remove("active");
    pilot.classList.remove("active");
    specialist.classList.add("active");
}
