import React from "react";
import Menu from "../header/Menu";

const Category = props => {
	const { content } = props;

	const categoryStyles = {
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
	};

	return (
		<aside>
			<Menu menuItems={content} styles={categoryStyles} />
		</aside>
	);
};

export default Category;
