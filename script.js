const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");
const todoContainer = document.querySelector(".container");

addTodo.addEventListener("click", (e) => {
if (inputTodo.value != ""){
    displayTodo(inputTodo.value);
    inputTodo.value = "";
}
});

function displayTodo(todoValue){
    let todowrapper = document.createElement("div");
    todowrapper.classList.add("todo-wrapper");

    todowrapper.innerHTML =
      `<div class="todo bg-white flex items-center justify-between mx-20 text-2xl py-2 px-2 my-2 rounded">
        <p>${inputTodo.value}</p>
        <div class="actions">
          <input type="checkbox" class="mr-4">
          <button class="delete-btn bg-red-700 px-2 py-y text-white rounded ">Delete</button>
        </div>
      </div>`;

      let deleteBtn = todowrapper.querySelector(".delete-btn")
      deleteBtn.addEventListener("click", function delTodo() {
        todowrapper.remove();

      })

      todoContainer.appendChild(todowrapper);
}