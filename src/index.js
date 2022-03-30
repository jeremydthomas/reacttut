import ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

function BookList() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => (
	<img
		src="https://m.media-amazon.com/images/I/81WWiiLgEyL._SX140_.jpg"
		alt=""
	/>
);

const Title = () => <h1>Where the Crawdads Sing Kindle Edition</h1>;

const Author = () => (
	<a href="https://www.amazon.com/Delia-Owens/e/B000AP8MAK/ref=dp_byline_cont_pop_ebooks_1">
		by Delia Owens
	</a>
);

root.render(<BookList />);
