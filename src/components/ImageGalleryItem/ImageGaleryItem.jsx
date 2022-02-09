import s from './imageGaleryItem.module.css';

const ImageGalleryItem = ({ img, bigImageForModal }) => {
  return (
    <li
      className={s['gallery-item']}
      onClick={() => bigImageForModal(img.largeImageURL)}
    >
      <img
        className={s['ImageGalleryItem-image']}
        src={img.webformatURL}
        alt={img.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
