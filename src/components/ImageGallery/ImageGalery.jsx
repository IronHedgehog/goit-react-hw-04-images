import ImageGalleryItem from '../ImageGalleryItem/ImageGaleryItem';
import s from './imageGalery.module.css';
const ImageGallery = ({ img, bigImageForModal }) => {
  console.log();
  return (
    <ul className={s['ImageGallery']}>
      {img.map(item => (
        <ImageGalleryItem
          img={item}
          key={item.id}
          bigImageForModal={bigImageForModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
