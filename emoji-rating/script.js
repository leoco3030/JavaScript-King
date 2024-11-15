const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArr = ["red", "orange", "lightblue", "lightgreen", "lime"];

updateRating(4);

console.log(starsEl);

starsEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        updateRating(index)={
        }
    })
})

function updateRating(index) {
    starsEl.forEach((starEl, idx)=>{
        if (idx < index + 1) {
            starEl.classList.add("active");
        }
        else {
            starEl.classList.remove("active");
        }
    })

    emojisEl.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArr[index];
    })
}