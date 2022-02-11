import { useState, useEffect } from 'react';
import './App.css';
import { Audio } from 'react-loader-spinner';
import SearchBar from './components/Searchbar/SearchBar';
import { getImg } from './API/AxiosApiSearch';
import ImageGallery from './components/ImageGallery/ImageGalery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const App = () => {
  // state = {
  //   inputValue: '',
  //   img: [],
  //   err: null,
  //   loader: false,
  //   page: 1,
  //   modal: false,
  //   bigImgUrl: '',
  // };
  const [inputValue, setInputValue] = useState('');
  const [img, setImg] = useState([]);
  const [err, setErr] = useState(null);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [bigImgUrl, setBigImgUrl] = useState('');

  useEffect(() => {
    if (page > 1) {
      const snapshot = document.body.scrollHeight;
      console.log(snapshot);
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }, [img, page]);

  useEffect(() => {
    if (inputValue === '') return;

    setLoader(true);
    getImg(inputValue, page)
      .then(img => setImg(prev => [...prev, ...img]))
      .catch(err => setErr(err.message))
      .finally(() => setLoader(false));
  }, [inputValue, page]);

  // getSnapshotBeforeUpdate() {
  //   return document.body.scrollHeight;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.img !== this.state.img) {
  //     window.scrollTo({
  //       top: snapshot - 180,
  //       behavior: 'smooth',
  //     });
  //   }

  //   if (
  //     prevState.inputValue !== this.state.inputValue ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.updateImgs();
  //   }
  // }

  // updateImgs = () => {
  //   this.setState({ loader: true });
  //   getImg(this.state.inputValue, this.state.page)
  //     .then(img => this.setState(prev => ({ img: [...prev.img, ...img] })))
  //     .catch(err => this.setState({ err: err.message }))
  //     .finally(() => this.setState({ loader: false }));
  // };

  const valueOfInput = inputValue => {
    // this.setState({ page: 1, img: [], err: null });
    setPage(1);
    setImg([]);
    setErr(null);
    setInputValue(inputValue);
  };

  const loadButton = () => {
    setPage(prev => prev + 1);
  };

  const toggleModal = () => {
    // this.setState(({ modal }) => ({
    //   modal: !modal,
    // }));
    setModal(!modal);
  };

  const bigImgForModal = bigImgUrl => {
    setBigImgUrl(bigImgUrl);
    toggleModal();
  };

  return (
    <>
      {modal && <Modal closeModal={toggleModal} bigImageUrl={bigImgUrl} />}
      <SearchBar valueOfInput={valueOfInput} />
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
};

export default App;
