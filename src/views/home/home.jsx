import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Banner5 from '../../assets/imagenes/banners/banner5.jpg';
import '../home/home.css';

const Home = () => {
  return (
    <Container>
      <section>
        <Row className="mt-5 m-2">
          <div className="calltoaction">
            <h2>Revisa nuestra carta de las mejores Pizzas </h2>
            <br />
            <Button variant="danger" as={Link} to="/Menu">
              Haz click aquí
            </Button>
          </div>
        </Row>
      </section>

      <section>
        <Row className="mt-5">
          <Col md={6} className="p-5">
            <div>
              <h2> Pizzeria Best choice</h2>
            </div>
            <div>
              <p>
                El secreto del éxito se asemeja bastante a hacer una mejor pizza... cuanto más empeño pongas, mejor será el resultado. Hoy en día, buscamos la perfección como lo venimos haciendo desde el momento en que inauguramos nuestro primer restaurante hace más de 30 años. Hoy mantenemos el deseo de ser los mejores en preparar nuevos productos y nuevas e innovadoras recetas.
              </p>
              <Link className="link" to="/Nosotros">
                Ver más
              </Link>
            </div>
          </Col>

          <Col>
            <div>
              <Image src={Banner5} fluid />
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <Row className="mt-5 m-2">
          <div className="calltoaction2">
            <h2>Reserva con nosotros</h2>
            <br />
            <Button variant="danger" as={Link} to="/Reservas">
              Haz click aquí
            </Button>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
