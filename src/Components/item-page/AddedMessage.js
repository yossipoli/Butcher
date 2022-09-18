import Toast from 'react-bootstrap/Toast';

function AddedMessage() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Your Cart</strong>
        {/* <small>11 mins ago</small> */}
      </Toast.Header>
      <Toast.Body>Product is added to your cart</Toast.Body>
    </Toast>
  );
}

export default AddedMessage;