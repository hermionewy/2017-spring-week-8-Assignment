//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
//Store drawing context as a variable
//Hint: use canvas.getContext('2d');
var w = d3.select('.plot').node().clientWidth, //find the width and height of the elements
	h = d3.select('.plot').node().clientHeight;

var canvas = d3.select('#plot1').append('canvas')
		.attr('width',w)
		.attr('height',h)
		.node();
var context = canvas.getContext('2d');

//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'
context.fillStyle = 'rgb(250,250,250)';
context.fillRect(0,0,w,h);
//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops
context.strokeStyle ='rgb(180,180,180)';
context.lineWidth = 0.3;

context.beginPath();
for (var i=0; i<w; i+=50){
			context.moveTo(i,0);//vertical line
			context.lineTo(i,h);
}
for(var j=h; j>0; j=j-50){
	//horizontal line
	context.moveTo(0,j);
	context.lineTo(w,j);
}
	context.stroke();

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
context.fillStyle ='rgba(255,0,0,1)';
context.fillRect(50,50,50,50);

//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
//Hint: use context2D.fillRect and context2D.strokeRect
context.strokeStyle ='rgba(255,0,0,1)';
context.lineWidth = 1;
context.strokeRect(150,50,50,50);

// Part 5: Draw a series of circles and lines using the context2D path commands, as shown
context.beginPath()
context.arc(100,200,50,0,Math.PI*2);
context.save()
context.globalAlpha = .5;
context.fill();
context.restore();

context.beginPath();
context.arc(400,200,50,0,Math.PI*2);
context.moveTo(750,200);
context.arc(700,200,50,0,Math.PI*2);

context.strokeStyle='rgb(255,0,0)'
context.stroke();

context.beginPath();
context.moveTo(100,200);
context.quadraticCurveTo(250,100,400,200);
context.stroke();

context.beginPath();
context.moveTo(400,200);
context.quadraticCurveTo(550,300,700,200);
context.stroke();

//Draw blue dash lines
context.save();
context.beginPath();
context.moveTo(100,200);
context.lineTo(250,100);
context.lineTo(400,200);
context.setLineDash([4,4]);
context.strokeStyle='rgb(0,0,255)';
context.stroke();
context.restore();

context.beginPath();
context.moveTo(400,200);
context.quadraticCurveTo(550,300,700,200);
context.stroke();

// Part 6: Label each circle with coordinates
// Hint: context2D.fillText
context.save();
context.fillStyle='rgb(100,100,100)';
context.fillText('(100,200)',100,200);
context.fillText('(400,200)',400,200);
context.fillText('(700,200)',700,200);
context.fillStyle='rgb(0,0,255)';
context.fillText(' Quardatic curve needs a control point at (250,100)',250,100);
context.restore();

// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it
var canvas2 = d3.select('#plot2').append('canvas')
		.attr('width',w)
		.attr('height',h)
		.node();

var context2 = canvas2.getContext('2d');
context2.drawImage(canvas, 0, 0);
