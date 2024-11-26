// URL for the Google Books API endpoint
const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the search form
    document.getElementById('searchBookForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const query = document.getElementById('searchQuery').value.trim();
        if (query) {
            searchBooks(query);
        }
    });

    // Initially fetch books based on a default query
    searchBooks('library');
});

// Fetch books from the Google Books API based on a search query
function searchBooks(query) {
    fetch(`${API_URL}${query}&maxResults=20`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // Log the data to check the API response
            const books = data.items;
            const booksList = document.getElementById('books');
            booksList.innerHTML = '';

            if (!books || books.length === 0) {
                booksList.innerHTML = '<li>No books found</li>';
                return;
            }

            books.forEach(book => {
                const title = book.volumeInfo.title || 'No Title';
                const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
                const publishedDate = book.volumeInfo.publishedDate || 'N/A';
                const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${title}</strong> by ${authors}
                    (${publishedDate})
                    ${thumbnail ? `<img src="${thumbnail}" alt="Book Cover" style="width:50px; height:auto;">` : ''}
                    <button onclick="openBook('${book.id}')">Open</button>
                `;
                booksList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            document.getElementById('books').innerHTML = '<li>Error fetching books. Please try again later.</li>';
        });
}

// Open book details by navigating to the book's page on Google Books
function openBook(bookId) {
    const bookURL = `https://books.google.com/books?id=${bookId}`;
    window.open(bookURL, '_blank');
}

// Example usage
searchBooks('1984'); // This will search for books with the query "1984"

document.addEventListener('DOMContentLoaded', () => {
    // Array of colors for the cards
    const colors = [
        '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#F44336',
        '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3',
        '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A',
        '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800'
    ];

    // Get all book list items
    const bookItems = document.querySelectorAll('ul#books li');

    // Apply a color to each book card
    bookItems.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.setProperty('--card-bg-color', color);
    });
});
let btn =document.getElementById("logout");
btn.addEventListener("click",(e)=>{
    alert("are you sure you want to logout ")
    window.location.href="login.html"
})
