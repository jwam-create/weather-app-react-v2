import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
	console.log(props.city);
	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col-6 city-container">
					<h1 id="city">{props.city}</h1>
					<ul>
						<li>
							<span id="description">{props.description}</span>
						</li>
						<li>
							Humidity:
							<strong>
								<span id="humidity"> {props.humidity}</span>%
							</strong>
							, Wind:{" "}
							<strong>
								<span id="wind">{Math.round(props.wind)}</span>
								km/h
							</strong>
						</li>
						<li className="last-updated">
							Last updated: <span id="date">Saturday 16:30</span>
						</li>
					</ul>
				</div>
				<div className="col">
					<div className="temperature-container d-flex justify-content-end">
						<img
							src="images/fullsun.png"
							alt=""
							className="img-fluid"
							id="icon"
						/>
						<div>
							<span className="temperature" id="temperature">
								{Math.round(props.temperature)}
							</span>
							<span className="units">°C</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
