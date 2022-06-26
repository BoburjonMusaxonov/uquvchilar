const start = document.getElementById("start")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const uyinchi1 = document.querySelector(".uyinchi1")
const uyinchi2 = document.querySelector(".uyinchi2")
const yutuq1 = document.querySelector(".yutuq1")
const yutuq2 = document.querySelector(".yutuq2")

let city1;
let city2;

uyinchi1.addEventListener("click", function () {
    city1 = Math.floor(Math.random() * 100);
    h1.innerHTML = city1;
    console.log(city1);
});


uyinchi2.addEventListener("click", function () {
    city2 = Math.floor(Math.random() * 100);
    h2.innerHTML = city2;
    console.log(city2);
});


start.addEventListener("click", function () {
    if (city1 > city2) {
        yutuq1.innerHTML = ("sizda yutuq")
        yutuq2.innerHTML = ("siz qoldinggiz")
    } else {
        yutuq1.innerHTML = ("siz qoldinggiz")
        yutuq2.innerHTML = ("sizda yutuq")
    }
})
