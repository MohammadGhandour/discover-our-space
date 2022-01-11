const open = document.getElementById('open');
const close = document.getElementById('close');
const secondNavbar = document.getElementById('secondNavbar');
const content = document.getElementById('content');

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