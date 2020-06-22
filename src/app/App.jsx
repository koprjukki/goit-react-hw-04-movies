import React, { Component, lazy, Suspense } from "react";
import "./_app.scss";

import { LoadSpinner } from "../components/Loader/LoadSpinner";
import { Navigation } from "../components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";

import router from "../services/router";

const AsyncTrendingPage = lazy(() =>
	import(
		"../pages/TrendingPage/TrendingPage" /* webpackChunkName: "TrendingPage" */
	),
);

const AsyncMoviesPage = lazy(() =>
	import("../pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */),
);

const AsyncMovieDetailsPage = lazy(() =>
	import(
		"../pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDescriptionPage" */
	),
);

const AsyncNotFoundPage = lazy(() =>
	import(
		"../pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "NotFoundPage" */
	),
);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />

				<Suspense fallback={LoadSpinner}>
					<Switch>
						<Route exact path={router.HOME} component={AsyncTrendingPage} />
						<Route
							exact
							path={router.MOVIES_PAGE}
							component={AsyncMoviesPage}
						/>
						<Route
							path={router.MOVIES_DETAILS}
							component={AsyncMovieDetailsPage}
						/>
						<Route component={AsyncNotFoundPage} />
					</Switch>
				</Suspense>
			</div>
		);
	}
}

export default App;
