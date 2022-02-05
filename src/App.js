import Search from "./Search";

import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

import "./Forecast.css";
import "./Footer.css";

export default function App() {
	return (
		<div className="App">
			<div className="Container weather-app">
				<Search />
				<Forecast />
				<Footer />
			</div>
		</div>
	);
}
