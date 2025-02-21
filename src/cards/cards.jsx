import { useEffect, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import {
  ContactLayouts,
  AboutLayout,
  ProjectsLayouts,
  keys,
} from "../position";
import Map from "./components/map";
import ToggleBG from "./components/toggleBG/toggleBG";
import About from "./components/about";
import Projects from "./components/projects";
import Tech from "./components/tech/tech";
import Experience from "./components/experience";
import Download from "./components/download";
import Social from "./components/socials";
import github from "../assets/gith.json";
import mail from "../assets/mail.json";
import linkedin from "../assets/linkedin.json";
import PropTypes from "prop-types";

function Cards({ tabCurrent }) {
  Cards.propTypes = {
    tabCurrent: PropTypes.string.isRequired,
    setTabCurrent: PropTypes.func.isRequired,
  };

  const [currentLayout, setCurrentLayout] = useState(AboutLayout);
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    []
  );

  useEffect(() => {
    switch (tabCurrent) {
      case "Projects":
        setCurrentLayout(ProjectsLayouts);
        break;
      case "About":
        setCurrentLayout(AboutLayout);
        break;
      case "Contact":
        setCurrentLayout(ContactLayouts);
        break;
      default:
        setCurrentLayout(AboutLayout);
    }
  }, [tabCurrent]);

  return (
    <div className="w-auto max-w-[1300px] mx-auto flex justify-between">
      <ResponsiveReactGridLayout
        className="m-auto w-full mt-16"
        breakpoints={{ xl: 1920, lg: 1200, md: 768, sm: 480, xs: 200 }}
        cols={{ xl: 12, lg: 8, md: 8, sm: 2, xs: 2 }}
        rowHeight={160}
        layouts={currentLayout}
        draggableCancel=".no-drag"
      >
        {Object.entries(keys).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] rounded-3.5xl text-[#070505] dark:text-[#fcfcfc] visible cursor-grab active:cursor-grabbing fade-in"
          >
            <Block valueProp={Object.values(value)} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}

const Block = ({ valueProp }) => {
  return (
    <div className="bg-sky-100 bg-opacity-50 dark:bg-slate-950 dark:bg-opacity-50 h-full w-full flex flex-col rounded-3xl">
      {valueProp[0] === "background" ? (
        <ToggleBG />
      ) : valueProp[0] === "me" ? (
        <About valueProp={valueProp} />
      ) : valueProp[0] === "projects" ? (
        <Projects valueProp={valueProp} />
      ) : valueProp[0] === "portfolio" ? (
        <Download />
      ) : valueProp[0] === "socials" ? (
        <Social
          valueProp={valueProp}
          github={github}
          linkedin={linkedin}
          mail={mail}
        />
      ) : valueProp[0] === "experience" ? (
        <Experience />
      ) : valueProp[0] === "Tech" ? (
        <Tech />
      ) : valueProp[0] === "map" ? (
        <Map valueProp={valueProp} />
      ) : (
        <span>
          <span className="normal-case">{valueProp[0]}</span>
        </span>
      )}
    </div>
  );
};

Block.propTypes = {
  valueProp: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.object,
  ]).isRequired,
};
export default Cards;
