const addRectangle = document.getElementById('addRectangle');
const fillCanvas = document.getElementById('fillCanvas');
const canvas = document.getElementById('myCanvas');

let coordinates = [];

// creating two dimentional array for coordinates, each x has its own y.
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
        y = coordinates[x][Math.floor(Math.random() * 61)];
        if(coordinates[x] !== false && y !== false) {
            x = x * 10;
            do {
                width = Math.floor(Math.floor(Math.random() * (1500 - x) + 10) / 10) * 10;
                height = Math.floor(Math.floor(Math.random() * (600 - y) + 10) / 10) * 10;
            }while(coordinates[x/10+width/10][y/10] === false ||
            coordinates[x/10][y/10+height/10] === false ||
            coordinates[x/10+width/10][y/10+height/10] === false);
        }
        else
            x = false;
    }while(x === false);

    console.log("x:" + x + " y:" + y + " width:" + width + " height:" + height); // for debugging purposes,
                                                                                 // to see if all integers are generated as expected

    //fills in all of the coordinates that the rectangle has occupied to false
    for(let i = x/10; i <= (x + width)/10 ; i++){

        for(let j = y/10; j <= (y + height)/10; j++){
            coordinates[i][j] = false;
        }
        // checks if the whole x's y coordinates are false
        let xArrayFull = true;
        for(let k = 0; k < 61; k++){
            if(coordinates[i][k] !== false) {
                xArrayFull = false;
                break;
            }
        }
        if(xArrayFull)
            coordinates[i] = false;         // if it is, makes the x coordinate with no y left false
    }
    console.log(coordinates); //for debugging



    //random color parameters
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 200);

    //start drawing the rectangle
    ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', 1)';
    ctx.fillRect(x, y, width, height);

});

fillCanvas.addEventListener('click', ()=>{
    do{let ctx = canvas.getContext('2d');
        let x;
        let y;
        let width;
        let height;
        //generating random parameters for rectangle
        do {
            x = Math.floor(Math.random() * coordinates.length);
            y = coordinates[x][Math.floor(Math.random() * 61)];
            if(coordinates[x] !== false && y !== false) {
                x = x * 10;
                do {
                    width = Math.floor(Math.floor(Math.random() * (1500 - x) + 10) / 10) * 10;
                    height = Math.floor(Math.floor(Math.random() * (600 - y) + 10) / 10) * 10;
                }while(coordinates[x/10+width/10][y/10] === false ||
                coordinates[x/10][y/10+height/10] === false ||
                coordinates[x/10+width/10][y/10+height/10] === false);
            }
            else
                x = false;
        }while(x === false);

        console.log("x:" + x + " y:" + y + " width:" + width + " height:" + height); // for debugging purposes,
                                                                                     // to see if all integers are generated as expected

        //fills in all of the coordinates that the rectangle has occupied to false
        for(let i = x/10; i <= (x + width)/10 ; i++){

            for(let j = y/10; j <= (y + height)/10; j++){
                coordinates[i][j] = false;
            }
            // checks if the whole x's y coordinates are false
            let xArrayFull = true;
            for(let k = 0; k < 61; k++){
                if(coordinates[i][k] !== false) {
                    xArrayFull = false;
                    break;
                }
            }
            if(xArrayFull)
                coordinates[i] = false;         // if it is, makes the x coordinate with no y left false
        }
        console.log(coordinates); //for debugging



        //random color parameters
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 200);

        //start drawing the rectangle
        ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', 1)';
        ctx.fillRect(x, y, width, height);
    }while(coordinates[0] !== false)

});


