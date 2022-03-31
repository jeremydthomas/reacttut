import ReactDOMClient from 'react-dom/client';
// css
import './index.css';

// setup variables
const firstBook = {
	img: 'https://m.media-amazon.com/images/I/81WWiiLgEyL._SX140_.jpg',
	title: 'Where the Crawdads Sing',
	author: 'by Delia Owens',
	href: 'https://www.amazon.com/Delia-Owens/e/B000AP8MAK/ref=dp_byline_cont_pop_ebooks_1',
};
const secondBook = {
	img: 'https://m.media-amazon.com/images/I/9151RYMhsQL.jpghttps://m.media-amazon.com/images/I/81WWiiLgEyL._SX140_.jpg',
	title: 'Run, Rose, Run',
	author: 'by James Patterson & Dolly Parton',
	href: 'https://www.amazon.com/s?k=James+Patterson&i=audible&ref=dp_byline_sr_audible_1',
};

// functions
function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
				href={firstBook.href}
			/>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
				href={secondBook.href}
			/>
		</section>
	);
}
const Book = ({img,title,author,href}) => {
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<a href={href}>{author}</a>
		</article>
	);
};

ReactDOMClient.createRoot(document.getElementById('root')).render(<BookList />);
