import Carousel from 'react-bootstrap/Carousel';
import './Gallery.css'

function Gallery({images, productName}) {
  return (
    <Carousel fade>
      {
        Object.keys(images) && Object.values(images).map((image,index)=> 
        <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image.src}
          alt={'photo #' + index.toString() + ' of ' + productName}
        />
      </Carousel.Item>
      )}

    </Carousel>
  );
}

export default Gallery;