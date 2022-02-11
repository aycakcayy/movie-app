import axios from "axios";

const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchDiscoverMovie = () =>
  BASE_API.get("/discover/movie/?api_key=e28e6e1636ddcbe4da2b9c4ea5414d8b");

export const fetchTrendingMovie = (type) =>
  BASE_API.get(
    `trending/movie/${type}?api_key=e28e6e1636ddcbe4da2b9c4ea5414d8b`
  );

  export const fetchSearch = (search_movie) =>
  BASE_API.get(
    `search/movie?api_key=49f6642bafe8fa24b033f9fe9bdb72c5&query=${search_movie}`
  );
  export const fetchMovies = (movie_id) =>
  BASE_API.get(`movie/${movie_id}?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

  export const fetchCast = (movie_id) =>
  BASE_API.get(
    `movie/${movie_id}/credits?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`
  );
  export const fetchPopularMovie = () =>
  BASE_API.get(`movie/popular?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);

 export const fetchTopRatedMovie = () =>
  BASE_API.get(`movie/top_rated?api_key=49f6642bafe8fa24b033f9fe9bdb72c5`);




