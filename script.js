// Initialize tasks array
let tasks = [];

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add tasks
function addTask(taskText, save = true) {
    // Check if taskText is not empty
    if (!taskText.trim()) {
        alert("Please enter a task!");
        return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');
    removeButton.onclick = () => {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    };

    // Append button to li and li to task list
    li.appendChild(removeButton);
    document.getElementById('task-list').appendChild(li);

    if (save) {
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Clear the input field
    document.getElementById('task-input').value = '';
}

// Function to remove a task from Local Storage
function removeTaskFromLocalStorage(taskText) {
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    // Event listener for adding tasks
    document.getElementById('add-task-btn').addEventListener('click', () => {
        const taskInput = document.getElementById('task-input').value;
        addTask(taskInput);
    });

    // Event listener for pressing Enter
    document.getElementById('task-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskInput = document.getElementById('task-input').value;
            addTask(taskInput);
        }
    });
});
