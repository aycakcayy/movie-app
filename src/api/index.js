import axios from "axios";

const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchDiscoverMovie = () =>
  BASE_API.get("/discover/movie/?api_key=e28e6e1636ddcbe4da2b9c4ea5414d8b");

export const fetchTrendingMovie = (type) =>
  BASE_API.get(
    `trending/movie/${type}?api_key=e28e6e1636ddcbe4da2b9c4ea5414d8b`
  );

