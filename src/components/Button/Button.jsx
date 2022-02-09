import s from './Button.module.css';

const Button = ({ onClickOnLoadMoreButton }) => {
  return (
    <button className={s['Button']} onClick={onClickOnLoadMoreButton}>
      Load more
    </button>
  );
};

export default Button;
