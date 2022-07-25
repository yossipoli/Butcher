import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";
import AddToCartButtons from "../AddToCartButtons";

// const colors = [
//   "lightpink",
//   "orange",
//   "yellow",
//   "lightgreen",
//   "lightblue",
//   "violet",
// ];
function CardComponent({ edit, id, name, ...props }) {
  return (
    <Card
      className="itemCard"
      style={{ width: "22rem" }}
    >
      <Card.Img className="pic" variant="top" src="/photos/burger/0.jpg" />
      <Card.Body>
        <Card.Title className="name"> name{name}</Card.Title>

          <Card.Text className="textArea">
          A hamburger made from a combination of beef shoulder, asado, and 20% fat for a perfect culinary experience. The meat from which the hamburger is made up is of particularly fine quality and is ground daily. You can choose another combination of beef/mutton/lamb cuts for an additional fee.
              {props.description}
          </Card.Text>

        <AddToCartButtons/>

      </Card.Body>
    </Card>
  );
}

export default CardComponent;
