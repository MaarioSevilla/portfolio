
const butonclick = document.getElementById("btnshowmodal");
const fakemodal = document.getElementById("fakemodal");

butonclick.onclick = function () {
    fakemodal.classList.toggle('showfakemodal');
}