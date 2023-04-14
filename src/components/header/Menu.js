import React from "react";
import MenuItem from "./MenuItem";

const Menu = props => {
	const { menuItems, styles } = props;

	const menuArray = menuItems.map(item => (
		<MenuItem url={item.url} text={item.text} />
	));

	return <ul style={styles}>{menuArray}</ul>;
};

Menu.defaultProps = {
	styles: {
		listStyle: "none",
		display: "flex",
		justifyContent: "space-between",
	},
};

export default Menu;
