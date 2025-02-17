import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/PizzaContext';
import IconCart from '../componentes/IconCart';

export default function Home() {
  const { pizzas, addCart, monedaLocal } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Container className="home mb-3">
        <div className="home-body">
          <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </div>
      </Container>
      <Container>
        <Row xs={1} md={3} lg={4} className="g-3 mb-3">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card>
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Header className="text-center">
                  <span className="text-capitalize fw-bold">{pizza.name}</span>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Ingredientes:</Card.Text>
                  <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                      <li key={index}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Text className="fw-bold mb-2">
                    {monedaLocal(pizza.price)}
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/desafio-mammamia/pizza/${pizza.id}`)}
                    >
                      Ver más
                    </Button>
                    <Button variant="primary" onClick={() => addCart(pizza)}>
                      Añadir <IconCart tamaño=".9rem" color="white" />{' '}
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}