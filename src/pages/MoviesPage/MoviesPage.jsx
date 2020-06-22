import React, { Component } from "react";
import { getMovies } from "../../services/api";
import { Search } from "../../components/Search/Search";
import { Link } from "react-router-dom";

import "./moviespage.scss";

class MoviesPage extends Component {
	state = {
		films: [],
	};

	componentDidMount() {
		const { location } = this.props;
		const current = new URLSearchParams(location.search).get("search");
		if (!current) return;
	}

	componentDidUpdate(prevProps, prevState) {
		const { location } = this.props;
		const current = new URLSearchParams(location.search).get("search");
		const prev = new URLSearchParams(prevProps.location.search).get("search");
		if (prev === current) {
			return;
		}
		this.drowMoviesPage(current);
	}

	drowMoviesPage = (query) => {
		if (query === null) {
			return;
		}
		getMovies(query).then(({ data }) => this.setState({ films: data.results }));
	};

	handleOnSubmit = (query) => {
		const { location, history } = this.props;
		history.push({
			...location,
			search: `?search=${query}`,
		});
	};

	render() {
		const { match, location } = this.props;
		const { films } = this.state;
		return (
			<>
				<Search onSubmit={this.handleOnSubmit} />
				{films.length > 0 && (
					<ul className="list">
						{films.map(({ id, title, name }) => (
							<li className="list__item" key={id}>
								<Link
									className="link"
									to={{
										pathname: `${match.path}${id} `,
										state: { from: location },
									}}
								>
									{title || name}
								</Link>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}

export default MoviesPage;
