interface square{
    height : number;
    length : number;
}

function draw(figure : square){
    let canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    if(ctx == null)
        return;

    ctx.fillStyle = 'green';
    ctx.fillRect(50, 25, figure.length, figure.height);
    
}

let mysquare : square = {height: 20, length: 20};
draw(mysquare);

