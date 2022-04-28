import React from "react";
import SwitchTheme from "./SwitchTheme";
import { StyledHeader, Nav, Container, Logo } from "./styles/Header.styled";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#"
        >
          <Logo src="https://www.freepik.com/vectors/geometric-logo" />
        </motion.a>
        <Nav>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#contact"
          >
            Contact
          </motion.a>
          <SwitchTheme />
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
