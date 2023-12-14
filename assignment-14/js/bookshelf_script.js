
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var books = [
    { title: 'Demon Copperhead', x: 50, y: 250, width: 50, height: 100 },
    { title: 'Lessons in Chemistry', x: 110, y: 250, width: 50, height: 100 },
    { title: 'Night Circus', x: 170, y: 250, width: 50, height: 100 },
    { title: 'Book of Night', x: 230, y: 250, width: 50, height: 100 },
    { title: 'Holy Murder', x: 290, y: 250, width: 50, height: 100 },
    { title: 'Wheel of Time', x: 350, y: 250, width: 50, height: 100 },
    { title: 'Belladonna', x: 410, y: 250, width: 50, height: 100 },
    { title: 'Book of Tea', x: 470, y: 250, width: 50, height: 100 },
];

var bookColors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'yellow', 'cyan'];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawShelf();
    drawBooks();
}

function drawShelf() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(0, 300, canvas.width, 50); // Shelf
}

function drawBooks() {
    var bookColors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'yellow', 'cyan'];
    books.forEach(function(book, index) {
        ctx.fillStyle = bookColors[index % bookColors.length];
        ctx.fillRect(book.x, book.y, book.width, book.height);
    });
}

canvas.addEventListener('click', function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    books.forEach(function(book) {
        if (x >= book.x && x <= book.x + book.width && y >= book.y && y <= book.y + book.height) {
            alert('You selected: ' + book.title); // Simple alert for demonstration
        }
    });
});

draw();