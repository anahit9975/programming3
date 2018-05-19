function setup() {
    createCanvas(500, 500);
    background('#acacac');

}
function draw() {
    fill('blue');

    function nkarir () {
        var x = mouseX ;
        var y = mouseY ;
    }
    if (key == "Enter") {
        socket.on('stacir nkary', nkarir);
    }

}

function mouseDragged() {
    ellipse(mouseX, mouseY, 10, 10);
    return false;

}


 var socket = io.connect('https://lockalhost:3000');
   