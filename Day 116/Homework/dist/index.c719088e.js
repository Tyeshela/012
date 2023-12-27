document.getElementById("add-todo").addEventListener("click", ()=>{
    const newTodoInput = document.getElementById("new-todo");
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText) {
        const todoList = document.getElementById("todo-list");
        const listItem = document.createElement("li");
        listItem.textContent = newTodoText;
        todoList.appendChild(listItem);
        newTodoInput.value = "";
    }
});

//# sourceMappingURL=index.c719088e.js.map
