import s from './Loader.module.css';

export const Loader = () => {
  return (
    <p className={s.loader}>
      <span
        className="spinner-border spinner-border-sm spinner is-hidden"
        role="status"
        aria-hidden="true"
      ></span>
    </p>
  );
};

