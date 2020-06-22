import React from "react";
import { NavLink } from "react-router-dom";

const MovieInfo = ({
	location,
	poster_path,
	title,
	release_date,
	vote_average,
	overview,
	genres,
	id,
	onGoBack,
}) => {
	return (
		<div className="container">
			<button onClick={onGoBack}> Go back</button>
			<div className="description">
				{poster_path && (
					<img
						className="img"
						src={`https://image.tmdb.org/t/p/w400${poster_path}`}
						alt=""
					></img>
				)}
				<div>
					<h2>
						{title} ({`${release_date}`.slice(0, 4)})
					</h2>
					<p> User Score: {`${vote_average}` * 10}%</p>
					<h2>Overview</h2>
					<p>{overview}</p>
					<h2>Genres</h2>
					<ul>
						{genres &&
							genres.length > 0 &&
							genres.map(({ id, name }) => <li key={id}>{name}</li>)}
					</ul>
				</div>
			</div>

			<div>
				<p>Additional information</p>
				<ul>
					<li>
						<NavLink
							to={{ pathname: `/movies/${id}/cast`, state: location.state }}
						>
							Cast
						</NavLink>
					</li>
					<li>
						<NavLink
							to={{
								pathname: `/movies/${id}/reviews`,
								state: location.state,
							}}
						>
							Reviews
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MovieInfo;
