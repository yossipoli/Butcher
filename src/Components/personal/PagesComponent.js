import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import './Personal.css'

function PagesComponent() {
  return (
    <div className="personal-pages">
      <ButtonGroup size="lg" className="mb-2">
        <Link to='personal-details'><Button>Details</Button></Link>
        <Link to='cart'><Button>Cart</Button></Link>
        <Link to='history'><Button>History</Button></Link>
      </ButtonGroup>
    </div>
  );
}

export default PagesComponent;