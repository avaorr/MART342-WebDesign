<!DOCTYPE html>
<html>
<head>
    <title>Books Galore</title>
    <meta charset="UTF-8">
    <meta name="description" content="Explore a world of books">
    <meta name="author" content="Bookworm Media">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" text="text/css" href="./css/bootstrap.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Home</a>
            <a class="nav-item nav-link" href="./pages/about.html">About</a>
            <a class="nav-item nav-link" href="./pages/contact.html">Contact</a>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="genres.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Genres
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Fiction</a>
                    <a class="dropdown-item" href="#">Fantasy</a>
                    <a class="dropdown-item" href="#">Mystery</a>
                    <a class="dropdown-item" href="#">Romance</a>
                </div>
            </li>
        </div>
    </nav>
    <div class="container">
        <h1>Welcome to the World of Books</h1>
        <section>
            <div class="row">
                <div class="col-12">
                    <img src="images/library.jpeg" alt="Books on a shelf" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h2>Explore Diverse Genres</h2>
                    <p>
                        Whether you're a fan of gripping mysteries, thought-provoking non-fiction, or fantastical adventures in fiction, there's a genre for every book lover's taste.
                    </p>
                </div>
                <div class="col-md-6">
                    <h2>Expand Your Mind</h2>
                    <p>
                        Books are the keys to unlocking knowledge. Delve into the depths of human history, unravel scientific mysteries, or explore philosophical ideas. Expand your mind and broaden your horizons through the power of reading.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="images/Book.jpeg" alt="Books" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <img src="images/Fall.jpeg" alt="Books" class="img-fluid">
                </div>
            </div>
        </section>
        <section>
            <h2>Interactive Bookshelf</h2>
            <canvas id="bookCanvas" width="800" height="400"></canvas>
            <div id="bookDetails" style="display:none;">
                <p id="bookInfo"></p>
            </div>
        </section>
    </div>
    <script>
        var canvas = document.getElementById('bookCanvas');
        var ctx = canvas.getContext('2d');
        var books = [
            { title: 'Book 1', x: 50, y: 250, width: 70, height: 50 },
            { title: 'Book 2', x: 150, y: 250, width: 70, height: 50 },
            // Add more books as needed
        ];
        function drawShelf() {
            ctx.fillStyle = 'brown';
            ctx.fillRect(0, 300, 800, 100); // Drawing the shelf
        }
        function drawBooks() {
            books.forEach(function(book) {
                ctx.fillStyle = 'blue';
                ctx.fillRect(book.x, book.y, book.width, book.height);
            });
        }
        function displayBookInfo(book) {
            var bookInfo = document.getElementById('bookInfo');
            bookInfo.textContent = 'You selected: ' + book.title;
            document.getElementById('bookDetails').style.display = 'block';
        }
        canvas.addEventListener('click', function(event) {
            var x = event.pageX - canvas.offsetLeft,
                y = event.pageY - canvas.offsetTop;
            books.forEach(function(book) {
                if (y > book.y && y < book.y + book.height && x > book.x && x < book.x + book.width) {
                    displayBookInfo(book);
                }
            });
        });
        drawShelf();
        drawBooks();
    </script>
</body>
</html>