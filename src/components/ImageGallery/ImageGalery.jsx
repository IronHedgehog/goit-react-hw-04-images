// import { PureComponent } from 'react/cjs/react.production.min';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// class ImageGallery extends PureComponent {
//   state = {
//     pokemon: null,
//     error: null,
//     status: Status.IDLE,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.inputValue;
//     const nextName = this.props.inputValue;

//     if (prevName !== nextName) {
//       this.setState({ status: Status.PENDING });

//       setTimeout(() => {
//         pokemonAPI
//           .fetchPokemon(nextName)
//           .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//           .catch(error => this.setState({ error, status: Status.REJECTED }));
//       }, 3000);
//     }
//   }

//   render() {
//     return null;
//   }
// }

// export default ImageGallery;
