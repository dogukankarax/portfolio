import styled from "styled-components";
import { AiFillMessage } from "react-icons/ai";
import { ArcText } from "@arctext/react";

export const StyledContact = styled.div`
  background-color: ${({ theme }) => theme.background3};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 1000px;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  a {
    top: 150px;
    position: relative;
    z-index: 1;
  }
`;

export const Circle = styled(ArcText)`
  background-color: ${({ theme }) => theme.background3};
  color: ${({ theme }) => theme.text};
  font-size: clamp(1rem, 1vw, 1.5rem);
`;

export const Logo = styled(AiFillMessage)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.text};
`;

export const StyledWaves = styled.svg`
  transform: rotate(180deg);

  path:nth-child(1) {
    fill: ${({ theme }) => theme.background2};
  }
  path:nth-child(2) {
    fill: ${({ theme }) => theme.background};
  }
  path:nth-child(3) {
    fill: ${({ theme }) => theme.background4};
  }
`;
