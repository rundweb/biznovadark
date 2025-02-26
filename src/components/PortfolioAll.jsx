import { useEffect } from "react";
import { portfolio } from "../assets/data/data";
import ButtonBlue from "../element/ButtonBlue";
import gsap from "gsap";
const PortfolioAll = () => {
  useEffect(() => {
    gsap.fromTo(
      ".porto",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger:0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".porto-box",
          start: "top bottom",
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-start gap-10 justify-center">
      {portfolio.map((item, i) => (
        <div key={i} className="porto-box">
          <div className="flex flex-col gap-5 rounded-xl w-full group cursor-pointer porto">
            <div className="p-2 bg-primary/10 rounded-md overflow-hidden relative">
              <div className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                <ButtonBlue name={"View Project"} />
              </div>
              <img
                src={item.portImg}
                alt="portfolio-image"
                className="rounded-md group-hover:scale-105 duration-300 ease-in-out group-hover:opacity-10"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {item.category.map((cat, index) => (
                <div key={index} className="">
                  <p className="shadow-lg shadow-white/10 h-8 flex items-center justify-center px-4 rounded-full text-sm tracking-wide text-font-primary/90 font-medium">
                    {cat}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-font-primary text-xl font-bold tracking-wide group-hover:bg-gradient-to-r from-secondary to-primary inline-block group-hover:text-transparent bg-clip-text duration-500 ease-in-out">
                {item.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioAll;
