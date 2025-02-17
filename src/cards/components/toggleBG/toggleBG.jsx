import { useState, useEffect } from "react";
import "./toggleBG.css";
const ToggleBG = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="flex items-center justify-center h-screen ">
      <label htmlFor="checkbox" className="no-drag">
        <input
          type="checkbox"
          name="dark-mode"
          id="checkbox"
          checked={darkMode}
          onChange={(e) => {
            e.stopPropagation();
            setDarkMode((prev) => !prev);
          }}
        ></input>
        <div className="toggle">
          <div className="cloud"></div>
          <div className="star"></div>
          <div className="sea"></div>
          <div className="mountains"></div>
        </div>
      </label>
    </div>
  );
};
export default ToggleBG;
