import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
	function maxTemp() {
		return Math.round(props.temp.max);
	}
	function minTemp() {
		return Math.round(props.temp.min);
	}

	function day() {
		//let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return props.dt;
	}

	return (
		<div>
			<ul>
				<li className="week-day">{day()}</li>
				<li>
					<WeatherIcon code={props.weather[0].icon} size={36} />
				</li>
				<li className="forecast-high">{maxTemp()}°</li>
				<li className="forecast-low">{minTemp()}°</li>
			</ul>
		</div>
	);
}
