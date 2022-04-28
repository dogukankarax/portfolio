import styled from "styled-components";

export const StyledTypeWriter = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  font-size: clamp(1rem, 1.5vw, 2rem);

  span:nth-child(1) {
    span:nth-child(1) {
      color: ${({ theme }) => theme.Aurora[200]};
    }
    span {
      color: ${({ theme }) => theme.Aurora[400]};
    }
  }
`;
