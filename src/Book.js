const Book = ({ img, title, author, href }) => {
	const clickHandler = () => {
		alert('moo');
	};
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<a href={href}>{author}</a>
			<button onClick={clickHandler} type="button">
				example
			</button>
		</article>
	);
};

export default Book;