import React from "react";
import Menu from "../header/Menu";

const Category = props => {
	const { content } = props;

	const categoryStyles = {
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
		paddingRight: "55px",
		paddingTop: "50px",
		marginLeft: "3px",
	};

	const asideStyles = {
		width: "25%",
	};

	return (
		<aside style={asideStyles}>
			<Menu menuItems={content} styles={categoryStyles} />
		</aside>
	);
};

export default Category;
