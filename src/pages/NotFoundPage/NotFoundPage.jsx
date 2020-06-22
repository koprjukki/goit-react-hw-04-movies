import React from "react";
import { NavLink } from "react-router-dom";
import router from "../../services/router";

const NotFoundPage = () => (
	<>
		<h1 style={{ textAlign: "center" }}>
			Sorry, page not found
			<br />
			<NavLink to={router.HOME}>Back to Home Page</NavLink>
		</h1>
	</>
);

export default NotFoundPage;
