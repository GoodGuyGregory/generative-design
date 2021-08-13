function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();

    //  HSB 
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    //  establish the background from mouseY
    background(mouseY / 2, 100, 100);

    // goes the opposite way of the background manipulations
    fill(360 - mouseY / 2, 100, 100);
    rect(windowWidth / 2, windowHeight / 2, mouseX + 1, mouseX + 1);

}