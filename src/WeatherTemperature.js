import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		props.setUnit("fahrenheit");
	}
	function showCelsius(event) {
		event.preventDefault();
		props.setUnit("celsius");
	}

	if (unit === "fahrenheit") {
		return (
			<span className="WeatherTemperature">
				<span className="temperature" id="temperature">
					{Math.round(props.temperature)}
				</span>
				<span className="units">
					{" "}
					°C |{" "}
					<a href="/" onClick={showCelsius}>
						°F
					</a>
				</span>
			</span>
		);
	} else {
		return (
			<span className="WeatherTemperature">
				<span className="temperature" id="temperature">
					{Math.round((props.temperature - 32) * (5 / 9))}
				</span>
				<span className="units">
					{" "}
					<a href="/" onClick={showFahrenheit}>
						°C
					</a>{" "}
					| °F
				</span>
			</span>
		);
	}
}
