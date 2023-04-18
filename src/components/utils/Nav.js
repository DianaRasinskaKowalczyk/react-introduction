import React from "react";
import Menu from "../header/Menu";

const Nav = props => {
	const { content } = props;

	const navStyles = {
		listStyle: "none",
		display: "flex",
		justifyContent: "space-between",
	};

	return (
		<nav>
			<Menu menuItems={content} styles={navStyles} />
		</nav>
	);
};

export default Nav;
