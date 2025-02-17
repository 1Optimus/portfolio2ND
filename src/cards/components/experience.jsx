import PropTypes from "prop-types";
const Experience = ({ valueProp }) => {
  Experience.propTypes = {
    valueProp: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  // eslint-disable-next-line no-unused-vars
  const experience = valueProp[1].split(".")
  return (
    <div className="p-8">
      <div className="flex flex-col mb-2">
      <p className="text-1xl text-zinc-500">4 years of</p>
            <p className="text-3xl font-semibold">Experience</p>            
         </div>
      <div className="flex justify-between py-4 text">
         <p className="text-3xl font-semibold">IT Support & Analyst</p>
         <div className="flex flex-col -mt-2">
            <p className="font-bold">Katoen Natie</p>
            <p>Nov 2023-current job</p>
         </div>
      </div>
      <div className="flex justify-between py-4 text-zinc-500">
         <p className="text-3xl font-semibold line-through"> Full Stack ReactJS & NodeJS</p>
         <div className="flex flex-col -mt-2">
            <p className="font-semibold">TELUS international</p>
            <p >Jan 2022 - Jul 2022</p>
         </div>
      </div>
      <div className="flex justify-between py-4 text-zinc-500">
         <p className="text-3xl font-semibold line-through"> Full stack ReactJS & Firebase</p>
         <div className="flex flex-col -mt-2 mx-2">
            <p className="font-semibold">Res. Greystone</p>
            <p>Jan 2021 - Nov 2021 </p>
         </div>
      </div>
    </div>
  );
};
export default Experience;
