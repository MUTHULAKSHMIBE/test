// Initialize the todo list array
let toDos = [];

// Function to add a new todo item to the list
function addTodo() {
    const todoItem = document.getElementById('todo-item').value;
    if (todoItem) {
        todos.push(todoItem); // Add the todo item to the array
        updateTodoList();
        document.getElementById('todo-item').value = ''; // Clear the input field
    }
}

// Function to update the displayed todo list
function updateTodoList() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear the current list

    // Loop through the todos array and create list items
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${todo}
            <button onclick="removeTodo(${index})">Remove</button>
        `;
        todoList.appendChild(listItem);
    });
}

// Function to remove a todo item from the list
function removeTodo(index) {
    todos.splice(index, 1); // Remove the item from the array
    updateTodoList();
}

// Initial update of the todo list
updateTodoList();
// Initialize the todo list array
let todos = [];

// Function to add a new todo item to the list
function addTodo() {
    const todoItem = document.getElementById('todo-item').value;
    if (todoItem) {
        todos.push(todoItem); // Add the todo item to the array
        updateTodoList();
        document.getElementById('todo-item').value = ''; // Clear the input field
    }
}

// Function to update the displayed todo list
function updateTodoList() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear the current list

    // Loop through the todos array and create list items
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${todo}
            <button onclick="removeTodo(${index})">Remove</button>
        `;
        todoList.appendChild(listItem);
    });
}

// Function to remove a todo item from the list
function removeTodo(index) {
    todos.splice(index, 1); // Remove the item from the array
    updateTodoList();
}

// Initial update of the todo list
updateTodoList();
