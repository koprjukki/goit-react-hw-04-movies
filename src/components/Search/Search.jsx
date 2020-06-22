import React, { Component } from "react";

import "./_search.scss";

export class Search extends Component {
	state = {
		value: "",
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { value } = this.state;
		const { onSubmit } = this.props;
		onSubmit(value);
	};
	render() {
		const { value } = this.state;
		return (
			<div className="Searchbar">
				<form className="SearchForm" onSubmit={this.onSubmit}>
					<button type="submit" className="SearchFormButton">
						<span className="SearchFormButtonLabel">Search</span>
					</button>
					<input
						onChange={this.handleChange}
						className="SearchFormInput"
						type="text"
						value={value}
						autoComplete="true"
						placeholder="Search movies and films"
					/>
				</form>
			</div>
		);
	}
}
