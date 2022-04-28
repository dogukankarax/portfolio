import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.background4};
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
`;
