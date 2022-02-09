import ImageGalleryItem from './ImageGalleryItem/ImageGaleryItem';

const ImageGallery = ({ img }) => {
  return (
    <ul>
      {img.map(item => (
        <ImageGalleryItem img={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
