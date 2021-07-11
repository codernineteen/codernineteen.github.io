const toDoForm = document.querySelector('#todo');
const toDoInput = document.querySelector('#todo input')
const toDoList = document.querySelector('.todo__list');
const saveList = document.querySelector('.save__list');

let toDoArr = [];

function deleteItem(evt) {
    const li = evt.target.parentElement.parentElement
    li.remove();
    toDoArr = toDoArr.filter((toDo) => String(toDo.id) !== li.id);
    saveItem()
}

function achievedGoal(evt) {
    const achievedItem = document.createElement('li');
    achievedItem.appendChild(evt.path[2].children[0]);
    saveList.appendChild(achievedItem);
    const li = evt.path[2];
    li.remove();
    toDoArr = toDoArr.filter((toDo) => String(toDo.id) !== li.id);
    saveItem()
}

function saveItem() {
    localStorage.setItem('todo', JSON.stringify(toDoArr));
}

function toDoWithId(newToDo) {
    const toDoItem = document.createElement('li');
    toDoItem.id = newToDo.id;
    const deleteBtn = document.createElement('button');
    const successBtn = document.createElement('button');
    toDoItem.innerHTML = `- <span>${newToDo.text}</span>`;
    successBtn.innerHTML = '<i class="far fa-save"></i>';
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';

    deleteBtn.addEventListener('click', deleteItem);
    successBtn.addEventListener('click', achievedGoal);

    toDoItem.appendChild(successBtn);
    toDoItem.appendChild(deleteBtn);
    toDoList.appendChild(toDoItem);

}

function addToDo(evt) {
    evt.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = { id: Date.now(), text: newToDo };
    toDoArr.push(newToDoObj);
    toDoWithId(newToDoObj)
    saveItem();
    toDoInput.value = null;
}


toDoForm.addEventListener('submit', addToDo);

const backUp = localStorage.getItem('todo');
if (backUp) {
    const parsedToDo = JSON.parse(backUp);
    toDoArr = parsedToDo;
    toDoArr.forEach(toDoWithId);
}