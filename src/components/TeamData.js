import React, { useContext } from "react";
import HeroContext from "../store/hero-context";
import { ListGroup } from "react-bootstrap";
import styles from "./TeamData.module.css";

const TeamData = () => {
  const heroCtx = useContext(HeroContext);
  const heroesTotalNumber = heroCtx.heroes.length;

  //calculate powerstats
  //get array
  const membersIntelligence = heroCtx.heroes.map(
    (hero) => hero.powerstats.intelligence
  );
  const membersCombat = heroCtx.heroes.map((hero) => hero.powerstats.combat);
  const membersPower = heroCtx.heroes.map((hero) => hero.powerstats.power);
  const membersDurability = heroCtx.heroes.map(
    (hero) => hero.powerstats.durability
  );
  const membersSpeed = heroCtx.heroes.map((hero) => hero.powerstats.speed);
  const membersStrength = heroCtx.heroes.map(
    (hero) => hero.powerstats.strength
  );

  //turn string array into numbers array
  let NumberMembersIntelligence = membersIntelligence.map((i) => Number(i));
  let NumberMembersCombat = membersCombat.map((i) => Number(i));
  let NumberMembersPower = membersPower.map((i) => Number(i));
  let NumberMembersDurability = membersDurability.map((i) => Number(i));
  let NumberMembersSpeed = membersSpeed.map((i) => Number(i));
  let NumberMembersStrength = membersStrength.map((i) => Number(i));

  //add toghether numbers of the array
  let totalIntelligence = NumberMembersIntelligence.reduce((a, b) => a + b, 0);
  let totalCombat = NumberMembersCombat.reduce((a, b) => a + b, 0);
  let totalPower = NumberMembersPower.reduce((a, b) => a + b, 0);
  let totalDurability = NumberMembersDurability.reduce((a, b) => a + b, 0);
  let totalSpeed = NumberMembersSpeed.reduce((a, b) => a + b, 0);
  let totalStrength = NumberMembersStrength.reduce((a, b) => a + b, 0);

  //calculate averages
  //get array
  const membersWeight = heroCtx.heroes.map((hero) => hero.appearance.weight[1]);
  const membersHeight = heroCtx.heroes.map((hero) => hero.appearance.height[1]);

  //get only numbers from that array
  const NumberMembersWeight = membersWeight.map((elem) => parseInt(elem, 10));
  const NumberMembersHeight = membersHeight.map((elem) => parseInt(elem, 10));

  //add toghether numbers from array
  let totalWeight = NumberMembersWeight.reduce((a, b) => a + b, 0);
  let totalHeight = NumberMembersHeight.reduce((a, b) => a + b, 0);

  //divide that by total items
  let averageWeight = totalWeight / membersWeight.length;
  let averageHeight = totalHeight / membersHeight.length;

  //to decimal
  let averageWeightDecimal = averageWeight.toFixed(2);
  let averageHeightDecimal = averageHeight.toFixed(2);

  return (
    <div className={styles.container}>
      <p>Cantidad de heroes en tu equipo: {heroesTotalNumber}</p>
      <p>Acumulativo de powerstats</p>

      <ListGroup variant="flush" className="text-dark">
        <ListGroup.Item>Inteligencia: {totalIntelligence}</ListGroup.Item>
        <ListGroup.Item>Combate: {totalCombat}</ListGroup.Item>
        <ListGroup.Item>Poder: {totalPower}</ListGroup.Item>
        <ListGroup.Item>Duracion: {totalDurability}</ListGroup.Item>
        <ListGroup.Item>Velocidad: {totalSpeed}</ListGroup.Item>
        <ListGroup.Item>Fuerza: {totalStrength}</ListGroup.Item>
      </ListGroup>
      <br />
      <p>Promedios del equipo </p>
      <ListGroup className="text-dark">
        {averageWeight ? (
          <ListGroup.Item>Peso: {averageWeightDecimal}</ListGroup.Item>
        ) : (
          <ListGroup.Item>Peso: 0</ListGroup.Item>
        )}
        {averageHeight ? (
          <ListGroup.Item>Altura: {averageHeightDecimal}</ListGroup.Item>
        ) : (
          <ListGroup.Item>Altura: 0</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default TeamData;
