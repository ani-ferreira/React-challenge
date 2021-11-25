import React, { useState } from "react";
import { Card, Button, ListGroup, Col, Modal } from "react-bootstrap";
import HeroDetails from "./HeroDetails";

const MemberHero = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <Col lg={4} md={5} sm={6}>
        <Card styles={{ color: "red" }}>
          <Card.Img variant="top" src={props.image.url} alt={props.name} />

          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Combate: {props.powerstats.combat}
              </ListGroup.Item>
              <ListGroup.Item>
                Durabilidad: {props.powerstats.durability}
              </ListGroup.Item>
              <ListGroup.Item>
                Inteligencia: {props.powerstats.intelligence}
              </ListGroup.Item>
              <ListGroup.Item>Poder: {props.powerstats.power}</ListGroup.Item>
              <ListGroup.Item>
                Velocidad: {props.powerstats.speed}
              </ListGroup.Item>
              <ListGroup.Item>
                Fuerza: {props.powerstats.strength}
              </ListGroup.Item>
            </ListGroup>
            <Button variant="outline-secondary" onClick={handleShowDetails}>
              Ver detalles
            </Button>
            &nbsp;
            <Button variant="outline-danger" onClick={props.onRemove}>
              Eliminar
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HeroDetails
            name={props.name}
            work={props.work}
            eyescolor={props.appearance}
            appearance={props.appearance}
            biography={props.biography}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemberHero;
