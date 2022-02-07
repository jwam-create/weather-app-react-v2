import React, { useState } from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
	//const [isActive, setIsActive] = useState("false")
	const [celsiusTemperature, setCelsiusTemperature] = useState(
		props.data.temperature
	);
	const [fahrenheitTemperature, setFahrenheitTemperature] = useState(null);

	function displayFahrenheit(event) {
		event.preventDefault();
		setFahrenheitTemperature(Math.round(celsiusTemperature * (9 / 5) + 32));
	}

	function displayCelsius(event) {
		event.preventDefault();
		setCelsiusTemperature(props.data.temperature);
	}

	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col-6 city-container">
					<h1 id="city">{props.data.city}</h1>
					<ul>
						<li>
							<span id="description">{props.data.description}</span>
						</li>
						<li>
							Humidity:
							<strong>
								<span id="humidity"> {props.data.humidity}</span>%
							</strong>
							, Wind:{" "}
							<strong>
								<span id="wind">{Math.round(props.data.wind)}</span>
								km/h
							</strong>
						</li>
						<li className="last-updated">
							Last updated: <span id="date">props.data.date</span>
						</li>
					</ul>
				</div>
				<div className="col">
					<div className="temperature-container d-flex justify-content-end">
						<img
							src="props.data.iconUrl"
							alt=""
							className="img-fluid"
							id="icon"
						/>
						<div>
							<span className="temperature" id="temperature">
								{Math.round(props.data.temperature)}
							</span>
							<span className="units">
								{" "}
								<a className="celsiusLink" href="#" onClick={displayCelsius}>
									°C
								</a>{" "}
								|{" "}
								<a
									className="fahrenheitLink activeLink"
									href="#"
									onClick={displayFahrenheit}
								>
									°F
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
