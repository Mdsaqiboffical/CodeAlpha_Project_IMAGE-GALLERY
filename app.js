let closeBtn = document.getElementById("close-btn")
let showImg = document.querySelector(".show-img")

document.querySelectorAll(".img-wrapper img").forEach(image => {
    image.onclick = () => {
        showImg.style.display = "block"
        document.querySelector(".show-img img").src = image.getAttribute("src")
    }
})
closeBtn.addEventListener("click", () => {
    showImg.style.display = "none";
})