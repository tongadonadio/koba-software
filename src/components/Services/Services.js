import React from "react";
import {
  ServicesContainer,
  ServicesTitle,
  ServicesList,
  ServicesItem,
} from "./ServicesStyles";

function Services() {
  return (
    <ServicesContainer>
      <ServicesTitle>Servicios</ServicesTitle>
      <ServicesList>
        <ServicesItem>Desarrollo de software a medida</ServicesItem>
        <ServicesItem>Consultoría tecnológica</ServicesItem>
        <ServicesItem>Integración de sistemas</ServicesItem>
      </ServicesList>
    </ServicesContainer>
  );
}

export default Services;
