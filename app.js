document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);

            todoList.appendChild(taskElement);
            taskInput.value = '';
        }
    }

    function createTaskElement(taskText) {
        const taskElement = document.createElement('li');
        taskElement.textContent = taskText;

        taskElement.addEventListener('click', function () {
            taskElement.classList.toggle('completed');

            // Move task to completed column
            if (taskElement.classList.contains('completed')) {
                completedList.appendChild(taskElement);
            } else {
                todoList.appendChild(taskElement);
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskElement.remove();
        });

        taskElement.appendChild(deleteButton);

        return taskElement;
    }
});