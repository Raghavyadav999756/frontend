
const taskForm = document.getElementById("taskForm");
const taskFeed = document.getElementById("taskFeed");

 taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");
  if (priority === "high") {
    taskDiv.style.borderLeft = "6px solid red";
  } else if (priority === "medium") {
    taskDiv.style.borderLeft = "6px solid orange";
  } else {
    taskDiv.style.borderLeft = "6px solid green";
  }
  taskDiv.innerHTML = `
    <h3>${title}</h3>
    <p class="priority">Priority: <strong>${priority}</strong></p>
    <button class="delete-btn">Delete</button>
  `;


  taskFeed.appendChild(taskDiv);


  taskForm.reset();

  const deleteBtn = taskDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
  });
});
