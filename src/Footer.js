import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer">
			<p>
				Coded by{" "}
				<a href="https://jennawamsley.com/" target="_blank" rel="noreferrer">
					Jenna Wamsley
				</a>{" "}
				(inspired by{" "}
				<a
					href="https://www.weather.shecodes.io/"
					target="_blank"
					rel="noreferrer"
				>
					SheCodes Weather App
				</a>
				).
				<br />
				<a
					href="https://github.com/jwam-create/weather-app-react-v2"
					target="_blank"
					rel="noreferrer"
				>
					Open-sourced on GitHub
				</a>{" "}
				and{" "}
				<a
					href="https://upbeat-boyd-45c7a3.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					hosted on Netlify
				</a>
				.
			</p>
		</div>
	);
}
