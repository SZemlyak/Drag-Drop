const containers = document.querySelectorAll(".container");
const item = document.querySelector(".item");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const container of containers) {
  container.addEventListener("dragover", dragover);
  container.addEventListener("dragenter", dragenter);
  container.addEventListener("dragleave", dragleave);
  container.addEventListener("drop", dragdrop);

  console.log(container);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend() {
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
