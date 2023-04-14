import React from "react";

const Link = props => {
	const { url, styles, text } = props;

	return (
		<a href={url} style={styles}>
			{text}
		</a>
	);
};

Link.defaultProps = {
	styles: {
		textDecoration: "none",
		color: "darkViolet",
	},
};

export default Link;
