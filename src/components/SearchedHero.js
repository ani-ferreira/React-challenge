import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import HeroContext from "../store/hero-context";

const SearchedHero = (props) => {
  const heroCtx = useContext(HeroContext);

  return (
    <Col lg={2} md={3} sm={4} xs={6}>
      <Card className="bg-dark text-white">
        <form id={props.id}>
          <Card.Img variant="top" src={props.image.url} alt={props.name} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>

            {heroCtx.heroes.length <= 5 ? (
              <Button variant="outline-success" onClick={props.onAdd}>
                Agregar
              </Button>
            ) : (
              <div>
                <Button disabled variant="secondary">
                  Agregar
                </Button>
                <p>Tu equipo esta completo!</p>
              </div>
            )}
          </Card.Body>
        </form>
      </Card>
    </Col>
  );
};

export default SearchedHero;
