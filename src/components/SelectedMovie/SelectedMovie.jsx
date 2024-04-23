import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './SelectedMovie.module.css';
import clsx from 'clsx';

const SelectedMovie = ({ film }) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.wrapperMain}>
      <Link to={backLinkRef.current} className={css.returnBtn}>
        Return
      </Link>
      <div className={css.wrapper}>
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
              : defaultImg
          }
          alt="poster"
          className={css.img}
        />
        <div className={css.contentWrapper}>
          <h2 className={css.title}>{film.title}</h2>
          <div className={css.firstBlock}>
            <p>Release date: {film.release_date}</p>
            <p>Rating&#127775;: {film.vote_average}</p>
          </div>
          <div className={css.overview}>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <p className={css.runtime}>Film runtime: {film.runtime} min.</p>
          </div>
          <div className={css.genres}>
            <p className={css.genreTitle}>Genres:</p>
            {film.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className={css.navWrap}>
            <NavLink
              to={'cast'}
              className={({ isActive }) =>
                clsx(css.navLink, { [css.active]: isActive })
              }
            >
              Cast
            </NavLink>
            <NavLink
              to={'reviews'}
              className={({ isActive }) =>
                clsx(css.navLink, { [css.active]: isActive })
              }
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
