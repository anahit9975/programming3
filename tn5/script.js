function main() {
    socket = io.connect('http://localhost:3000');
    socket.on('stacir kordinatnery nkarelu hamar', drawingroom);

    function drawingroom(kordinatner) {
        fill(kordinatner[2], kordinatner[3], kordinatner[4]);
        ellipse(kordinatner[0], kordinatner[1], 10, 10);
    }

}

function setup() {
    createCanvas(500, 500);
    background('#acacac');
     r = random(255);
     g = random(255);
     b = random(255);
}

function mouseDragged() {

    socket.emit('stacir kordinatnery', [mouseX, mouseY, r, g, b]);


}

window.onload = main;