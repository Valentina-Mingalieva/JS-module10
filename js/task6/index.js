'use strict';

/* TODO list with
 * 1. Saving data in local storage
 * 2. Removing btn */

import template from './todos.hbs';
import Storage from './storage.js';

const refs = {
    form: document.querySelector('.form'),
    todoList: document.querySelector('.todo-list'),
}

const todoList = Storage.load() || [];

const handleSubmit = e => {
    e.preventDefault();

    todoList.push({
        id: Date.now(),
        value: e.target.elements.text.value,
    })
    Storage.save(todoList);
    e.target.elements.text.value = '';

    renderer(todoList);
}

const renderer = list => {
    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', template({
        todos: list,
    }),
    );

    for (const item of list) {
        const button = document.querySelector('#btn-${item.id}');
        button.addEventListener('click', () => {
            const todoListItemIndex = todoList.findIndex(i => i.id === item.id);
            if (todoListItemIndex > -1) {
                todoList.splice(todoListItemIndex, 1);
                Storage.save(todoList);
                renderer(todoList);
            }
        })
    }
}

renderer(todoList);

refs.form.addEventListener('submit', handleSubmit());