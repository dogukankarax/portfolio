import React, { useState } from "react";
import { StyledAbout, Container } from "./styles/About.styled";
import { StyledButton } from "./styles/Button.styled";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const education = () => {
    if (visible === false) {
      setVisible(true);
      setVisible2(false);
    } else if (visible === true) {
      setVisible(false);
    }
  };
  const workExperience = () => {
    if (visible2 === false) {
      setVisible2(true);
      setVisible(false);
    } else if (visible2 === true) {
      setVisible2(false);
    }
  };

  return (
    <div>
      <StyledAbout id="about">
        <Container>
          <div>
            <StyledButton
              onClick={education}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Education
            </StyledButton>
            <StyledButton
              onClick={workExperience}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work Experience
            </StyledButton>
          </div>
          <div>
            {visible ? (
              <div>
                <motion.p
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  2019-2021
                </motion.p>
                <br />
                <motion.p
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  Istanbul Okan University
                </motion.p>
                <br />
                <motion.p
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                >
                  Mobile Technologies
                </motion.p>
                <br />
                <motion.p
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                >
                  GPA: 3.19/4
                </motion.p>
                <br />
              </div>
            ) : null}
            {visible2 ? (
              <motion.img
                custom={1}
                variants={variants}
                initial="hidden"
                animate="visible"
                src="images/sad.gif"
                alt="gif"
                width="250"
              />
            ) : null}
          </div>
        </Container>
        <svg
          viewBox="0 1 1200 120"
          height="100px"
          width="100%"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </StyledAbout>
    </div>
  );
};

export default About;
