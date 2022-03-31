import ReactDOMClient from 'react-dom/client';
import Book from './Book.js';
import books from './books.js';
// css
import './index.css';

// functions
function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => (
				<Book key={book.id} {...book} />
			))}
		</section>
	);
}

ReactDOMClient.createRoot(document.getElementById('root')).render(<BookList />);
