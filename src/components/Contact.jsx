import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contacto</h2>
        <br/>
        <Row>
          <Col lg={6}>
            <div className="contact-info">
              <h3>Información de contacto</h3>
              <p>
                <strong>Dirección:</strong> Calle Principal, Ciudad, País
              </p>
              <p>
                <strong>Teléfono:</strong> +1234567890
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="social-links">
                <h3>O comunicate por las redes sociales:</h3>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>
              <br />
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>
              <br />
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Ingresa tu mensaje" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">Enviar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
