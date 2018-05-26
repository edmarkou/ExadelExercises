const addRectangle = document.getElementById('addRectangle');
const fillCanvas = document.getElementById('fillCanvas');
const canvas = document.getElementById('myCanvas');

let coordinates = [];

// coordinates { 1, 2, 3, 4,....,150} for each x storing its own y coordinate array, creating a two dimentional array
for(let i = 0; i <= 150; i++){
    let yArray = [];
    for(let j = 0; j <= 60; j++){
        yArray[j] = 10*j;
    }
    coordinates[i] = yArray;
}

addRectangle.addEventListener('click', ()=>{
    let ctx = canvas.getContext('2d');
    let x;
    let y;
    let width;
    let height;
    //generating random parameters for rectangle
    do {
        x = Math.floor(Math.random() * coordinates.length);
        if(coordinates[x] !== false) {
            do {
                y = coordinates[x][Math.floor(Math.random() * 61)];
            }while(y === false);
            x = x * 10;
            // width and height is generated from 10 to (1500 - x) or (600 - y)
            // and has only integers with a 0 at the end, like 40, 410, 1200 so that the whole canvas could be filled without collision
            width = Math.floor(Math.floor(Math.random() * (1500 - x) + 10) / 10) * 10;
            height = Math.floor(Math.floor(Math.random() * (600 - y) + 10) / 10) * 10;
        }
        else
            x = false;
    }while(x === false); // checks if y and x coordinates isn't occupied already by a rectangle
    //while(y === false || x === false);
    console.log("x:" + x + " y:" + y + " width:" + width + " height:" + height); // for debugging purposes,
                                                                                     // to see if all integers are generated as expected

    for(let i = x/10; i <= (x + width)/10 ; i++){

        for(let j = y/10; j <= (y + height)/10; j++){
            coordinates[i][j] = false;
        }

        let xArrayFull = true;
        for(let k = 0; k < 61; k++){
            if(coordinates[i][k] !== false) {
                xArrayFull = false;
                break;
            }
        }
        if(xArrayFull)
            coordinates[i] = false;
        console.log("coordinates: " + i);
    }
    console.log(coordinates);



    //random color parameters
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 200);

    //start drawing the rectangle
    ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', 1)';
    ctx.fillRect(x, y, width, height);

});

fillCanvas.addEventListener('click', ()=>{

});


