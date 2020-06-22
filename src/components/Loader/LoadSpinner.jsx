import React from "react";
import Loader from "react-loader-spinner";

export const LoadSpinner = () => {
	return (
		<div className="Loader">
			<Loader type="TailSpin" color={"black"} height={100} width={100} />
		</div>
	);
};
