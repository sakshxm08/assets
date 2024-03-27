// src/components/ImageList.jsx
import PropTypes from "prop-types";

const ImageList = ({ images }) => {
  return (
    <div>
      <h2>Images</h2>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.imageUrl} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageList;
