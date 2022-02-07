import { PureComponent } from 'react/cjs/react.production.min';
import './App.css';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/SearchBar';

class App extends PureComponent {
  state = {
    inputValue: '',
  };

  InputValue = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    const { InputValue } = this;
    const { inputValue } = this.state;
    return (
      <>
        <SearchBar InputValue={InputValue} />
        {/* <ImageGallery inputValue={inputValue} /> */}
      </>
    );
  }
}

export default App;
