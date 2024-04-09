import css from './SearchForm.module.css';
import { Toaster } from 'react-hot-toast';

const SearchForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="search"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              padding: '16px',
              color: 'white',
              backgroundColor: '#CC0000',
            },
          }}
        />
      </form>
    </div>
  );
};

export default SearchForm;
