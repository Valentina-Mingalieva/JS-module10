// 4. Using jquery, create on click 'hello button', show "hello text and hide "goodbye".

const helloBtnRef = $('#hello-btn');
const goodbyeBtnRef = $('#goodbye-btn');

const helloImg = $('#hello-img');
const goodbyeImg = $('#goodbye-img');

helloImg.hide(); // style='display: none;'
goodbyeImg.hide(); // style='display: none;'

helloBtnRef.click(() => {
    goodbyeImg.hide();
    helloImg.show();
    helloBtnRef.hide();
    goodbyeBtnRef.show();
})

goodbyeBtnRef.click(() => {
    goodbyeImg.show();
    helloImg.hide();
    goodbyeBtnRef.hide();
    helloBtnRef.show();
})

