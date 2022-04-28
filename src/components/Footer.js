import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
const Footer = () => {
  return (
    <StyledFooter>
      <h1>© {new Date().getFullYear()} by Doğukan KARA</h1>
    </StyledFooter>
  );
};

export default Footer;
