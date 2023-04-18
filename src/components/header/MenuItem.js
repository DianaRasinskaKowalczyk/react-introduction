import React from "react";
import Link from "../utils/Link";

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
		fontSize: "25px",
		marginRight: "50px",
		// padding: "30px",
	},
};

export default MenuItem;
