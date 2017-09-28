function setup() {
createCanvas(windowWidth, windowHeight); background(0,100,0);
}
function draw() {
if (mouseIsPressed) {
var size = random(10, 100);
ellipse(mouseX, mouseY, size, size); }
}