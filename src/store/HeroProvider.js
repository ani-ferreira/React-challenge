import React, { useReducer } from "react";
import HeroContext from "./hero-context";

const defaultHeroValues = { heroes: [] };

const reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedHeroes = state.heroes.concat(action.hero);
    return {
      heroes: updatedHeroes,
    };
  }
  if (action.type === "REMOVE") {
    let updatedHeroes = state.heroes.filter((hero) => hero.id !== action.id);
    return {
      heroes: updatedHeroes,
    };
  }

  return defaultHeroValues;
};

const HeroProvider = (props) => {
  const [heroState, dispatchAction] = useReducer(reducer, defaultHeroValues);

  const addHeroHandler = (hero) => {
    dispatchAction({ type: "ADD", hero: hero });
    console.log(hero);
  };
  const removeHeroHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const heroContext = {
    heroes: heroState.heroes,
    addHero: addHeroHandler,
    removeHero: removeHeroHandler,
  };

  return (
    <HeroContext.Provider value={heroContext}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
