import React, { Component, lazy } from "react";
import { Route } from "react-router-dom";
import { getMovieDescription } from "../../services/api";
import router from "../../services/router";

import MovieInfo from "./MovieInfo";

const AsyncCastPage = lazy(() =>
	import("../CastPage/CastPage" /* webpackChunkName: "CastPage" */),
);
const AsyncReviewsPage = lazy(() =>
	import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "ReviewsPage" */),
);

class MovieDetailsPage extends Component {
	state = { movies: [], locationLink: "" };

	componentDidMount = () => {
		const { match, location } = this.props;
		const { movieId } = match.params;
		if (location.state) {
			this.setState({
				locationLink: location.state.locationLink,
			});
		}

		getMovieDescription(movieId).then(({ data }) =>
			this.setState({
				movies: data,
			}),
		);
	};

	handleGoBack = () => {
		const { location, history } = this.props;
		if (location.state) {
			return history.push(location.state.from);
		}

		if (location.state === {}) {
			return history.push(location.pathname);
		}
		history.push("/movies");
	};

	render() {
		const { movies } = this.state;

		return (
			<>
				<MovieInfo
					location={this.props.location}
					{...movies}
					onGoBack={this.handleGoBack}
				/>
				<Route exact path={router.MOVIES_CAST} component={AsyncCastPage} />
				<Route path={router.MOVIE_REVIEWS} component={AsyncReviewsPage} />
			</>
		);
	}
}

export default MovieDetailsPage;
