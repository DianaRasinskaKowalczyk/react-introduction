import React from "react";

import Category from "../content/Category";
import { Content } from "../content/Content";
import posts from "../content/Text";

export class Page extends React.Component {
	render() {
		const { styles } = this.props;
		const postsList = [
			{ text: "FIRST POST", url: "/firstpost" },
			{ text: "SECOND POST", url: "/secondpost" },
			{ text: "THIRD POST", url: "/thirdpost" },
			{ text: "FOURTH POST", url: "/fourthpost" },
		];

		return (
			<section style={styles}>
				<Category content={postsList} />
				<Content postItems={posts} />
			</section>
		);
	}
}

Page.defaultProps = {
	styles: {
		display: "flex",
		marginRight: "0",
	},
};
