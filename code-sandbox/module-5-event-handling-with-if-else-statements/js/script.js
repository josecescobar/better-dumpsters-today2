var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerHTML = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    buttoninnerHTML = "Shoo, cat";
    button.classList.remove("disappear");
  }
});
