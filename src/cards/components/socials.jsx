import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
const Social = ({ valueProp, github, linkedin, mail }) => {
  const lottieRef = useRef();
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <Lottie
        lottieRef={lottieRef}
        animationData={
          valueProp[1] == "github"
            ? github
            : valueProp[1] == "mail"
            ? mail
            : linkedin
        }
        loop={true}
        className={
          valueProp[1] === "mail"
            ? "w-24 h-24 pointer-events-auto cursor-pointer no-drag mb-6"
            : "dark:brightness-0 dark:invert w-24 h-24 pointer-events-auto cursor-pointer no-drag"
        }
        onMouseEnter={() => lottieRef.current.play()}
        onMouseLeave={() => lottieRef.current.stop()}
        onClick={() =>
          window.open(
            valueProp[1] == "github"
              ? valueProp[3]
              : valueProp[1] == "mail"
              ? valueProp[3]
              : valueProp[3],
            "_blank"
          )
        }
      />
    </div>
  );
};

Social.propTypes = {
  github: PropTypes.object.isRequired,
  linkedin: PropTypes.object.isRequired,
  mail: PropTypes.object.isRequired,
  valueProp: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.object,
  ]).isRequired,
};
export default Social;
