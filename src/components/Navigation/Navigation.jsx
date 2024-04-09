import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <nav className={css.wrapper}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
