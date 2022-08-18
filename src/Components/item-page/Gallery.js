import Carousel from 'react-bootstrap/Carousel';
import './Gallery.css'

function Gallery({images}) {
  return (
    <Carousel fade>
      {
        images && images.map(image=> 
        <Carousel.Item>
        <img
          className="d-block w-100"
          // src="holder.js/800x400?text=First slide&bg=373940"
          src={image.src}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      )}

    </Carousel>
  );
}

export default Gallery;