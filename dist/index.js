"use strict";
var el = document.getElementById('helloworld');
el.innerHTML = "Hello World";
function draw(figure) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    if (ctx == null)
        return;
    ctx.fillStyle = 'green';
    ctx.fillRect(50, 25, figure.length, figure.height);
}
var mysquare = { height: 20, length: 20 };
draw(mysquare);
