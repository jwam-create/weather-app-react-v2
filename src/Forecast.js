import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	function handleResponse(response) {
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		console.log(response.data.daily[0]);
		setForecastData({
			day: days[new Date(response.data.daily[0].dt * 1000).getDay()],
			icon: response.data.daily[0].weather[0].icon,
			highTemp: Math.round(response.data.daily[0].temp.max),
			lowTemp: Math.round(response.data.daily[0].temp.min),
		});
		setLoaded(true);
	}
	function searchForecast() {}
	searchForecast();
	if (loaded) {
		return (
			<div className="Forecast row">
				<div className="col">
					<ul>
						<li className="week-day">{forecastData.day}</li>
						<li>
							<WeatherIcon code={forecastData.icon} size={36} />
						</li>
						<li className="forecast-high">{forecastData.highTemp}°</li>
						<li className="forecast-low">{forecastData.lowTemp}°</li>
					</ul>
				</div>
			</div>
		);
	} else {
		const apiKey = "7a783f7c6af783c014d0c3ff3bc81786";
		let lat = props.coordinates.lat;
		let long = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
