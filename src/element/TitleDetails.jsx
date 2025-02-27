/* eslint-disable react/prop-types */
// useefect
import { useEffect } from "react";

// gsap
import gsap from 'gsap'

const TitleDetails = ({ texth1, texth2 }) => {
  useEffect(() => {
    gsap.fromTo(
      (".blog-title"),
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 1}
    );
  }, []);
  return (
    <div className="bg-details w-full h-full bg-no-repeat bg-cover bg-center mb-5 flex items-center justify-center rounded-lg shadow-lg py-8 md:py-20 text-center blog-title">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl text-white font-extrabold md:text-5xl">
          {texth1}
        </h1>
        <h2 className="text-lg text-white font-semibold">{texth2}</h2>
      </div>
    </div>
  );
};

export default TitleDetails;
