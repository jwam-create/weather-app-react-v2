import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	function handleResponse(response) {
		console.log(response.data.daily);
		setForecastData(response.data.daily[0]);
		setLoaded(true);
	}
	function searchForecast() {}
	searchForecast();
	if (loaded) {
		return (
			<div className="Forecast row">
				<div className="col">
					<ForecastDay data={forecastData} />
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
