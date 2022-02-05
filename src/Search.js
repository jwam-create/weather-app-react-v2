import React from "react";

import "./Search.css";

export default function Search() {
	const []
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleSearchInput(event) {
		console.log(event.target.value);
	}

	return (
		<div>
			<form className="Search" id="search-input" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city.."
							className="form-control search-input"
							id="city-input"
							autoComplete="off"
							onChange={handleSearchInput}
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
		</div>
	);
}
