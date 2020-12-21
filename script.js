const todoList = document.querySelector('#to-do-list');
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTodoInput = document.querySelector("#input");
  const newLi = document.createElement("li");
  newLi.innerText = newTodoInput.value;

  const completedButton = document.createElement("button");
  completedButton.innerText = "Mark as completed";
  completedButton.addEventListener("click", function(event) {
    event.target.previousSibling.textContent = event.target.previousSibling.textContent.strike();
	});

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
  


	todoList.append(newLi);
  newLi.append(completedButton);
  newLi.append(deleteButton);
  
  form.reset();
});
