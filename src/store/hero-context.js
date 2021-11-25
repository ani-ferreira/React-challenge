import { createContext } from "react";

const HeroContext = createContext({
  heroes: [],
  addHero: (item) => {},
  removeHero: (id) => {},
});

export default HeroContext;
