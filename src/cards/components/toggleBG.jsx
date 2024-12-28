import { useState } from "react";
const ToggleBG = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
        className="z-5 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded no-drag"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default ToggleBG;
