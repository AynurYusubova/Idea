"use strict"
const computer=document.querySelector(".room .computer");
const p=document.querySelector(".computer p");
computer.addEventListener("click",function(){
    p.classList.toggle("active");
})

const picture=document.querySelector(".room .picture");
const building=document.querySelector(".picture .building");
const greybuild=document.querySelector(".picture .greybuild");
const violetbuild=document.querySelector(".picture .violetbuild");
picture.addEventListener("click",function(){
    building.classList.toggle("point");
})
 picture.addEventListener("click",function(){
    greybuild.classList.toggle("point")
 })
 picture.addEventListener("click",function(){
    violetbuild.classList.toggle("point")
 })

 const point=document.querySelector(".led-lampa .point");
 const circle=document.querySelector(".led-lampa .circle");
point.addEventListener("click",function(){
    circle.classList.toggle("active");
})



const element = document.querySelector(".window");
const icons = document.querySelectorAll("i"); 

element.addEventListener("click", function() {
    element.classList.toggle("active");
});

for(let j=0;j<icons.length;j++){
    icons[j].addEventListener("click",function(){
        icons[j].classList.toggle("point");
    });
}







