import React from "react";
import styled from "styled-components";

export default function Button({ fwdOrBkwd, onClick }) {
  /*const Btn = styled.button(fwdOrBkwd)`
  `;
*/
  return <button onClick={onClick}>{fwdOrBkwd}</button>;
}
