import { PureComponent } from 'react/cjs/react.production.min';
import s from './searchBar.module.css';

class SearchBar extends PureComponent {
  state = {
    inputValue: '',
  };
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    this.props.InputValue(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { onInputChange, onSubmitEvent } = this;
    const { inputValue } = this.state;
    return (
      <header className={s['Searchbar']}>
        <form className={s['SearchForm']} onSubmit={onSubmitEvent}>
          <button
            disabled={this.state.inputValue.trim() === ''}
            type="submit"
            className={s['SearchForm-button']}
          >
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={onInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
