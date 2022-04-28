import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    transform: rotate(180deg);
    path {
      fill: ${({ theme }) => theme.background2};
    }
  }
`;

export const Welcome = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 2rem);
`;
