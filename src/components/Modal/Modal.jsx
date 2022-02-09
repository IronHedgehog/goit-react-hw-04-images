import { createPortal } from 'react-dom/cjs/react-dom.development';
import { Component } from 'react/cjs/react.production.min';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnESK);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnESK);
  }

  closeOnESK = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  closeOnBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { closeOnBackdropClick } = this;
    return createPortal(
      <div className={s['Overlay']} onClick={closeOnBackdropClick}>
        <div className={s['modal']}>
          <img src={this.props.bigImageUrl} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
