import React, { Component } from "react";
import { getReviews } from "../../services/api";

import "./_reviewsPage.scss";

class ReviewsPages extends Component {
	state = { movies: [] };

	componentDidMount = () => {
		this.drowReviewsPages();
	};

	drowReviewsPages = () => {
		const { match } = this.props;
		const { movieId } = match.params;

		getReviews(movieId).then(({ data }) =>
			this.setState({ movies: data.results }),
		);
	};

	render() {
		const { movies } = this.state;

		return (
			<>
				{movies.length > 0 ? (
					<ul className="reviewscontainer">
						{movies.map(({ author, id, content }) => (
							<li className="reviewsitem" key={id}>
								<h4>Author: {author}</h4>
								<p>{content}</p>
							</li>
						))}
					</ul>
				) : (
					<p className="reviewscontainer">
						We don't have any reviews for this movie.
					</p>
				)}
			</>
		);
	}
}

export default ReviewsPages;
