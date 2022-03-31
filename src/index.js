import ReactDOMClient from 'react-dom/client';
// css
import './index.css';

// setup variables
const books = [
	{
		id: 1,
		img: 'https://m.media-amazon.com/images/I/81WWiiLgEyL._SX140_.jpg',
		title: 'Where the Crawdads Sing',
		author: 'by Delia Owens',
		href: 'https://www.amazon.com/Delia-Owens/e/B000AP8MAK/ref=dp_byline_cont_pop_ebooks_1',
	},
	{
		id: 2,
		img: 'https://m.media-amazon.com/images/I/9151RYMhsQL.jpghttps://m.media-amazon.com/images/I/81WWiiLgEyL._SX140_.jpg',
		title: 'Run, Rose, Run',
		author: 'by James Patterson & Dolly Parton',
		href: 'https://www.amazon.com/s?k=James+Patterson&i=audible&ref=dp_byline_sr_audible_1',
	},
];
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
const Book = ({ img, title, author, href }) => {
	const clickHandler = () => {
		alert('moo');
	};
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<a href={href}>{author}</a>
			<button onClick={clickHandler} type="button">example</button>
		</article>
	);
};

ReactDOMClient.createRoot(document.getElementById('root')).render(<BookList />);
