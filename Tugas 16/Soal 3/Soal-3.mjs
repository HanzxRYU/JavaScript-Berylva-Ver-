const ul = document.createElement("ul");
const items = ["item 1", "item 2", "item 3"];
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  ul.appendChild(li);
}

const firstLi = ul.firstElementChild;
ul.removeChild(firstLi);

document.getElementById("Konten").appendChild(ul);
