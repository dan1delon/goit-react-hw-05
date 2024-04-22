import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ films }) => {
  const location = useLocation();

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <ul className={css.list}>
      {films.map(film => {
        return (
          <li key={film.id} className={css.listItem}>
            <Link state={location} to={`/movies/${film.id}`}>
              <img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                    : defaultImg
                }
                alt="poster"
                className={css.img}
              />
              <p className={css.description}>{film.title}</p>
              <p className={css.descriptionRating}>
                &#127775;{film.vote_average}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
