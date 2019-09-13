import React from "react";
import styled from "styled-components";

const Heading = styled.header`
  background-color: #0065af;
  color: white;
  border-bottom: 10px solid #f21f27;
  border-top: 10px solid #f21f27;
`;

export default function Header() {
  return (
    <Heading className="heading">
      <h1>NASA Photo of the Day</h1>
    </Heading>
  );
}
