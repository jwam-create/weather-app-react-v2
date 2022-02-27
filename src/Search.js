import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [unit, setUnit] = useState("celsius");

	function handleResponse(response) {
		setWeatherData({
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].main,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
			icon: response.data.weather[0].icon,
			date: new Date(response.data.dt * 1000),
			ready: true,
			coordinates: response.data.coord,
		});
	}
	function search() {
		const apiKey = "7a783f7c6af783c014d0c3ff3bc81786";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleSearchInput(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
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
				<CurrentWeather data={weatherData} unit={unit} setUnit={setUnit} />
				<Forecast coordinates={weatherData.coordinates} unit={unit} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
