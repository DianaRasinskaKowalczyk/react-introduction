import React from "react";
import Post from "./Post";

export class Content extends React.Component {
	render() {
		const { styles, postItems } = this.props;

		const postArray = postItems.map(item => (
			<Post
				title={item.title}
				body={item.body}
				author={item.author}
				created={item.created}
			/>
		));

		return <section style={styles}>{postArray}</section>;
	}
}

Content.defaultProps = {
	styles: {
		display: "flex",
		flexDirection: "column",
		flexBasis: "75%",
		marginRight: "0",
	},
};
