import React, { useState } from "react";

export default function Date({ updater }) {
  const [newDate, setNewDate] = useState("");
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          updater(newDate);
        }}
      >
        <label>
          <h4>Date (YYYY-MM-DD)</h4>
          <input
            type="text"
            value={newDate}
            onChange={event => {
              event.preventDefault();
              setNewDate(event.target.value);
            }}
          ></input>
        </label>
      </form>
    </div>
  );
}
