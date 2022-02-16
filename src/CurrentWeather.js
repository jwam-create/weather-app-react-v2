import React, { useState } from "react";

import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";

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
						<img
							src="props.data.iconUrl"
							alt=""
							className="img-fluid"
							id="icon"
						/>
						<div>
							<span className="temperature" id="temperature">
								{Math.round(props.data.temperature)}
							</span>
							<span className="units">
								{" "}
								<a className="celsiusLink" href="#">
									°C
								</a>{" "}
								|{" "}
								<a className="fahrenheitLink activeLink" href="#">
									°F
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
