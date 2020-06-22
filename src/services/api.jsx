import axios from "axios";

const KEY = "c4bc95402830765a22c2cbbc020d255a";

export const getTrending = () =>
	axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);

export const getMovies = (query = "") =>
	axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
	);

export const getMovieDescription = (id) =>
	axios.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`,
	);

export const getCast = (id) =>
	axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`);

export const getReviews = (id) =>
	axios.get(
		`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
	);
