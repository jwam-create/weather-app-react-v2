import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
	function maxTemp() {
		return Math.round(props.data.temp.max);
	}
	function minTemp() {
		return Math.round(props.data.temp.min);
	}

	function day() {
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = days[new Date(props.data.dt * 1000).getDay()];
		return day;
	}

	return (
		<div className="ForecastDay">
			<ul>
				<li className="week-day">{day()}</li>
				<li>
					<WeatherIcon code={props.data.weather[0].icon} size={36} />
				</li>
				<li className="forecast-high">{maxTemp()}°</li>
				<li className="forecast-low">{minTemp()}°</li>
			</ul>
		</div>
	);
}
