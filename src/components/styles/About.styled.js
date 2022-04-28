import styled from "styled-components";

export const StyledAbout = styled.div`
  background-color: ${({ theme }) => theme.background2};
  color: ${({ theme }) => theme.text};
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    transform: rotate(180deg);

    path {
      fill: ${({ theme }) => theme.background3};
    }
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 2rem;
  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin: 1rem;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    font-size: 0.5rem;
    p {
      margin: 0.5rem;
      font-size: clamp(1rem, 1vw, 2rem);

      text-align: center;
    }
    div {
      border-right: 0px solid;
    }
  }
`;
