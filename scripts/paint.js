/*
	paint.js
	Parviz Mozaffari
	pamo0800
	pamo0800@student.miun.se
*/
		
var honda = new Image();
honda.src = "images/honda.png";
		
var cow = new Image();
cow.src = "images/cow.png";
		
var fighter = new Image();
fighter.src = "images/fighter.png";
		
var pigInSky = new Image();
pigInSky.src = "images/pigInSky.gif";
		
var fishTrans = new Image();
fishTrans.src = "images/fishTrans.png";
		
var flowers = new Image();
flowers.src = "images/flowers.jpg";
		
var girl = new Image();
girl.src = "images/girl.jpg";
		
var happyFace = new Image();
happyFace.src = "images/happyFace.jpg";		
		
var bg = document.getElementById('background');
var bg_ctx = bg.getContext('2d');		
	
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
				
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
		
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));
		
bg.width = parseInt(paint_style.getPropertyValue('width'));
bg.height = parseInt(paint_style.getPropertyValue('height'));
						
var currWidth = 5;
var currColor = '#000000';
var mouse = {x: 0, y: 0};
		
function init(){
		
	var selectColor = document.getElementById('selectColor');
	selectColor.value = currColor;
	selectColor.addEventListener("change", function() {currColor = this.value;}, false);
			
	var points = document.getElementById('points');
	points.value = currWidth;
	points.addEventListener("change", function() {currWidth = this.value;}, false);
			
					
	document.getElementById('redButton').addEventListener("click", 
		function() {currColor = '#FF0000'; document.getElementById("selectColor").value = "#FF0000";}, false);
			
	document.getElementById('greenButton').addEventListener("click", 
		function() {currColor = '#008000'; document.getElementById("selectColor").value = "#008000";}, false);
			
	document.getElementById('blueButton').addEventListener("click", 
		function() {currColor = '#0000FF'; document.getElementById("selectColor").value = "#0000FF";}, false);
			
	document.getElementById('blackButton').addEventListener("click", 
		function() {currColor = '#000000'; document.getElementById("selectColor").value = "#000000";}, false);
			
	document.getElementById('yellowButton').addEventListener("click", 
		function() {currColor = '#FFFF00'; document.getElementById("selectColor").value = "#FFFF00";}, false);
			
	document.getElementById('brownButton').addEventListener("click", 
		function() {currColor = '#A52A2A'; document.getElementById("selectColor").value = "#A52A2A";}, false);
			
	document.getElementById('eraser').addEventListener("click", 
		function() {currColor = '#FFFFFF'; document.getElementById("selectColor").value = "#FFFFFF";}, false);
			
	document.getElementById('clear').addEventListener("click", function() 
		{ctx.clearRect(0, 0, canvas.width, canvas.height);}, false);
			
	document.getElementById('cow').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height); 
		 bg_ctx.drawImage(cow, 0, 0);}, false);
				
	document.getElementById('fighter').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(fighter, 0, 0);}, false);
				
	document.getElementById('pigInSky').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(pigInSky, 0, 0);}, false);	
				
	document.getElementById('honda').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(honda, 0, 0);}, false);
				 
	document.getElementById('fishTrans').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(fishTrans, 0, 0);}, false);
				 
	document.getElementById('flowers').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(flowers, 0, 0);}, false);
				 
	document.getElementById('girl').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(girl, 0, 0);}, false);
			
	document.getElementById('happyFace').addEventListener("click", function() 
		{bg_ctx.clearRect(0, 0, background.width, background.height);
		 bg_ctx.drawImage(happyFace, 0, 0);}, false);					 
			
	document.getElementById('bg_clear').addEventListener("click", function()
		{bg_ctx.clearRect(0, 0, background.width, background.height);}, false);
			
			 
	canvas.addEventListener('mousemove', function(e) {
		  mouse.x = e.pageX - this.offsetLeft;
		  mouse.y = e.pageY - this.offsetTop;
		  }, false);
			
		 
	canvas.addEventListener('mousedown', function(e) {
	    ctx.beginPath();
	    ctx.moveTo(mouse.x, mouse.y);	 
	    canvas.addEventListener('mousemove', onPaint, false);
		}, false);
			 
	document.addEventListener('mouseup', function() {
	    canvas.removeEventListener('mousemove', onPaint, false);
			}, false);
}
		 
var onPaint = function() {
	ctx.lineTo(mouse.x, mouse.y);
	ctx.lineWidth = currWidth;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = currColor;
	ctx.stroke();
	};

window.addEventListener( "load", init, false );
