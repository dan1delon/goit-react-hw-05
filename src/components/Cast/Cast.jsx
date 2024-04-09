import css from './Cast.module.css';

const Cast = ({ cast }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Cast</h1>
      {cast.length === 0 && (
        <p>Sorry, we do not have the information about this films cast:(</p>
      )}
      <ul className={css.list}>
        {cast.map(cast => {
          return (
            <li key={cast.id} className={css.item}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                className={css.image}
              />
              <div className={css.nameWrap}>
                <h3 className={css.name}>{cast.name}</h3>
                <p className={css.character}>{cast.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
