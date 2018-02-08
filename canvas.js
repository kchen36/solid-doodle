var canvas = document.getElementById("slate");
var stop = document.getElementById("trigger");
var ctx = canvas.getContext("2d");
var grow = document.getElementById('size');
var bounce = document.getElementById("bounce");
ctx.fillStyle = "red";


var requestID;

var animate = function(){
    var shrink = false;
    window.cancelAnimationFrame(requestID);
    var x = 10;
    var drawcircle = function(){
	ctx.clearRect(0,0,652,500);
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

var animate2 = function(){
    var x = 25;
    var y = 240;
    var xincrease = true;
    var yincrease = false;
    window.cancelAnimationFrame(requestID);
    var bounce = function(){
	ctx.clearRect(0,0,652,500);
	ctx.beginPath();
	ctx.arc(x,y,25,0, 2* Math.PI);
	ctx.fill();
	if(x  >= 627){
	    xincrease = false;
	}
	if(x <= 25){
	    xincrease = true;
	}
	if(y  >= 475){
	    yincrease = false;
	}
	if(y <= 25){
	    yincrease = true;
	}
	if(xincrease){
	    x++;
	}
	else{
	    x--;
	}
	if(yincrease){
	    y++;
	}
	else{
	    y--;
	}
	requestID = window.requestAnimationFrame(bounce);
	console.log(requestID);
    };
    window.requestAnimationFrame(bounce);
}

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}
stop.addEventListener('click', stopit);
grow.addEventListener('click',animate);
bounce.addEventListener('click',animate2);
