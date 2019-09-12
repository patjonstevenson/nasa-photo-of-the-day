import React, { useState } from "react";
import moment from "moment";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Date({ updater }) {
  const [newDate, setNewDate] = useState("");
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        updater(newDate);
      }}
    >
      <FormGroup>
        <Label for="exampleDate">Date </Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
          value={newDate}
          onChange={event => {
            event.preventDefault();
            setNewDate(event.target.value);
          }}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
