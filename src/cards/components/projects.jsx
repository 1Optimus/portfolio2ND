import PropTypes from "prop-types";
import Me from '../../assets/me.png'

const Projects = ({  valueProp }) => {
    Projects.propTypes = {
        valueProp: PropTypes.arrayOf(PropTypes.string).isRequired,
        };
  return (
    <div className="">
        <img src={Me} alt='about_me-img'/>
      <label htmlFor="">{valueProp[1]}</label>
    </div>
  );
};
export default Projects;
