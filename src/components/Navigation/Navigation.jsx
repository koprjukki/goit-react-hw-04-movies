import React from "react";
import { NavLink } from "react-router-dom";
import router from "../../services/router";
import "./_navigation.scss";

export const Navigation = () => {
	return (
		<ul className="navlist">
			<li className="navlist__item">
				<NavLink exact className="link" to={router.HOME}>
					homepage
				</NavLink>
			</li>
			<li className="navlist__item">
				<NavLink className="link" to={router.MOVIES_PAGE}>
					movies
				</NavLink>
			</li>
		</ul>
	);
};
