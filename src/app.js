import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header/Header";
import { Page } from "./components/pages/Page";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Page />
			<Footer />
		</>
	);
};

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
