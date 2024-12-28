import { useState } from "react";
import Cards from "./cards/cards";
import Navbar from "./navbar/navbar";


function App() {
  const TabKey = {
    About: 1,
    Projects: 2,
    Contact: 4,
  };
  const [tabCurrent, setTabCurrent] = useState(TabKey[0]);
  const baseX = 520;
  const baseW = 221.5;
  const x = baseX + [tabCurrent];
  const w = baseW;

  return (
    <>
      <div className="relative gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
        </div>
      </div>
      <div className="content">
        <Cards
          tabCurrent={tabCurrent}
          setTabCurrent={setTabCurrent}
          left={x}
          sliderWidth={w}
        />
        <Navbar
          tabCurrent={tabCurrent}
          setTabCurrent={setTabCurrent}
          left={x}
          sliderWidth={w} />
      </div>
    </>
  );
}

export default App;
