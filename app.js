document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');
    const dueDateInput = document.getElementById('dueDateInput');

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
        function createTaskElement(taskText, dueDate) {
    const taskElement = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    if (dueDate) {
        const dateSpan = document.createElement('span');
        dateSpan.textContent = ` (Due: ${dueDate})`;
        dateSpan.classList.add('due-date');
        textSpan.appendChild(dateSpan);
    }

    taskElement.appendChild(textSpan);

}

    const dueDate = dueDateInput.value;

          if (taskText !== '') {
    const taskElement = createTaskElement(taskText, dueDate);
    todoList.appendChild(taskElement);
    taskInput.value = '';
    dueDateInput.value = ''; // clear date
}

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskElement.remove();
        });

        taskElement.appendChild(deleteButton);

        return taskElement;
    }
});
