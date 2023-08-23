import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Productcard = ({price, name, description, image}) => {

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>NAME: {name}</Card.Title>
        <Card.Title>PRICE: {price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Productcard