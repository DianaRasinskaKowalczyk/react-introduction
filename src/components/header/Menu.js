import React from "react";
import MenuItem from "./MenuItem";

const Menu = props => {
	const { menuItems, styles } = props;

	const menuArray = menuItems.map(item => (
		<MenuItem url={item.url} text={item.text} />
	));

	return <ul style={styles}>{menuArray}</ul>;
};

export default Menu;
