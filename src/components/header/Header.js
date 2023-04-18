import React from "react";
import Logo from "./Logo";
import Link from "../utils/Link";
import Nav from "../utils/Nav";

export class Header extends React.Component {
	render() {
		const logo = "THE LOGO";

		const { styles } = this.props;

		const navMenu = [
			{ text: "HOME", url: "/home" },
			{ text: "OUR ARTICLES", url: "/articles" },
			{ text: "CONTACT", url: "/list" },
		];

		return (
			<header style={styles}>
				<Nav content={navMenu} />
				<Link url={"/"} text={<Logo logo={logo} />} />
			</header>
		);
	}
}

Header.defaultProps = {
	styles: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		border: "3px solid pink",
	},
};

export default Header;
