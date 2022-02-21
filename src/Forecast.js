import React from "react";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
	return (
		<div className="Forecast row">
			<div className="col">
				<ul>
					<li className="week-day">Mon</li>
					<li>
						<WeatherIcon code="01d" />
					</li>
					<li className="forecast-high">11°C</li>
					<li>5°C</li>
				</ul>
			</div>
			<div className="col">
				<ul>
					<li className="week-day">Tues</li>
					<li>
						<WeatherIcon code="01d" />
					</li>
					<li className="forecast-high">11°C</li>
					<li>5°C</li>
				</ul>
			</div>
			<div className="col">
				<ul>
					<li className="week-day">Wed</li>
					<li>
						<WeatherIcon code="01d" />
					</li>
					<li className="forecast-high">11°C</li>
					<li>5°C</li>
				</ul>
			</div>
			<div className="col">
				<ul>
					<li className="week-day">Thurs</li>
					<li>
						<WeatherIcon code="01d" />
					</li>
					<li className="forecast-high">11°C</li>
					<li>5°C</li>
				</ul>
			</div>
			<div className="col">
				<ul>
					<li className="week-day">Fri</li>
					<li>
						<WeatherIcon code="01d" />
					</li>
					<li className="forecast-high">11°C</li>
					<li>5°C</li>
				</ul>
			</div>
		</div>
	);
}
