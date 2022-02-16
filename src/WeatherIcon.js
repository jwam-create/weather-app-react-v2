import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
	return (
		<div className="WeatherIcon">
			<ReactAnimatedWeather
				icon="CLEAR_DAY"
				color="#66dee2"
				size="70"
				animate={true}
			/>
		</div>
	);
}
