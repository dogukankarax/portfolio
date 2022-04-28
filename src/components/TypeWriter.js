import React from "react";
import Typewriter from "typewriter-effect";
import { StyledTypeWriter } from "./styles/TypeWriter.styled";

const TypeWriter = () => {
  const space = `\u00A0`;
  return (
    <StyledTypeWriter>
      <Typewriter
        options={{
          delay: 20,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1500)
            .typeString(
              `<span>var</span> whoami = { <br/>
              ${space.repeat(6)}name: <span>'Doğukan'</span>,<br/>
              ${space.repeat(6)}age: <span>'23'</span>,<br/>
              ${space.repeat(6)}job: <span>'Junior Developer'</span>,<br/>
              ${space.repeat(6)}location: <span>'Turkey'</span>,<br/>
              ${space.repeat(6)}properties: [<br/>
              ${space.repeat(8)}<span>'Javascript'</span>,<br/>
              ${space.repeat(8)}<span>'HTML'</span>,<br/>
              ${space.repeat(8)}<span>'CSS'</span>,<br/>
              ${space.repeat(8)}<span>'React-React Native'</span>,<br/>
              ${space.repeat(8)}<span>'Python'</span>,<br/>
              ${space.repeat(8)}...<br/>
              ${space.repeat(4)}],<br/>
              };
              `
            )
            .start();
        }}
      />
    </StyledTypeWriter>
  );
};

export default TypeWriter;
