import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";
import "./CurrentWeather.css";
import "./Forecast.css";
import "./Footer.css";

export default function App() {
	return (
		<div className="App">
			<div className="Container weather-app">
				<Search />
				<CurrentWeather />
				<Forecast />
				<Footer />
			</div>
		</div>
	);
}
