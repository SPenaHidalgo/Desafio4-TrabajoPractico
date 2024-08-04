import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Context } from '../contexts/PizzaContext';
import IconCart from '../componentes/IconCart';

export default function Pizza() {
  const { id } = useParams();
  const { pizzas, addCart, monedaLocal } = useContext(Context);

  return (
    <Container>
      {pizzas
        .filter((pizza) => pizza.id === id)
        .map((pizza) => (
          <Card key={pizza.id} className="py-3">
            <Row className="g-3">
              <Col md={4}>
                <Card.Img src={pizza.img} alt={pizza.name} />
              </Col>
              <Col md={8}>
                <Card.Header>
                  <h5 className="text-capitalize fw-bold">{pizza.name}</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{pizza.desc}</Card.Text>
                  <Card.Text>Ingredientes:</Card.Text>
                  <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                      <li key={index}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="fw-bold fs-5">{monedaLocal(pizza.price)}</span>
                    <Button onClick={() => addCart(pizza)}>
                      Añadir <IconCart tamaño=".9rem" color="white" />
                    </Button>
                  </div>
                </Card.Footer>
              </Col>
            </Row>
          </Card>
        ))}
    </Container>
  );
}
