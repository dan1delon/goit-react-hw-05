import { Suspense, lazy, useEffect, useState } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { getMoviesById } from '../../movies-api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import SelectedMovie from '../../components/SelectedMovie/SelectedMovie';
const MovieReviews = lazy(() =>
  import('../../components/MovieReviews/MovieReviews')
);
const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchFilmById() {
      try {
        const data = await getMoviesById(movieId);
        setSelectedMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFilmById();
  }, [movieId]);

  return (
    <>
      {error ? (
        <ErrorMessage />
      ) : (
        selectedMovie !== null && <SelectedMovie film={selectedMovie} />
      )}
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
