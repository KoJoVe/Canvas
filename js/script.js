var global = 0;
var game = new Game();
$(document).ready(function(){
	
	var canvas = document.getElementById('myCanvas');
	canvas.width = $(window).width();
    canvas.height = $(window).height();

    game.begin(canvas);

	for(var i=0;i<1000;i++) {
		game.circles.push(new Circle());
	}

});

function Game() {
	this.circles = new Array();
}

Game.prototype.begin = function(canvas) {

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

	var self = this;

	setTimeout((function() {
	    self.context.clearRect(0, 0, self.canvas.width,self.canvas.height);
	    for(var i=0;i<1000;i++) {
	    	self.circles[i].move();
	    	if(self.circles[i].radius == 26) {
	    		self.circles[i].color = 'rgba('+0+','+0+','+0+',1)';
	    	}
	    }
	    for(var i=0;i<1000;i++) {
	    	self.circles[i].draw(self.context);
	    }
	    self.begin(self.canvas);
	}),16);
}

function Circle() {
	this.radius = Math.floor((Math.random() * 21) + 5);
	this.color = 'rgba('+0+','+Math.floor((Math.random()*156)+100)+','+Math.floor((Math.random()*156)+100)+',0.7)';
	this.x = Math.floor((Math.random() * $(window).width()) + 1);
	this.y = Math.floor((Math.random() * $(window).height()) + 1);
	this.setpX = (Math.round(Math.random()) * 2 - 1) * Math.floor((Math.random()*10)+1)/20;
	this.stepY = (Math.round(Math.random()) * 2 - 1) * Math.floor((Math.random()*10)+1)/20;
}

Circle.prototype.draw = function(context) {
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	context.fillStyle = this.color;
	context.fill();
	context.closePath();
}

Circle.prototype.move = function() {
	this.x += this.setpX; 
	this.y += this.stepY;
}