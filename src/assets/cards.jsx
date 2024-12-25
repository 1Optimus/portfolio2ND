import { useEffect, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ContactLayouts, AboutLayout, ProjectsLayouts, keys } from "./position";
import PropTypes from "prop-types";
function Cards({ tabCurrent }) {
  const [currentlayout, setCurrentLayout] = useState(AboutLayout);
  Cards.propTypes = {
    tabCurrent: PropTypes.string.isRequired,
    setTabCurrent: PropTypes.func.isRequired,
  };
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
        cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        rowHeight={300}
        layouts={currentlayout}
      >
        
        {keys.map((key) => (
          <div
            key={key}
            className="flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] rounded-3.5xl text-2xl text-[#FFFFFF] visible cursor-grab active:cursor-grabbing fade-in"
          >
            <Block keyProp={`Tile ${key}`} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
const Block = ({ keyProp }) => {
  const [label, keyPart] = keyProp.split(" ");

  return (
    <div
      style={{ backgroundColor: 'rgba(20, 20, 20, 0.65)' }}
      className="h-full w-full flex flex-col justify-center items-center p-6 text-[var(--black-1)] rounded-3xl"
    >
      <span>
        <span className="normal-case">{label}</span>{" "}
        <span className="uppercase">{keyPart}</span>
      </span>
      
    </div>
  );
};

// Validación de props del componente Block
Block.propTypes = {
  keyProp: PropTypes.string.isRequired,
};

export default Cards;
