import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import download from "../../../assets/download.json";
import eye from "../../../assets/eye.json";
const Download = () => {
  const lottieRefDow = useRef();
  const lottieRefEye = useRef();
  useEffect(() => {
    if (lottieRefDow.current) {
      lottieRefDow.current.stop();
    }
    if (lottieRefEye.current) {
      lottieRefEye.current.stop();
    }
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col mr-8">
        <p className="text-zinc-500 font-semibold">2025 CV</p>
        <p className="text-5xl font-bold">Resume</p>
      </div>
      <Lottie
        lottieRef={lottieRefDow}
        animationData={download}
        loop={true}
        className="dark:brightness-0 dark:invert w-24 h-24 pointer-events-auto cursor-pointer no-drag"
        onMouseEnter={() => lottieRefDow.current.play()}
        onMouseLeave={() => lottieRefDow.current.stop()}
        onClick={() =>
          window.open(
            "//github.com/1Optimus/portfolio/raw/main/src/assets/CV%20Ricardo%20Perez.pdf",
            "_blank"
          )
        }
      />
      <Lottie
        lottieRef={lottieRefEye}
        animationData={eye}
        loop={true}
        className="dark:brightness-0 dark:invert w-24 h-24 pointer-events-auto cursor-pointer no-drag"
        onMouseEnter={() => lottieRefEye.current.play()}
        onMouseLeave={() => lottieRefEye.current.stop()}
        onClick={() => window.open("http://localhost:5173/cv.pdf", "_blank")}
      />
    </div>
  );
};
export default Download;
