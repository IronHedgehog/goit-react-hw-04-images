import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, bigImageUrl }) => {
  useEffect(() => {
    const closeOnESK = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeOnESK);

    return () => {
      window.removeEventListener('keydown', closeOnESK);
    };
  });

  // componentDidMount() {
  //   window.addEventListener('keydown', closeOnESK);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', closeOnESK);
  // }

  const closeOnBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s['Overlay']} onClick={closeOnBackdropClick}>
      <div className={s['modal']}>
        <img src={bigImageUrl} alt="" />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
