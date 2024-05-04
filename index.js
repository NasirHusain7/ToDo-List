
const taskInput = document.querySelector("#task");
const btn = document.querySelector(".submit");
const output = document.querySelector(".output-box");

let task = JSON.parse(localStorage.getItem('task')) || [];

function renderTask() {
    output.innerHTML = '';

    task.forEach((taskItem, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <span class="${taskItem.completed ? 'completed' : ''} op">${taskItem.text}</span>
        <button onclick="markAsCompleted(${index})">Done</button>
        <button onclick="deleteTask(${index})">Delete</button>
        `;
        output.appendChild(div);
    });
}


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        task.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTask();
        renderTask();
    }
}


function markAsCompleted(index) {
    task[index].completed = !task[index].completed;
    saveTask();
    renderTask();
}


function deleteTask(index) {
    task.splice(index, 1);
    saveTask();
    renderTask();
}


function saveTask() {
    localStorage.setItem('task', JSON.stringify(task));
}


btn.addEventListener('click', addTask);


renderTask();
