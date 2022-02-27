import React from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	function showFahrenheit(event) {
		event.preventDefault();
		props.setUnit("fahrenheit");
	}
	function showCelsius(event) {
		event.preventDefault();
		props.setUnit("celsius");
	}

	if (props.unit === "celsius") {
		return (
			<span className="WeatherTemperature">
				<span className="temperature" id="temperature">
					{Math.round(props.temperature)}
				</span>
				<span className="units">
					{" "}
					°C |{" "}
					<a href="/" onClick={showFahrenheit}>
						°F
					</a>
				</span>
			</span>
		);
	} else {
		return (
			<span className="WeatherTemperature">
				<span className="temperature" id="temperature">
					{Math.round(props.temperature * (9 / 5) + 32)}
				</span>
				<span className="units">
					{" "}
					<a href="/" onClick={showCelsius}>
						°C
					</a>{" "}
					| °F
				</span>
			</span>
		);
	}
}
