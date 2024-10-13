// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Ensure the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Event listener to remove the task when the button is clicked
        removeBtn.onclick = () => {
            taskItem.remove();
        };

        // Append the remove button to the task
        taskItem.appendChild(removeBtn);

        // Append the task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing "Enter"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
