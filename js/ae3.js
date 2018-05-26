const $addRectangle = $('#addRectangle');
const $canvas = $('#myCanvas');

$addRectangle.on('click', ()=>{
    if ($canvas.getContext) {
        var ctx = $canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
    //fillRect(x, y, width, height)
});

