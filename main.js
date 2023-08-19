const createTask = document.querySelector("#newtask"); // select the id with task input
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");
const clear = document.querySelector(".clear");
const taskPriority = document.querySelector("#priority");
const taskDesc = document.querySelector("#taskDesc");

function createNewItem(inputValue, description, priority) { // create new item 
    const task = document.createElement("li");
    const desc = document.createElement("span"); 
    const span = document.createElement("span");
    const prioritySpan = document.createElement("span"); 
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    
    span.textContent = inputValue;
    desc.textContent = description;
    prioritySpan.textContent = priority; 
    delBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    
    task.appendChild(span);
    task.appendChild(desc);
    task.appendChild(prioritySpan); 
    task.appendChild(delBtn);
    task.appendChild(editBtn);
  
    delBtn.addEventListener("click", function () {
        // When the delete button is clicked, remove the entire task item
      task.parentNode.removeChild(task);
    });
    editBtn.addEventListener("click", function () {
        // When the edit button is clicked, edit title
      span.contentEditable = true;
      span.focus();
    });
  
    return task;
}

form.addEventListener("submit", function (event) { // after clicking
    event.preventDefault();
    if (createTask.value == "") { // if empty
        alert("please add Some Text");
    } 
    else if(taskPriority==" "){
        alert("please choose the priority");
    } 
    else if (taskDesc.value == "") {
        alert("please add Some Text");
    } 
    
    else {
        const newTask = createNewItem(createTask.value, taskDesc.value, taskPriority.value); // if no prob
        toDoList.appendChild(newTask);
        createTask.value = "";
        createTask.focus();
        taskPriority.value = "";
        taskDesc.value = ""; 
        clear.classList.remove("d-none");
    }

    clear.addEventListener("click", function () { // clear event
        toDoList.innerHTML = "";
    });
});
