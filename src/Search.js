import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search() {
	const [city, setCity] = useState("Paris");
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	function displayWeather(response) {
		let currentWeather = (
			<CurrentWeather
				city={city}
				description={response.data.weather[0].main}
				humidity={response.data.main.humidity}
				wind={Math.round(response.data.wind.speed)}
				timestamp={response.data.dt}
				temperature={Math.round(response.data.main.temp)}
			/>
		);
		setCurrentWeather(currentWeather);
	}

	function handleSubmit(event) {
		event.preventDefault();

		let apiKey = "3ef1c4739274de1e0c3fc584c54fc2ec";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(displayWeather);
	}

	function handleSearchInput(event) {
		setCity(event.target.value);
	}

	return (
		<div>
			<form className="Search" id="search-input" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city.."
							className="form-control search-input"
							id="city-input"
							autoComplete="off"
							onChange={handleSearchInput}
						/>
					</div>
					<div className="col-3">
						<input
							type="submit"
							className="btn btn-primary w-100"
							value="Search"
						/>
					</div>
				</div>
			</form>
			{currentWeather}
			{forecast}
		</div>
	);
}
