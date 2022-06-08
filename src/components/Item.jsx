import React from 'react'
import {Button, Card} from 'react-bootstrap'

export default function Item({personaje}) {
const {name, image, species, status} = personaje

  return (
    <div>
      <Card style={{ width: '15rem', margin: '1rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           Especie: { species }
           Estado: {status}
          </Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
     </Card>

    </div>
  )
}
