import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactContent,
} from "./ContactStyles";

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contacto</ContactTitle>
      <ContactContent>
        ¿Tienes alguna pregunta? Contáctanos a través de nuestro formulario en
        el sitio web o en nuestras redes sociales.
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
