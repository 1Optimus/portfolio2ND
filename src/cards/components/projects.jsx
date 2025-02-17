import PropTypes from "prop-types";
import Github from "../../assets/github.png";
import Play from "../../assets/play.png";
const Projects = ({ valueProp }) => {
  Projects.propTypes = {
    valueProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  const technologies = valueProp[5].split(".");
  return (
    <div className="flex flex-col h-screen p-6">
      <div className="basis-4/6">
        <img
          className="rounded-xl"
          src={`/${valueProp[2]}`}
          alt={valueProp[1]}
        />
      </div>
      <div className="basis-2/6 pt-3 no-drag">
        <div className="flex flex-row">
          <label className="text-2xl font-semibold mx-5" htmlFor="">
            {valueProp[1]}
          </label>
          <button onClick={() => window.open(valueProp[3], "_blank")}>
            <img className="dark:brightness-0 dark:invert h-8 w-8" src={Github} alt="Github" />
          </button>
          {valueProp[4]!="null"&&(
            <button onClick={() => window.open(valueProp[4], "_blank")} className="pl-4">
            <img className="dark:brightness-0 dark:invert h-8 w-8" src={Play} alt="Github" />
          </button>
          )}
        </div>
        <div className="flex items-center pt-5 px-5">
          {technologies.map((tech) => (
            <Badges key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;

const Badges = ({ tech }) => {
  Badges.propTypes = {
    tech: PropTypes.string.isRequired,
  };
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-cyan-50 px-2.5 dark:bg-cyan-950 py-0.5 mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="-ms-1 me-1.5 size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="whitespace-nowrap text-md">{tech}</p>
    </span>
  );
};
