import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGVlODNmYTRlNDdjOTM5OTMwNWIzMmFiYTgxM2Y3MSIsInN1YiI6IjY2MTNkOTg2ZDE4YjI0MDEzMDMzNTY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8krVG7xjc0ymgYApm98x-CSoycqTt_vC7OFmoXDDyg',
};
axios.defaults.params = {
  language: 'en-US',
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`);
  return data.results;
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`);
  return data.results;
};

export const getMoviesById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMoviesCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};
