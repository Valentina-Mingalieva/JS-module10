// Create counter with template

'use strict';

import Counter from './counter.js';

const counter = new Counter({
    selector: '.counter-1',
    initialValue: 10,
    step: 10,
});

const counter2 = new Counter({
    selector: '.counter-2',
    initialValue: 5,
    step: 5,
});

// могу отдельно контролировать компонент с помощью API

document
    .querySelector('#b1-minus')
    .addEventListener('click', counter2.handleDecrement);

document
    .querySelector('#b1-plus')
    .addEventListener('click', counter2.handleIncrement);