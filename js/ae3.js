const addRectangle = document.getElementById('addRectangle');
const fillCanvas = document.getElementById('fillCanvas');
const canvas = document.getElementById('myCanvas');

addRectangle.addEventListener('click', ()=>{
    let ctx = canvas.getContext('2d');

    //random parameters for rectangle
    let y = Math.floor(Math.random() * 600);
    let x = Math.floor(Math.random() * 1500);
    let width = Math.floor(Math.random() * 1500);
    let height = Math.floor(Math.random() * 650);

    //random color parameters
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 200);


    ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', 1)';
    ctx.fillRect(x, y, width, height);

});

fillCanvas.addEventListener('click', ()=>{
    //ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    //fillRect(x, y, width, height)
});


