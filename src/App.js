import Search from "./Search";

import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

import "./Forecast.css";
import "./Footer.css";

export default function App() {
	return (
		<div className="App">
			<div className="container weather-app">
				<Search defaultCity="Paris" />
				<Forecast />
				<Footer />
			</div>
		</div>
	);
}
