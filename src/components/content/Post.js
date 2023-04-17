import React from "react";

const Post = props => {
	const { title, body, author, created, styles } = props;

	return (
		<article style={styles}>
			<h2>{title}</h2>
			<p>{body}</p>
			<p>{author}</p>
			<p>
				Created: <time>{created}</time>
			</p>
		</article>
	);
};

Post.defaultProps = {
	styles: {
		color: "grey",
		backgroundColor: "pink",
		marginTop: "10px",
		marginLeft: "0",
		padding: "10px",
	},
};

export default Post;
