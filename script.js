'use strict';

const books = document.querySelectorAll('.book');

console.log(books);
books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);


const newBody = document.querySelectorAll('head');


console.log(newBody);

document.head.style.backgroundImage = '/image/you-dont-know-js.jpg';


console.dir(document);

const mistake = document.querySelectorAll('a');

console.log(mistake);

mistake[2].innerHTML = 'Книга 3. this и Прототипы Объектов';

const banner = document.querySelectorAll('.adv');
banner[0].remove();


const chapters = document.querySelectorAll('ul');
console.log(chapters);
chapters[1].childNodes[21].before(chapters[1].childNodes[5]);
chapters[1].childNodes[6].after(chapters[1].childNodes[12]);
chapters[1].childNodes[9].before(chapters[1].childNodes[16]);
chapters[4].childNodes[4].after(chapters[4].childNodes[19]);
chapters[4].childNodes[11].after(chapters[4].childNodes[6]);
chapters[4].childNodes[17].after(chapters[4].childNodes[12]);

const newChapter = document.createElement('li');
console.dir(newChapter);

newChapter.textContent = 'Глава 8: За пределами ES6';
console.log(newChapter);

chapters[5].childNodes[19].before(newChapter);
