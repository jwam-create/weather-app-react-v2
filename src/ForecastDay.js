import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
	function fahrenheitMaxTemp() {
		return Math.round(props.data.temp.max * (9 / 5) + 32);
	}
	function fahrenheitMinTemp() {
		return Math.round(props.data.temp.min * (9 / 5) + 32);
	}

	function celsiusMaxTemp() {
		return Math.round(props.data.temp.max);
	}
	function celsiusMinTemp() {
		return Math.round(props.data.temp.min);
	}

	function day() {
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = days[new Date(props.data.dt * 1000).getDay()];
		return day;
	}

	if (props.unit === "celsius") {
		return (
			<div className="ForecastDay">
				<ul>
					<li className="week-day">{day()}</li>
					<li>
						<WeatherIcon code={props.data.weather[0].icon} size={36} />
					</li>
					<li className="forecast-high">{celsiusMaxTemp()}°</li>
					<li className="forecast-low">{celsiusMinTemp()}°</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="ForecastDay">
				<ul>
					<li className="week-day">{day()}</li>
					<li>
						<WeatherIcon code={props.data.weather[0].icon} size={36} />
					</li>
					<li className="forecast-high">{fahrenheitMaxTemp()}°</li>
					<li className="forecast-low">{fahrenheitMinTemp()}°</li>
				</ul>
			</div>
		);
	}
}
