import { useEffect, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import {
  ContactLayouts,
  AboutLayout,
  ProjectsLayouts,
  keys,
} from ".././position";
import ToggleBG from './components/toggleBG'
import About from './components/about'
import Projects from './components/projects'
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
    <div className="w-auto max-w-[1280px] mx-auto flex justify-between b-10">
      <ResponsiveReactGridLayout
        className="m-auto w-full"
        breakpoints={{ xl: 1920, lg: 1200, md: 768, sm: 480, xs: 200 }}
        cols={{ xl: 6, lg: 4, md: 4, sm: 1, xs: 1 }}
        rowHeight={280}
        layouts={currentLayout}
        draggableCancel=".no-drag"
      >
        {Object.entries(keys).map(([key, value]) => (
          <div
            key={key}
            className="z-1 flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] rounded-3.5xl text-2xl text-[#FFFFFF] visible cursor-grab active:cursor-grabbing fade-in"
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
    <div className="bg-sky-200 bg-opacity-25 dark:bg-slate-950 dark:bg-opacity-50 h-full w-full flex flex-col justify-center items-center p-6 text-[var(--black-1)] rounded-3xl">
      {valueProp[0] === "background" ? (
        <ToggleBG/>
      ) : (
        valueProp[0] === "me" ? (
          <About valueProp={valueProp}/>
        ) : (
          valueProp[0] === "projects" ? (
            <Projects valueProp={valueProp}/>
          ) : (
            <span>
              <span className="normal-case">{valueProp[0]}</span>
            </span>
          )
        )
      )}
    </div>
  );
};

Block.propTypes = {
  valueProp: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any), // Si es un array
    PropTypes.object,                // Si es un objeto
  ]).isRequired,
};
export default Cards;
