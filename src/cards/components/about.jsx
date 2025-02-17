import PropTypes from "prop-types";
import Me from "../../assets/me2.png";
const About = ({ valueProp }) => {
  About.propTypes = {
    valueProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  return (
    <div className="p-12">
      <div className="flex items-center justify-start">
        <img src={Me} alt="about_me-img" className="w-52 h-auto" />
        <p className="text-5xl mt-10 font-semibold">Ricardo Perez</p>
      </div>
      <p className="text-xl">{valueProp[1]}</p>
    </div>
  );
};
export default About;
