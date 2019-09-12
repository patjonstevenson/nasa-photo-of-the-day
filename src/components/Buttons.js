import React from "react";
import styled from "styled-components";
import Button from "./Button";
import * as moment from "moment/moment";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
`;

export default function Buttons({ updater, date }) {
  if (date !== moment().format("YYYY[-]MM[-]DD")) {
    return (
      <ButtonContainer>
        <Button
          fwdOrBkwd="Previous"
          onClick={() => {
            updater(
              moment(String(date), "YYYY-MM-DD")
                .subtract(1, "days")
                .format("YYYY[-]MM[-]DD")
            );
          }}
        />
        <Button
          fwdOrBkwd="Next"
          onClick={() => {
            updater(
              moment(String(date), "YYYY-MM-DD")
                .add(1, "days")
                .format("YYYY[-]MM[-]DD")
            );
          }}
        />
      </ButtonContainer>
    );
  } else {
    return (
      <ButtonContainer>
        <Button
          fwdOrBkwd="Previous"
          onClick={() => {
            updater(
              moment(String(date), "YYYY-MM-DD")
                .subtract(1, "days")
                .format("YYYY[-]MM[-]DD")
            );
          }}
        />
      </ButtonContainer>
    );
  }
}
