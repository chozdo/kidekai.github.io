const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const boo  = document.querySelector(".boo");
const hidden1 = document.querySelector(".carousel-control-prev");
const hidden2 = document.querySelector(".carousel-control-next");
const transferent = document.querySelector(".transferent")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("activate");
    boo.classList.toggle("boo1");
    hidden1.classList.toggle("hidden1");
    hidden2.classList.toggle("hidden2");
})
boo.addEventListener("click", () => {
    navbar.classList.toggle("activate");
    boo.classList.toggle("boo1");
    hidden1.classList.toggle("hidden1");
    hidden2.classList.toggle("hidden2");
})
transferent.addEventListener("mouseover", ()=>{
    transferent.classList.toggle("deleted");
})

