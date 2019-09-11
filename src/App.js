import React from "react";
import "./App.css";
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">
      <Photos />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="image" aria-label="Img">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
