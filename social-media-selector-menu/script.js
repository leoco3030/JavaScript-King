const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p")
const socialListEl = document.querySelector(".social-list");
const socialIconEls = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", ()=> {
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
})

socialIconEls.forEach(socialIconEl=>{
    socialIconEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = socialIconEl.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})