import { GlobalStyle } from "../GlobalStyle";
import { Hero } from "./Hero/Hero";
import { HeroAPI } from "./Hero/HeroAPI";
import {Footer} from './Footer/Footer';
import Weather from './Weather_Card/WeatherCard'

export const App = () => {
  return (
    <div>
      <Hero/>
      <Weather/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
};
