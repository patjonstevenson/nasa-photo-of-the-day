import React, { useState, useEffect } from "react";
import "./App.css";
import Photos from "./components/Photos";
import Header from "./components/Header";
import Date from "./components/Date";

function App() {
  const [date, setDate] = useState("2019-09-11");

  return (
    <div className="App">
      <Header />
      <Date updater={setDate} />
      <Photos date={date} />
    </div>
  );
}

export default App;
