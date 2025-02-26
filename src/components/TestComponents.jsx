import gsap from "gsap-trial";

import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TestComponents = () => {
  useEffect(() => {
    const mySplitText = new SplitText(".split", { type: "chars" });
    const chars = mySplitText.chars;
    gsap.from(chars, {
      opacity:0.5,
      stagger: 0.02,
      duration: 0.2,
    });
  }, []);
  return (
    <div className="container-primary min-h-screen p-5 flex items-center justify-center">
      <div className="border-2 border-black overflow-hidden">
        <h1 className="split text-5xl font-black">SOME TEXT</h1>
      </div>
    </div>
  );
};

export default TestComponents;
