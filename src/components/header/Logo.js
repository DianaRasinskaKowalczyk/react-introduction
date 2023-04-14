import React from "react";

const Logo = props => {
	const { logo, styles } = props;

	return <p style={styles}>{logo}</p>;
};

Logo.defaultProps = {
	styles: {
		font: "bold",
		color: "darkPink",
		fontSize: "30px",
		margin: "0",
		marginRight: "35px",
	},
};

export default Logo;
