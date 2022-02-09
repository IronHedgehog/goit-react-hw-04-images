const ImageGalleryItem = ({ img }) => {
  return (
    <li className="gallery-item">
      <img src={img.webformatURL} alt={img.tags} />
    </li>
  );
};

export default ImageGalleryItem;
