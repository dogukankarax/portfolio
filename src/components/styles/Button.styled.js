import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  padding: 14px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
