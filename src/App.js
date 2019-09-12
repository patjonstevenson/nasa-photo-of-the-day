import React, { useState, useEffect } from "react";
import * as moment from "moment/moment";
import "./App.css";
import Photos from "./components/Photos";
import Header from "./components/Header";
import Date from "./components/Date";

function App() {
  const [date, setDate] = useState(moment().format("YYYY[-]MM[-]DD"));

  return (
    <div className="App">
      <Header />
      <Date updater={setDate} />
      <Photos date={date} />
    </div>
  );
}

export default App;
