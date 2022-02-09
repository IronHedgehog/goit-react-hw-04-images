import { PureComponent } from 'react/cjs/react.production.min';
import './App.css';
import { Audio } from 'react-loader-spinner';
import SearchBar from './components/Searchbar/SearchBar';
import { getImg } from './API/AxiosApiSearch';
import ImageGallery from './components/ImageGallery/ImageGalery';
import Button from './components/Button/Button';

class App extends PureComponent {
  state = {
    inputValue: '',
    img: [],
    err: null,
    loader: false,
    page: 1,
  };

  componentDidMount() {
    getImg()
      .then(img => this.setState({ img }))
      .catch(err => this.setState({ err: err.message }));
  }

  componentDidUpdate(prevProps, prevState) {
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
      .finally(this.setState({ loader: false }));
  };

  InputValue = inputValue => {
    this.setState({ page: 1, img: [], err: null });
    this.setState({ inputValue });
  };

  loadButton = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { InputValue, loadButton } = this;
    const { inputValue, img, loader, err } = this.state;
    return (
      <>
        <SearchBar InputValue={InputValue} />
        {err ? (
          <p>{err}</p>
        ) : (
          <>
            <ImageGallery img={img} />
            {loader ? (
              <Audio color="red" height={80} width={80} />
            ) : (
              <Button onClickOnLoadMoreButton={loadButton} />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
