import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../movies-api';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import Cast from '../Cast/Cast';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    async function fetchReviews() {
      try {
        const data = await getMoviesCast(movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error ? <ErrorMessage /> : <Cast cast={cast} />}
      {isLoading && <Loader />}
    </>
  );
};

export default MovieCast;
