import SearchHero from "../components/SearchHero";
import MemberHero from "../components/MemberHero";
import HeroContext from "../store/hero-context";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

const Team = (props) => {
  const heroCtx = useContext(HeroContext);

  const heroRemoveHandler = (id) => {
    heroCtx.removeHero(id);
  };

  return (
    <div className="heroteam-container">
      <SearchHero />
      <Container className="hero-members-container">
        <h2>Equipo</h2>

        {heroCtx.heroes.length > 0 ? (
          <Row className="hero-cards">
            {heroCtx.heroes.map((hero) => (
              <MemberHero
                name={hero.name}
                key={hero.id}
                alt={hero.name}
                image={hero.image}
                powerstats={hero.powerstats}
                onRemove={heroRemoveHandler.bind(null, hero.id)}
                work={hero.work}
                eyescolor={hero.appearance}
                appearance={hero.appearance}
                biography={hero.biography}
              />
            ))}
          </Row>
        ) : (
          <h4>No hay héroes en tu equipo, agregalos!</h4>
        )}
      </Container>
    </div>
  );
};

export default Team;
