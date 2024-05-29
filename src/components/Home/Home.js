import React from "react";
import { HomeContainer, HomeTitle, HomeContent } from "./HomeStyles";

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Bienvenido a Koba Software</HomeTitle>
      <HomeContent>
        Somos una software factory especializada en crear soluciones
        tecnológicas a medida.
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;
