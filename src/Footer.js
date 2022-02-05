import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer">
			<p>
				Coded by{" "}
				<a
					href="https://www.linkedin.com/in/jenna-wamsley-a33a384b/"
					target="_blank"
				>
					Jenna Wamsley
				</a>{" "}
				(inspired by{" "}
				<a href="https://www.weather.shecodes.io/" target="_blank">
					SheCodes Weather App
				</a>
				).
				<br />
				<a
					href="https://github.com/jwam-create/my-vanilla-weather-app"
					target="_blank"
				>
					Open-sourced on GitHub
				</a>{" "}
				and{" "}
				<a href="https://upbeat-boyd-45c7a3.netlify.app/" target="_blank">
					hosted on Netlify
				</a>
				.
			</p>
		</div>
	);
}
