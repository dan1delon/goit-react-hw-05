import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../movies-api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(data => setTrendingMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className={css.headline}>Trending today</h1>
      {error ? <ErrorMessage /> : <MovieList films={trendingMovies} />}
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
