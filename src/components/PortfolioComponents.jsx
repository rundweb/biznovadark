import { BsStars } from "react-icons/bs";
import ButtonBlue from "../element/ButtonBlue";
import gsap from "gsap";
import PortfolioAll from "./PortfolioAll";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PortfolioComponents = () => {
  const portH1 = "See How We Bring Visions To Life";
  const portH2 =
    "From startups to enterprises, we`ve crafted custom web solutions that drive real results. Check out our latest projects!";

  const splitPotH1 = portH1.split(" ");
  const splitPotH2 = portH2.split(" ");
  useEffect(() => {
    gsap.fromTo(
      ".title-port",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".title-port-box", start: "top bottom" },
      }
    );

    gsap.fromTo(
      ".port-h1",
      { opacity: 0 },
      {
        opacity: 1,
        duration:1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".port-h1", start: "top bottom" },
      }
    );

    gsap.fromTo(
      ".port-h2",
      { opacity: 0 },
      {
        opacity: 1,
        duration:1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: ".port-h2", start: "top bottom" },
      }
    );

    gsap.fromTo(
      ".button-port",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".button-port-box", start: "top bottom" },
      }
    );
  }, []);

  const navigate = useNavigate();
  return (
    <section className="container-primary min-h-screen p-5 py-16 m-auto flex items-center justify-center font-ns flex-col gap-10">
      <div className="flex flex-col items-start w-full gap-5 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="title-port-box">
            <p className="text-lg font-semibold flex items-center gap-2 text-primary title-port">
              <BsStars />
              Our Featured Work
            </p>
          </div>
          <div className="flex items-center flex-wrap port-h1-box">
            {splitPotH1.map((item, i) => (
              <h1
                key={i}
                className="text-3xl font-extrabold text-font-primary tracking-wide port-h1"
              >
                {item}&nbsp;
              </h1>
            ))}
          </div>
          <div className="flex items-center flex-wrap port-h2-box">
            {splitPotH2.map((item, i) => (
              <h2
                key={i}
                className="text-font-primary/90 tracking-wide md:max-w-lg font-medium  port-h2"
              >
                {item}&nbsp;
              </h2>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center md:justify-end button-port-box">
          <div
            className="w-max button-port"
            onClick={() => navigate("/portfolio")}
          >
            <ButtonBlue name="View More Portfolio" />
          </div>
        </div>
      </div>
      <PortfolioAll />
    </section>
  );
};

export default PortfolioComponents;
