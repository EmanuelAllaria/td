import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Services.css';

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Servicio 1',
      description: 'Descripción del Servicio 1.',
      images: [
        { id: 1, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'Before 1' },
        { id: 2, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'After 1' },
      ],
    },
    {
      id: 2,
      title: 'Servicio 2',
      description: 'Descripción del Servicio 2.',
      images: [
        { id: 1, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'Before 2' },
        { id: 2, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'After 2' },
      ],
    },
    {
      id: 3,
      title: 'Servicio 3',
      description: 'Descripción del Servicio 3.',
      images: [
        { id: 1, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'Before 3' },
        { id: 2, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'After 3' },
      ],
    },
    {
      id: 4,
      title: 'Servicio 4',
      description: 'Descripción del Servicio 4.',
      images: [
        { id: 1, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'Before 4' },
        { id: 2, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'After 4' },
      ],
    },
    {
      id: 5,
      title: 'Servicio 5',
      description: 'Descripción del Servicio 5.',
      images: [
        { id: 1, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'Before 5' },
        { id: 2, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'After 5' },
      ],
    },
    {
      id: 6,
      title: 'Servicio 6',
      description: 'Descripción del Servicio 6.',
      images: [
        { id: 1, src: 'https://fondosmil.com/fondo/38780.jpg', alt: 'Before 6' },
        { id: 2, src: 'https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg', alt: 'After 6' },
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <h2 className="section-title">Nuestros Servicios</h2>
        <br/>
        <Row>
          {servicesData.map((service) => (
            <Col key={service.id} lg={4} md={6}>
              <Card className="service-card">
                <Carousel>
                  {service.images.map((image) => (
                    <Carousel.Item key={image.id}>
                      <img className="d-block w-100" src={image.src} alt={image.alt} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
