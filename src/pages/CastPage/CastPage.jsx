import React, { Component } from "react";
import { getCast } from "../../services/api";
import "./_castPage.scss";

class CastPage extends Component {
	state = {
		casts: "",
	};

	componentDidMount() {
		this.drowCastPage();
	}

	drowCastPage = () => {
		const { match } = this.props;
		const { movieId } = match.params;

		getCast(movieId).then(({ data }) => this.setState({ casts: data.cast }));
	};

	render() {
		const { casts } = this.state;

		return (
			<>
				{casts && (
					<ul className="castlist">
						{casts.map(
							({ cast_id, profile_path, original_title, name, character }) => (
								<li className="castlist__item" key={cast_id}>
									<img
										className="castimg"
										src={`https://image.tmdb.org/t/p/w500${profile_path}`}
										alt={original_title}
									/>
									<p>{name}</p>
									<p>{character}</p>
								</li>
							),
						)}
					</ul>
				)}
			</>
		);
	}
}

export default CastPage;
