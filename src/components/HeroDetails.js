import { ListGroup } from "react-bootstrap";

const HeroDetails = (props) => {
  return (
    <div>
      <ListGroup variant="flush ">
        <ListGroup.Item variant="light">Nombre: {props.name}</ListGroup.Item>
        <ListGroup.Item variant="light">
          Alias: {props.biography.aliases[1]}
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          Lugar de trabajo: {props.work.base}
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          Altura: {props.appearance.height[1]}
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          Peso: {props.appearance.weight[1]}
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          Color de ojos: {props.appearance["eye-color"]}
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          Color de pelo: {props.appearance["hair-color"]}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default HeroDetails;
