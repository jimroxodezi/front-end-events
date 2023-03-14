

let m = document.getElementById('main');
let d = document.getElementById('div');
let p = document.getElementById('p');
let s = document.getElementById('s');

let highlight = (ev) => {
    ev.currentTarget.className = 'gold';
    ev.stopImmediatePropagation();
};

d.addEventListener('click', (ev) => {
    // ev.stopPropagation();
    console.log("I'm a div");
});

m.addEventListener('click', ev => {
    console.log("i'm main");
});

p.addEventListener("click", ev => {
    console.log("I'm p");
});

s.addEventListener('click', ev => {
    console.log("I'm span");
});


[m,d,p,s].forEach((elem) => {
    elem.addEventListener('click', highlight);
});