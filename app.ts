import { Task, TaskStatus, addTask, filterByStatus } from "./model.js";

let tasks: Task[] = [];
let currentFilter: "all" | TaskStatus = "all";

// DOM Elements with TypeScript Type Assertions
const titleInput = document.getElementById("title") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;
const filterBtns = document.querySelectorAll("#filters button");

// Function to render tasks onto the screen
function render() {
  listEl.innerHTML = "";

  const filtered = currentFilter === "all"
    ? tasks
    : filterByStatus(tasks, currentFilter);

  filtered.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <span>${task.title}</span>
      <strong>[${task.status}]</strong>
    `;
    listEl.appendChild(li);
  });
}

// Add task event
addBtn.onclick = () => {
  const title = titleInput.value.trim();
  if (!title) return;
  tasks = addTask(tasks, title);
  titleInput.value = "";
  render();
};

// Filter event listeners
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement;
    currentFilter = target.dataset.filter as "all" | TaskStatus;
    render();
  });
});

render();