import React, { useState, useContext } from "react";
import HeroContext from "../store/hero-context";
import axios from "axios";
import SearchedHero from "./SearchedHero";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const SearchHero = () => {
  const [heroes, setHeroes] = useState([]);
  const [heroSearched, setHeroSearched] = useState("");
  const [loading, setLoading] = useState(false);

  async function getHeroes() {
    setLoading(true);
    const response = await axios
      .get(
        `https://superheroapi.com/api.php/10215604128416219/search/${heroSearched}`
      )
      .catch((err) => console.error(err));

    setHeroes(response.data.results);
    setLoading(false);
    console.log(heroes);
  }

  const inputHandler = (event) => {
    setHeroSearched(event.target.value);
  };

  const initialValues = {
    name: "",
  };

  const onSubmit = (values) => {
    console.log(values);

    console.log(heroSearched);
    if (formik.touched && heroSearched.length > 0) {
      getHeroes();
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required("Completar"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  //add hero to the team
  const heroCtx = useContext(HeroContext);
  const heroItemAddHandler = (hero) => {
    heroCtx.addHero({ ...hero });
  };

  return (
    <Container className="hero-results-container">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Row className="form-col">
            <Col>
              <Form.Control
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={inputHandler}
                value={formik.values.name}
                placeholder={"Busca el nombre de tu héroe!"}
                className="form-control"
              />
              {formik.errors.name ? (
                <span className="form-error">{formik.errors.name}</span>
              ) : null}
              <br />
            </Col>{" "}
            <Col>
              <Button variant="secondary" type="submit">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {!loading && heroes.length > 0 && (
        <Row className="hero-cards">
          {heroes.map((hero) => (
            <SearchedHero
              key={hero.id}
              name={hero.name}
              alt={hero.name}
              image={hero.image}
              id={hero.id}
              onAdd={heroItemAddHandler.bind(null, hero)}
            />
          ))}
        </Row>
      )}
      {loading && <h5>Cargando...</h5>}
    </Container>
  );
};

export default SearchHero;
