import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });
	//const [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setWeatherData({
			city: city,
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].main,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
			date: "Saturday 16:30",
			ready: true,
		});
	}
	function search() {
		const apiKey = "7a783f7c6af783c014d0c3ff3bc81786";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
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
				<CurrentWeather data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
