var numSquares=6
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();

var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var pickedColor=pickColor();
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares=3
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{

	if(colors[i])
	{
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";	
	}
}

});

hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{

		squares[i].style.backgroundColor=colors[i];
	
		squares[i].style.display="block";	
	




}
});




resetButton.addEventListener("click",function(){
	
//generate new color
colors=generateRandomColors(numSquares);

//pick new color
pickedColor=pickColor();

//change colordisplay to match the picked color
colorDisplay.textContent=pickedColor;
this.textContent="New colors";
messageDisplay.textContent="";

//change the colors in the squares
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steel";

})



colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
//initial access to colors
squares[i].style.backgroundColor=colors[i];			

squares[i].addEventListener("click",function(){

//grab color of clicked square
var clickedColor=this.style.backgroundColor;
//compares clocked and picked color 
console.log(pickedColor,clickedColor);
//compare color to picked color
if 	(clickedColor===pickedColor){
	messageDisplay.textContent="Correct!"; 
	h1.style.backgroundColor=clickedColor;
	resetButton.textContent="Play Again?";
	changeColors(clickedColor);
	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="try again!";
	}

	});
}

function changeColors(color){
//loop through colors in each square
for(var i=0;i<squares.length;i++)
{	//change each color to match given color
	squares[i].style.backgroundColor=color;			

}
}

function pickColor(){
	// we generate a random number based on the colors in the sqaure and we use the length of the array to generate the color
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
// creae array
var arr=[];
// add num of random colors to the array
for(var i=0;i<num;i++)
{
	// push the random number to the array
arr.push(randomColor())

}

//return the array
return arr;
}


function randomColor(){
// picks a random color from red blue and green

var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b +")";

}
