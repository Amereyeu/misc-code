
let list = document.querySelector(".list");
let item = document.querySelector(".list__item");
let itemWidth = item.offsetWidth;

document
  .querySelector(".button.previous")
  .addEventListener("click", function () {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

document.querySelector(".button.next").addEventListener("click", function () {
  list.scrollBy({ left: itemWidth, behavior: "smooth" });
});
