import { useState } from "react";
import PropTypes from "prop-types";
const Nav = ({ tabCurrent, setTabCurrent }) => {
  Nav.propTypes = {
    tabCurrent: PropTypes.string.isRequired,
    setTabCurrent: PropTypes.func.isRequired,
  };
  const [active, setActive] = useState(tabCurrent==undefined?'#about':tabCurrent);
  return (
    <nav style={{ zIndex: 1 }} className="fixed top-14 left-1/2 transform -translate-x-1/2 flex gap-4 bg-sky-100 dark:bg-slate-950 p-4 rounded-full backdrop-blur-md  dark:bg-opacity-50 bg-opacity-50 font-semibold">
      <a
        href="#about"
        className={`${
          active === "#about" ? "bg-indigo-800 text-white" : "text-gray-700 dark:text-gray-200"
        } hover:bg-indigo-800 active:bg-violet-700 px-4 py-2 rounded-full`}
        onClick={() => {
          setTabCurrent("About");
          setActive("#about");
        }}
      >
        All
      </a>
      <a
        href="#Projects"
        className={`${
          active === "#Projects" ? "bg-indigo-800 text-white" : "text-gray-700 dark:text-gray-200"
        } hover:bg-indigo-800 active:bg-violet-700 px-4 py-2 rounded-full`}
        onClick={() => {
          setTabCurrent("Projects");
          setActive("#Projects");
        }}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`${
          active === "#contact" ? "bg-indigo-800 text-white" : "text-gray-700 dark:text-gray-200"
        } hover:bg-indigo-800 active:bg-violet-700 px-4 py-2 rounded-full`}
        onClick={() => {
          setTabCurrent("Contact");
          setActive("#contact");
        }}
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
