document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    handleTodo();
    form.reset();
   });

  function handleTodo(todo){
    todo = document.getElementById("new_task_description").value; 
    let li = document.createElement("LI");
    let BTN = document.createElement("button");
    BTN.addEventListener("click", deleteToDo);
    BTN.textContent = "delete"
    li.textContent = `${todo}`;
    let tasks = document.getElementById("tasks");
    tasks.appendChild(li);
    li.appendChild(BTN);
   }
   function deleteToDo(e){
    e.target.parentNode.remove();
   }
});
