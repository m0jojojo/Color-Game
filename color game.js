var squares=document.querySelectorAll(".square");
var displayMessage=document.querySelector("#message");
var colorCodeDisplay=document.querySelector("#colorCode");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var body=document.querySelector("body");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");

var numColors=6;
hardButton.classList.add("selected");
var colors=colorGenerator();
var rightColor=colors[pickRightColor(numColors)];
colorCodeDisplay.textContent=rightColor;
for(var i=0;i<squares.length;i++){
	//setting background color
	squares[i].style.background=colors[i];

	//adding event listener
	squares[i].addEventListener("click",function(){
		var selectedColor=this.style.background;
		if(rightColor===selectedColor){
			displayMessage.textContent="Correct!";
			h1.style.background=rightColor;
			resetButton.textContent= "Play Again?";
			for(var j=0;j<squares.length;j++){
				squares[j].style.background=rightColor;
			}
		}
		else{
			displayMessage.textContent="Try Again!";
			this.style.background="#232323";
		}

	});
}

//adding event listener to easy mode
easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numColors=3;
	//generate new colors of the boxes
	colors=colorGenerator();
	//pick correct color
	rightColor=colors[pickRightColor(numColors)];
	colorCodeDisplay.textContent=rightColor;
	//removing display message
	displayMessage.textContent="";

	for(var i=0;i<squares.length;i++){
		if(i<3){
			squares[i].style.background=colors[i];		
		}
		else{
			squares[i].style.display="none";
		}
	}	
});

//adding event listener to hard mode
hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numColors=6;
	//generate new colors of the boxes
	colors=colorGenerator();
	//pick correct color
	rightColor=colors[pickRightColor(numColors)];
	colorCodeDisplay.textContent=rightColor;
	//removing display message
	displayMessage.textContent="";

	for(var i=0;i<squares.length;i++){
		squares[i].style.display="block";
		squares[i].style.background=colors[i];		
	}	
});


//adding event listener to reset button
resetButton.addEventListener("click",function(){
	this.textContent="New Colors";
	reset();

});

//randomly picking right color
function pickRightColor(num){
	//generating random numbers from 0-5
	var pick=Math.floor(Math.random()*num);
	return pick;
}

///random color generator(for the boxes)
function colorGenerator(){
	var arr=[];

	for(var i=0;i<numColors;i++){
		//generating random codes for red,green,blue colors
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		//building string rgb(r, g, b)
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}


function reset(){
	//generate new colors of the boxes
	colors=colorGenerator();
	//pick correct color
	rightColor=colors[pickRightColor(numColors)];
	//removing display message
	displayMessage.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	//change display color code
	colorCodeDisplay.textContent=rightColor;
}