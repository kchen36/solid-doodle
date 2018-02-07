var canvas = document.getElementById("slate");
var stop = document.getElementById("trigger");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
var shrink = false;
var requestID;
var animate = function(){
    window.cancelAnimationFrame(requestID);
    var x = 10;
    var drawcircle = function(){
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(250,250,x,0, 2* Math.PI);
	ctx.fill();
	if(x  >= 250){
	    shrink = true;
	}
	if(x <= 0){
	    shrink = false;
	}
	if(shrink){
	    x--;
	}
	else{
	    x++;
	}
	requestID = window.requestAnimationFrame(drawcircle);
	console.log(requestID);
    };
    drawcircle();
}
var stopit = function(){
    window.cancelAnimationFrame(requestID);
}
stop.addEventListener('click', stopit);
canvas.addEventListener('click',animate);
