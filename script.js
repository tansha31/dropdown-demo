const selectMenu = document.querySelector(".select-menu"),
    selectBtn = document.querySelector(".select-btn"),
    sBtnText = document.querySelector(".sBtn-text"),
    options = document.querySelectorAll(".option");

selectBtn.addEventListener("click", () =>
    selectMenu.classList.toggle("active")
);

options.forEach((option) => {
    option.addEventListener("click", () => {
        sBtnText.innerText = option.innerText;
        selectMenu.classList.remove("active");
    });
});
