const form = document.getElementById("taskForm");
const taskFeed = document.getElementById("taskFeed");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const description = document.getElementById("description").value.trim();

  const task = {
    id: Date.now(),
    title,
    dueDate,
    description,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  form.reset();
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskFeed.innerHTML = "";

  const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  sortedTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task" + (task.completed ? " completed" : "");

    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <time>🕒 ${new Date(task.dueDate).toLocaleString()}</time>
      ${task.description ? `<p>${task.description}</p>` : ""}
      <div class="actions">
        <button class="complete-btn" onclick="toggleComplete(${task.id})">
          ${task.completed ? "✅ Completed" : "✔️ Mark Complete"}
        </button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️ Delete</button>
      </div>
    `;

    taskFeed.appendChild(taskDiv);
  });
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Initial render
renderTasks();
