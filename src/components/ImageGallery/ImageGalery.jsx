import ImageGalleryItem from '../ImageGalleryItem/ImageGaleryItem';
import s from './imageGalery.module.css';
const ImageGallery = ({ img }) => {
  return (
    <ul className={s['ImageGallery']}>
      {img.map(item => (
        <ImageGalleryItem img={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
