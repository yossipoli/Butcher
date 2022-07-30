import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
import AddToCartButtons from "../AddToCartButtons";
import { Link, useParams } from "react-router-dom";
import { Images } from "./../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

function CardComponent(props) {
  
  const [image, setImage] = useState(false);
  async function getImage() {
    setImage(await Images.getImageByProductId(props.id));
  }
  getImage();

  return (
    <Card className="itemCard" style={{ width: "22rem" }}>
      <Link to={`/products/${props.id}`}>
        <Card.Img
          className="pic"
          variant="top"
          src={image.src || <Spinner animation="grow" variant="light" />}
          alt={props.name}
          title={props.name}
        />
      </Link>
      <Card.Body>
        <Card.Title className="name">{props.name}</Card.Title>

        <Card.Text className="textArea">{props.description}</Card.Text>
        <Card.Text className="textArea">{props.price}₪ for 1k/g</Card.Text>

        <AddToCartButtons />
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
