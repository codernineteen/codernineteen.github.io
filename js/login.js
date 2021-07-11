//localStorage, check classList
const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector(".greeting");
const clockClone = document.querySelector(".clock");
const toDoClone = document.querySelector(".todo-container")
const backgroundClone = document.querySelector(".background");
const saveListClone = document.querySelector(".save__button");

function savedUser() {
    return localStorage.getItem('user');
}

function defaultAction() {
    greeting.innerText = `Welcome ${savedUser()}`;
    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
    clockClone.classList.remove("hidden");
    toDoClone.classList.remove("hidden");
    backgroundClone.classList.remove("hidden");
    saveListClone.classList.remove("hidden");
}

function addUser(evt) {
    evt.preventDefault();
    const newUser = loginInput.value;
    localStorage.setItem('user', newUser);
    defaultAction()
}

if (savedUser()) {
    defaultAction()
} else {
    loginForm.addEventListener('submit', addUser);
}




