import { useState, useEffect, useRef } from "react";
import Cards from "./cards/cards";
import Navbar from "./navbar/navbar";

function App() {
  const interactiveRef = useRef(null);
  const TabKey = {
    About: 1,
    Projects: 2,
    Contact: 3,
  };
  const [tabCurrent, setTabCurrent] = useState(TabKey[0]);
  const baseX = 520;
  const baseW = 221.5;
  const x = baseX + [tabCurrent];
  const w = baseW;

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="gradient-bg">
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
          <div className="interactive" ref={interactiveRef}></div>
        </div>
      </div>
      <Navbar
        tabCurrent={tabCurrent}
        setTabCurrent={setTabCurrent}
        left={x}
        sliderWidth={w}
      />
      <div className="content mt-8">
        <Cards
          tabCurrent={tabCurrent}
          setTabCurrent={setTabCurrent}
          left={x}
          sliderWidth={w}
        />
      </div>
    </>
  );
}

export default App;
