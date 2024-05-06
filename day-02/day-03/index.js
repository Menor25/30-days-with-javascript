// Day-03 of the 30-day Vanilla JavaScript coding trip
// Today we will explore the world of arrays and objects.
// To build a simple To-Do List app that allow users to add, remove and mark tasks as completed

// Task 1: Create an array to store the tasks
let tasks = [];

// Task 2: Create an object to represent each task with its properties (text, completed)
let task = {
    text: '',
    completed: false
};

// Task 3: Implementing the add task functionality
function addTask(text) {
    let newTask = {
        text: text,
        completed: false
    };
    tasks.push(newTask);
    displayTask();
}

// Task 4: Implementing remove task functionality
function removeTask(index) {
    tasks.splice(index, 1);
    displayTask();
}

// Task 5: Implementing the mark task as complete functionality
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTask();
}

// Task 6: Displaying the task
function displayTask() {
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        taskElement.dataset.index = index;
        if(task.completed) {
            taskElement.style.textDecoration = 'line-through';
        }
        taskElement.addEventListener('click', () => {
            removeTask(index);
        })
        taskList.appendChild(taskElement);
    }) 
}

// Add button
document.getElementById('add-task-btn').addEventListener('click', () => {
    let taskInput = document.getElementById('task-input');
    addTask(taskInput.value);
    taskInput.value = '';
})

document.getElementById('task-list').addEventListener('click', (event)=> {
    if (event.target.tagName === 'li') {
        let index = event.target.dataset.index;
        toggleComplete(index);
    }
})
displayTask();