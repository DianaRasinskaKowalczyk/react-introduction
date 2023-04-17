import React from "react";

import Category from "../content/Category";
import { Content } from "../content/Content";

export class Page extends React.Component {
	render() {
		const { styles } = this.props;
		const postsList = [
			{ text: "FIRST POST", url: "/firstpost" },
			{ text: "SECOND POST", url: "/secondpost" },
			{ text: "THIRD POST", url: "/thirdpost" },
			{ text: "FOURTH POST", url: "/fourthpost" },
		];

		const posts = [
			{
				title: "FIRST POST",
				body: "First post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				author: "First author",
				created: "2023-04-15 20:00:00",
			},
			{
				title: "SECOND POST",
				body: "Second post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				author: "Second author",
				created: "2023-04-15 20:00:00",
			},
			{
				title: "THIRD POST",
				body: "Third post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				author: "Third author",
				created: "2023-04-15 20:00:00",
			},
			{
				title: "FOURTH POST",
				body: "Fourth post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				author: "Fourth author",
				created: "2023-04-15 20:00:00",
			},
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
