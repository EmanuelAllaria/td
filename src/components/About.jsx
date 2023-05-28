import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Container
            style={{
                padding:"50px",
            }}
        >
        <Row className="align-items-center">
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam diam et sem ullamcorper, sed
                ullamcorper libero tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Quisque id vulputate mi, ac ullamcorper erat. Sed feugiat urna vel erat tincidunt, nec
                ultrices velit interdum.
              </p>
              <p>
                Phasellus venenatis libero vitae dui porta, vel tincidunt leo posuere. Nulla facilisi. Fusce auctor
                vestibulum odio non aliquam. Nam rutrum ipsum sed neque feugiat fringilla. Vivamus fermentum justo non
                sem hendrerit, vel efficitur tortor volutpat.
              </p>
            </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;