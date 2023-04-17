import React from "react";

const Copyrights = props => {
	const { styles } = props;
	return (
		<section style={styles}>
			<h3>Copyright &copy; 2023 Diana Rasinska-Kowalczyk</h3>
		</section>
	);
};

Copyrights.defaultProps = {
	styles: {
		fontSize: "12px",
		color: "grey",
	},
};

export default Copyrights;
