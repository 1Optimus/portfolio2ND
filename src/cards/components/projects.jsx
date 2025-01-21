import PropTypes from "prop-types";

const Projects = ({ valueProp }) => {
  Projects.propTypes = {
    valueProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  return (
    <div className="">
      <img src={`/${valueProp[2]}`} alt={valueProp[1]} />
      <label htmlFor="">{valueProp[1]}</label>
    </div>
  );
};
export default Projects;
