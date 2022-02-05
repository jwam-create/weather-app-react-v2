import React from "react";

import "./Search.css";

export default function Search() {
	return (
		<form className="Search" id="search-input">
			<div className="row">
				<div className="col-9">
					<input
						type="search"
						placeholder="Enter a city.."
						className="form-control search-input"
						id="city-input"
						autoComplete="off"
					/>
				</div>
				<div className="col-3">
					<input
						type="submit"
						className="btn btn-primary w-100"
						value="Search"
					/>
				</div>
			</div>
		</form>
	);
}
