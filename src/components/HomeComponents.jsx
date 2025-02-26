import { BsStars } from "react-icons/bs";
import home from "../assets/image/home.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import ButtonBlue from "../element/ButtonBlue";
import ButtonWhite from "../element/ButtonWhite";
import { dataHome } from "../assets/data/data";
import CountUp from "react-countup";

const HomeComponents = () => {
  const textH1 = "Elevate Your Business With A Next-Gen Website";
  const textP =
    "A modern, high-performance, and fully responsive template. SEO-friendly, fast, and easy to customize.";
  const words = textH1.split(" ");
  const wordsP = textP.split(" ");
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".home",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
      .fromTo(
        ".text-h1",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 1, ease: "power2.in" },
        "-=0.8"
      )
      .fromTo(
        ".home-btn",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=1"
      )
      .fromTo(
        ".home-img",
        { height: "100%" },
        {
          height: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .fromTo(
        ".home-count",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.2"
      );
  }, []);
  return (
    <div className="container-primary font-ns min-h-screen flex flex-col gap-10 lg:gap-20 justify-center items-center w-full py-16 md:flex-row mt-10">
      <div className="flex flex-col justify-center items-center text-center gap-5 w-full max-w-sm md:max-w-full md:items-start md:text-start">
        <div className="home">
          <p className="button-blue rounded-full text-sm font-semibold text-font-primary">
            <BsStars />
            Innovate With Confidence
          </p>
        </div>
        <div className="overflow-hidden flex items-center flex-wrap justify-center md:justify-start">
          {words.map((item, index) => (
            <h1
              key={index}
              className={`text-h1 animated-text text-font-primary font-extrabold lg:font-black tracking-wide
            text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight 
            ${index===2&&("text-secondary")} ${index===6&&("text-secondary")}`}
            >
              {item}&nbsp;
            </h1>
          ))}
        </div>
        <div className="overflow-hidden flex items-center flex-wrap lg:max-w-md justify-center md:justify-start">
          {wordsP.map((item, i) => (
            <h2 key={i} className="text-h1 text-font-primary  font-medium">
              {item}&nbsp;
            </h2>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center mt-5">
          <div className="home-btn">
            <ButtonBlue name={"Get Started"} />
          </div>
          <div className="home-btn">
            <ButtonWhite name={"View Features"} />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="relative p-5 w-full">
          <img
            src={home}
            alt="home-image primary"
            className="h-80 sm:h-[450px] w-full object-cover rounded-xl"
          />
          <div className="absolute z-30 h-full w-full bg-third bottom-0 right-0 home-img"></div>
          <div className="home-count absolute w-[85%] bg-third/50 filter backdrop-blur-sm left-2/4 -translate-x-2/4 bottom-9 rounded-2xl items-center justify-center p-5 border-2 border-third hidden md:flex">
            <div className="flex items-center justify-around gap-5 w-full">
              {dataHome.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 items-center justify-center w-full ${
                    i === 1 && "border-x-0 lg:border-x-2 border-third/50 "
                  }`}
                >
                  <h1 className="text-primary font-bold text-3xl">
                    <CountUp end={item.count} duration={5} delay={4} />
                    {item.last}
                  </h1>
                  <h2 className="font-medium text-font-primary tracking-wide text-center">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
