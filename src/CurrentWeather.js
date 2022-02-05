import React from "react";
import axios from "axios";

import "./CurrentWeather.css";

export default function CurrentWeather() {
	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col-6 city-container">
					<h1 id="city">Paris</h1>
					<ul>
						<li>
							<span id="description">Clear</span>
						</li>
						<li>
							Humidity:
							<strong>
								<span id="humidity"> 80</span>%
							</strong>
							, Wind:{" "}
							<strong>
								<span id="wind">30</span>km/h
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
								18
							</span>
							<span className="units">°C</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
