console.log("fbbbb")
const box1 = document.querySelector(".content1a");
const box2 = document.querySelector(".content1b");
const box3 = document.querySelector(".content1c");
const box4 = document.querySelector(".content1d");
const box5 = document.querySelector(".content1e");
const stepcounter1 = document.querySelector("#step1");
const stepcounter2 = document.querySelector("#step2");
const stepcounter3 = document.querySelector("#step3");
const stepcounter4 = document.querySelector("#step4");
const stepcounter5 = document.querySelector("#step5");

let count = "a";

box1.addEventListener("click", () => {
    stepcounter1.style.background = "green";
    count = "b";
})

box2.addEventListener("click", () => {

    if (count != "b") {
        console.log("attempt level 1 first");
    }
    else {
        stepcounter2.style.background = "green";
    count = "c";
    }
    
})

box3.addEventListener("click", () => {

    if (count != "c") {
        console.log("attempt level 1 first");
    }
    else {
        stepcounter3.style.background = "green";
        count ="d";
    }
})
box4.addEventListener("click", () => {
    if (count != "d") {
        console.log("attempt level 1 first");
    }
    else {
        stepcounter4.style.background = "green";
        count = "e";
    }
})
box5.addEventListener("click", () => {

    if (count != "e") {
        console.log("attempt level 1 first");
    }
    else {
        stepcounter5.style.background = "green";
        count = "f";
    }
})
