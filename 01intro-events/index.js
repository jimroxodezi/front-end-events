


document.addEventListener('DOMContentLoaded', () => {

    const  btn = document.getElementById('btn');
    const link = document.getElementById('link');
    const txt = document.getElementById('txt');


    btn.addEventListener('click', (ev) => {
        console.log(`event type: ${ev.type}`);
        console.log(`event target: ${ev.target}`);
        console.log(`event current target: ${ev.currentTarget}`);
    });

    link.addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log(`event type: ${ev.type}`);
        console.log(`event target: ${ev.target}`);
        console.log(`event current target: ${ev.currentTarget}`);
    });

    txt.addEventListener('input', (ev) => {
        // console.log(`event type : ${ev.type}`);
        // console.log(`event target: ${ev.target}`);
        // console.log(`event current target: ${ev.currentTarget}`);
        console.log(ev.target.value);
    });

    txt.addEventListener('blur', (ev) => {
        console.log(ev.type);
    });

    txt.addEventListener('change', ev => {
        console.log(ev.type, ev.target);
    })
});