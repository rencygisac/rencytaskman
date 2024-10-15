let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput !== "") {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = ""; // Clear input field
        displayTasks();
    } else {
        alert("Please enter a task");
    }
}

function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop();
        displayTasks();
    } else {
        alert("No tasks to remove");
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Clear previous task list

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.innerText = `${i + 1}. ${tasks[i]}`;
        taskList.appendChild(li);
    }
}
