document.getElementById("form-Task").addEventListener("submit", saveTask);
//save new to do

function saveTask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let task = {
    title,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    //error
    // tasks.push(tasks);
    tasks.push(task); // Correct

    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks();
  document.getElementById("form-Task").reset();
  e.preventDefault();
}

//delete td do

function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}

//show todo
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
                <div class ="card-body">
                    <div class ="row">
                    <div class="col-sm-3 text-left ">
                    <p>${title}</p>
                    </div>
                    <div class="col-sm-7 text-left ">
                    <p>${description}</p>
                    </div>
                    <div class="col-sm-2 text-right">
                    
                    <a class ="btn btn-danger ml-5 " href="#" onclick="deleteTask('${title}')">X</a>
                    </div>

                    </div>
                </div>
            </div>`;
  }
}

getTasks();
