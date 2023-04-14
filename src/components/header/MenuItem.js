import React from "react";
import Link from "../content/utils/Link";

const MenuItem = props => {
	const { url, text, styles } = props;

	return (
		<li style={styles}>
			<Link url={url} text={text} />
		</li>
	);
};

MenuItem.defaultProps = {
	styles: {
		fontSize: "20px",
		marginRight: "50px",
	},
};

export default MenuItem;
