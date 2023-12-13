
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

function drawShelf() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(0, 300, 800, 100); 
}

function drawBooks() {
    books.forEach(function(book, index) {
        ctx.fillStyle = bookColors[index % bookColors.length];
        ctx.fillRect(book.x, book.y, book.width, book.height);
    });
}

function displayBookInfo(book) {
    var bookInfo = document.getElementById('bookInfo');
    bookInfo.textContent = 'You selected: ' + book.title;
    document.getElementById('bookDetails').style.display = 'block';
}

canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    books.forEach(function(book) {
        if (y > book.y && y < book.y + book.height && x > book.x && x < book.x + book.width) {
            displayBookInfo(book);
        }
    });
});

if (canvas && ctx) {
    drawShelf();
    drawBooks();
} else {
    console.error('Canvas or context not found');
}
