import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
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
							Last updated: <FormattedDate date={props.data.date} />
						</li>
					</ul>
				</div>
				<div className="col">
					<div className="temperature-container d-flex justify-content-end">
						<div className="float-left">
							<WeatherIcon code={props.data.icon} size={70} />
						</div>

						<div>
							<WeatherTemperature
								temperature={props.data.temperature}
								unit={props.unit}
								setUnit={props.setUnit}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
