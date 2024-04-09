import toast from 'react-hot-toast';
import { getMoviesByQuery } from '../../movies-api';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    setSearchParams({ query });

    const notify = () => toast('Please, enter a keyword to search');
    if (query === '') {
      notify();
      return;
    }

    e.target.reset();
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    getMoviesByQuery(query)
      .then(films => {
        setMoviesByQuery([]);
        setMoviesByQuery(films);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {error ? <ErrorMessage /> : <MovieList films={moviesByQuery} />}
      {isLoading && <Loader />}
    </>
  );
};

export default MoviesPage;
