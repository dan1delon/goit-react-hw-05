import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Reviews</h1>
      {reviews.length === 0 && (
        <p>Sorry, there is no reviews on this film :(</p>
      )}
      <ul className={css.list}>
        {reviews.map(review => {
          return (
            <li className={css.item} key={review.id}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
