card = document.querySelectorAll(".card");
for (i of card) {
    i.addEventListener("click", function (e) {
        const content = this.querySelector(".content");
        content.classList.toggle("content_show");
    });
}