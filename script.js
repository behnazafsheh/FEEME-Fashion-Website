const menuBox = document.querySelectorAll(".form");
menuBox.forEach((elem) => {
  elem.addEventListener("click", () => {
    for (let i = 0; i < menuBox.length; i++) {
      menuBox[i].classList.remove("active");
    }
    elem.classList.add("active");
  });
});