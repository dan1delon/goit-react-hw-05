import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../movies-api';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import Reviews from '../Reviews/Reviews';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    async function fetchReviews() {
      try {
        const data = await getMoviesReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {error ? <ErrorMessage /> : <Reviews reviews={reviews} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default MovieReviews;
