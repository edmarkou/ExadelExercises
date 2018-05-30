const addRectangle = document.getElementById('addRectangle');
const fillCanvas = document.getElementById('fillCanvas');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width / 10;
const canvasHeight = canvas.height / 10;
let blockedSpace = [];

addRectangle.addEventListener('click', ()=>{
    let goodToGo = false;
    do {
        let x = Math.floor(Math.random() * canvasWidth) * 10;
        let y = Math.floor(Math.random() * canvasHeight) * 10;
        let width = Math.floor(Math.random() * (canvasWidth - x / 10) + 1) * 10;
        let height = Math.floor(Math.random() * (canvasHeight - y / 10) + 1) * 10;

        if(blockedSpace.length === 0){
            ctx.fillStyle = getRGBA();              //gets the color and starts drawing the rectangle
            ctx.fillRect(x, y, width, height);
            blockedSpace.push([x, y, width, height]);
            break;
        }else {
            for (let i = 0; i < blockedSpace.length; i++) {
                if(rect_collision(x, y, width, height, blockedSpace[i][0], blockedSpace[i][1], blockedSpace[i][2], blockedSpace[i][3])){
                    goodToGo = false;
                    break;
                }else {
                    goodToGo = true;
                }
            }
        }
        if(goodToGo){
            ctx.fillStyle = getRGBA();     //start drawing the rectangle
            ctx.fillRect(x, y, width, height);
            blockedSpace.push([x, y, width, height]);       //stores the new rectangles coordinates
        }
    }while(goodToGo === false);
});

fillCanvas.addEventListener('click', ()=>{

    let counter = 0;
    let i = setInterval(function(){
        let goodToGo = false;
        do {
            let x = Math.floor(Math.random() * canvasWidth) * 10;
            let y = Math.floor(Math.random() * canvasHeight) * 10;
            let width = Math.floor(Math.random() * (canvasWidth - x / 10) + 1) * 10;
            let height = Math.floor(Math.random() * (canvasHeight - y / 10) + 1) * 10;

            if(blockedSpace.length === 0){
                ctx.fillStyle = getRGBA();              //gets the color and starts drawing the rectangle
                ctx.fillRect(x, y, width, height);
                blockedSpace.push([x, y, width, height]);
                break;
            }else {
                for (let i = 0; i < blockedSpace.length; i++) {
                    if(rect_collision(x, y, width, height, blockedSpace[i][0], blockedSpace[i][1], blockedSpace[i][2], blockedSpace[i][3])){
                        goodToGo = false;
                        break;
                    }else {
                        goodToGo = true;
                    }
                }
            }
            if(goodToGo){
                ctx.fillStyle = getRGBA();     //start drawing the rectangle
                ctx.fillRect(x, y, width, height);
                blockedSpace.push([x, y, width, height]);
            }
        }while(goodToGo === false);

        counter++;
        if(!ctx.getImageData(0, 0, canvasWidth, canvasHeight).data.includes(0)) {
            clearInterval(i);
        }
    }, 200);                                                    //fills the canvas 1 rectangle per 0.2 second until its full
});

function rect_collision(x1, y1, width1, height1, x2, y2, width2, height2) {
    let bottom1, bottom2, left1, left2, right1, right2, top1, top2;
    left1 = x1;
    right1 = x1 + width1;
    top1 = y1;
    bottom1 = y1 + height1;
    left2 = x2;
    right2 = x2 + width2;
    top2 = y2;
    bottom2 = y2 + height2;
    return !(left1 >= right2 || left2 >= right1 || top1 >= bottom2 || top2 >= bottom1);
}                                                               //checks if two rectangles collide with each other

function getRGBA(){
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 200) + 1;
    return 'rgba('+r+', '+g+', '+b+', 1)';
}                                                               //returns random color