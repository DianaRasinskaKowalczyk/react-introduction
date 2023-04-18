import React from "react";
import Copyrights from "./Copyrights";
import Nav from "../utils/Nav";

const Footer = props => {
	const { styles } = props;

	const footerMenu = [
		{ text: "HOME", url: "/home" },
		{ text: "OUR ARTICLES", url: "/articles" },
		{ text: "CONTACT", url: "/list" },
	];

	return (
		<footer style={styles}>
			<Copyrights />
			<Nav content={footerMenu} />
		</footer>
	);
};

Footer.defaultProps = {
	styles: {
		display: "flex",
		alignItems: "center",
		paddingTop: "15px",
		justifyContent: "space-between",
	},
};

export default Footer;
