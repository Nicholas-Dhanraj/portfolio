import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/light.png";
import Moon from "../../img/dark.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        style={{
          left: theme.state.darkMode ? 0 : 32,
          backgroundColor: theme.state.darkMode ? "#445050" : "#e2db74",
        }}
      ></div>
    </div>
  );
};

export default Toggle;
