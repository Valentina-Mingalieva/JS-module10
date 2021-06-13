'use strict';

// 5. Create user presentationlist

import userTPL from './userlist.hbs';

const data = {
    title: 'My User List',
    data: {
        users: [
            { name: 'Bobby', age: 15, isAdult: false },
            { name: 'Ann', age: 25, isAdult: true },
            { name: 'Johnny', age: 60, isAdult: true },
        ]
    }
}

const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', userTPL(data));