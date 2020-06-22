import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getTrending } from "../../services/api";

class TrendingPage extends Component {
	state = {
		trends: [],
	};

	componentDidMount() {
		this.drowTrendingPage();
	}

	drowTrendingPage() {
		getTrending().then(({ data }) => this.setState({ trends: data.results }));
	}

	render() {
		const { location } = this.props;
		const { trends } = this.state;
		return (
			<>
				<h2 className="title">Trending today</h2>
				<ul className="list">
					{trends.map(({ id, title, name }) => (
						<li className="list__item" key={id}>
							<Link
								className="link"
								to={{
									pathname: `/movies/${id} `,
									state: { from: location },
								}}
							>
								{title || name}
							</Link>
						</li>
					))}
				</ul>
			</>
		);
	}
}

TrendingPage.propTypes = {
	history: PropTypes.shape({}).isRequired,
	location: PropTypes.shape({}).isRequired,
	match: PropTypes.shape({}).isRequired,
};

export default TrendingPage;
