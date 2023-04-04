let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newTask = document.createElement('li');
    newTask.textContent = input.value;

    list.append(newTask);
    input.value = '';
};