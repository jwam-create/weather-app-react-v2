import axios from "axios";
import React, { useState } from "react";

import "./Search.css";

export default function Search() {
	const [city, setCity] = useState("Paris");
	const [currentWeather, setCurrentWeather] = useState(null);

	function displayWeather(response) {
		console.log(response.data);
		let list = (
			<div className="row">
				<div className="col-6 city-container">
					<h1 id="city">{city}</h1>
					<ul>
						<li>
							<span id="description">{response.data.weather[0].main}</span>
						</li>
						<li>
							Humidity:
							<strong>
								<span id="humidity"> {response.data.main.humidity}</span>%
							</strong>
							, Wind:{" "}
							<strong>
								<span id="wind">{Math.round(response.data.wind.speed)}</span>
								km/h
							</strong>
						</li>
						<li className="last-updated">
							Last updated: <span id="date">Saturday 16:30</span>
						</li>
					</ul>
				</div>
				<div className="col">
					<div className="temperature-container d-flex justify-content-end">
						<img
							src="images/fullsun.png"
							alt=""
							className="img-fluid"
							id="icon"
						/>
						<div>
							<span className="temperature" id="temperature">
								{Math.round(response.data.main.temp)}
							</span>
							<span className="units">°C</span>
						</div>
					</div>
				</div>
			</div>
		);
		setCurrentWeather(list);
	}

	function handleSubmit(event) {
		event.preventDefault();

		let apiKey = "3ef1c4739274de1e0c3fc584c54fc2ec";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ef1c4739274de1e0c3fc584c54fc2ec`;
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
			<div className="CurrentWeather">{currentWeather}</div>
		</div>
	);
}
