const Main = () => {
	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<input type="text" id="title" autofocus />
				<textarea id="body" placeholder="Write your note here..." />
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">TITLE</h1>
				<div className="markdown-preview">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
					tempore, saepe ab animi vero numquam nesciunt beatae voluptates
					excepturi illo. Fuga, molestias sunt hic eaque totam excepturi
					provident architecto quaerat.
				</div>
			</div>
		</div>
	);
};

export default Main;
