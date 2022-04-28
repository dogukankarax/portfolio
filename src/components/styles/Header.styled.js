import styled from "styled-components";
import { GoFlame } from "react-icons/go";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 3;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5em;
  a {
    color: ${({ theme }) => theme.text};
    font-size: clamp(1rem, 1vw, 2rem);
    text-decoration: none;
    margin-right: 10px;
    font-weight: 400;
    padding: 3px;
    border-radius: 10px;
    &:hover:nth-child(1) {
      background-color: ${({ theme }) => theme.Aurora[100]};
    }
    &:hover:nth-child(2) {
      background-color: ${({ theme }) => theme.Aurora[200]};
    }
    &:hover:nth-child(3) {
      background-color: ${({ theme }) => theme.Aurora[300]};
    }
  }
  button {
    margin-top: 0.5em;
    padding: 8px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${({ theme }) => theme.text};
      width: 1.5em;
      height: 1.5em;
    }
    &:hover {
      background-color: ${({ theme }) => theme.Aurora[500]};
    }
  }
`;

export const Logo = styled(GoFlame)`
  height: 2em;
  width: 2em;
  fill: ${({ theme }) => theme.text};
`;

export const Container = styled.div`
  max-width: 75em;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.5em;
`;
