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
		<section>
			<Menu menuItems={content} styles={categoryStyles} />
		</section>
	);
};

export default Category;
