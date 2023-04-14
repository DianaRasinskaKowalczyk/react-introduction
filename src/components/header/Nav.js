import React from "react";
import Menu from "./Menu";

const Nav = props => {
	const { content } = props;

	return (
		<nav>
			<Menu menuItems={content} />
		</nav>
	);
};

export default Nav;
