const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".books");
const items = JSON.parse(localStorage.getItem("items")) || [];

const deleteAll = document.querySelector(".delete-all");

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    returned: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(books = [], booksList) {
  booksList.innerHTML = books
    .map((book, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        book.returned ? "checked" : ""
      } />
          <label for="item${i}">${book.text}</label>
          <button class="delete">D</button>
        </li>
      `;
    })
    .join("");
}

function toggleReturned(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;

  items[index].returned = !items[index].returned;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAllItems(e) {
  e.preventDefault();

  localStorage.clear();
  console.log(localStorage.length);

  const items = [];
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleReturned);
deleteAll.addEventListener("click", deleteAllItems);
