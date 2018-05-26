const addRectangle = document.getElementById('addRectangle');
const fillCanvas = document.getElementById('fillCanvas');
const canvas = document.getElementById('myCanvas');

let xArray = [];
let yArray = [];

for(let i = 0; i <= 1500; i++){
    xArray[i] = i;
}
for(let i = 0; i <= 600; i++){
    yArray[i] = i;
}
//var item = xArray[Math.floor(Math.random()*xArray.length)];

addRectangle.addEventListener('click', ()=>{
    let ctx = canvas.getContext('2d');
    let x;
    let y;
    let width;
    let height;
    //generating random parameters for rectangle
    do {
        y = yArray[Math.floor(Math.random() * yArray.length)];
        x = xArray[Math.floor(Math.random() * xArray.length)];
        width = Math.floor(Math.random() * (1500 - x) + 1);
        height = Math.floor(Math.random() * (600 - y) + 1);
    }while(y === false || x === false);

    console.log("x: " + x + " y: " + y + " width: " + width + " height: " + height);

    for(let i = x; i <= x + width; i++){
        xArray[i] = false;
    }
    for(let i = y; i <= y + height; i++){
        yArray[i] = false;
    }

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


