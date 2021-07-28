var a,b;

function preload(){

}

function setup() {
a = prompt("Please enter variable A")
b = prompt("Please enter variable B")
var button1 = createButton("Click to swap")
button1.mousePressed(swap);
}

function draw() {
  background(220);
  drawsprites
}

function swap(){
  [a,b] = [b,a]
  console.log("The variable A after swap is " +a)
  console.log("The variable B after swap is " +b)
}