import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel fade interval={null}>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default ImageCarousel;