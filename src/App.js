import { PureComponent } from 'react/cjs/react.production.min';
import './App.css';
import { Audio } from 'react-loader-spinner';
import SearchBar from './components/Searchbar/SearchBar';
import { getImg } from './API/AxiosApiSearch';
import ImageGallery from './components/ImageGallery/ImageGalery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends PureComponent {
  state = {
    inputValue: '',
    img: [],
    err: null,
    loader: false,
    page: 1,
    modal: false,
    bigImgUrl: '',
  };

  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    if (prevState.img !== this.state.img) {
      window.scrollTo({
        top: snapshot - 180,
        behavior: 'smooth',
      });
    }

    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.updateImgs();
    }
  }

  updateImgs = () => {
    this.setState({ loader: true });
    getImg(this.state.inputValue, this.state.page)
      .then(img => this.setState(prev => ({ img: [...prev.img, ...img] })))
      .catch(err => this.setState({ err: err.message }))
      .finally(() => this.setState({ loader: false }));
  };

  InputValue = inputValue => {
    this.setState({ page: 1, img: [], err: null });
    this.setState({ inputValue });
  };

  loadButton = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };

  bigImgForModal = bigImgUrl => {
    this.setState({ bigImgUrl });
    this.toggleModal();
  };

  render() {
    const { InputValue, loadButton, toggleModal, bigImgForModal } = this;
    const { img, loader, err, modal, bigImgUrl } = this.state;
    return (
      <>
        {modal && <Modal closeModal={toggleModal} bigImageUrl={bigImgUrl} />}
        <SearchBar InputValue={InputValue} />
        {err ? (
          <p>{err}</p>
        ) : (
          <>
            <ImageGallery img={img} bigImageForModal={bigImgForModal} />
            {loader && <Audio color="red" height={80} width={80} />}
            {img.length ? <Button onClickOnLoadMoreButton={loadButton} /> : ''}
          </>
        )}
      </>
    );
  }
}

export default App;
