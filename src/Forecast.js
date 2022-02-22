import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	function handleResponse(response) {
		setForecastData(response.data.daily);
		setLoaded(true);
	}
	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	if (loaded) {
		return (
			<div className="Forecast row">
				{forecastData.map(function (dailyForecast, index) {
					if (index < 5) {
						return (
							<div className="col" key={index}>
								<ForecastDay data={dailyForecast} />
							</div>
						);
					}
				})}
			</div>
		);
	} else {
		const apiKey = "7a783f7c6af783c014d0c3ff3bc81786";
		let lat = props.coordinates.lat;
		let long = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
		console.log(apiUrl);
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
