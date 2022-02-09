import s from './imageGaleryItem.module.css';

const ImageGalleryItem = ({ img }) => {
  return (
    <li className={s['gallery-item']}>
      <img
        className={s['ImageGalleryItem-image']}
        src={img.webformatURL}
        alt={img.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
