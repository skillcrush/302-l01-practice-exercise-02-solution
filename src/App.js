import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#5795b1");

  const changeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div className="App">
      <h2>Select your favorite color!</h2>
      <div className="color-picker">
        <label htmlFor="color">Click me ▶▶▶ </label>
        <input
          className="color-input"
          type="color"
          id="color"
          value={backgroundColor}
          onChange={changeBackgroundColor}
        />
      </div>
      <div
        className="color-square"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
};

export default App;
