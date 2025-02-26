import aboutImg from "../assets/image/about.jpg";
import { BsStars } from "react-icons/bs";
import ButtonBlue from "../element/ButtonBlue";
import { whatWeOffer } from "../assets/data/data";
import { BiCheckDouble } from "react-icons/bi";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const AboutComponents = () => {
  const aboutH1 = "Innovative Digital Solutions for Modern Businesses";
  const aboutP =
    "At BizNova, we are committed to helping businesses establish a strong digital presence through high-quality, professionally designed website templates. Our solutions are tailored to meet the evolving needs of modern enterprises.";

  const splitH1 = aboutH1.split(" ");
  const splitP = aboutP.split(" ");
  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      { y: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".about-title-box",
          start: "top bottom",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".split-h1",
      {
        opacity: 0,
      },

      {
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ".split-h1",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".split-p",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ".split-p",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".list-about",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".list-about",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".box-img",
      { width: "100%" },
      {
        width: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".box-img",
          start: "top bottom",
        },
      }
    );
  }, []);

  const navigate = useNavigate()
  return (
    <section className="about-box container-primary font-ns min-h-screen flex gap-10 lg:gap-28 justify-center items-center w-full py-16 flex-col-reverse md:flex-row ">
      <div className="relative p-5 w-full">
        <img
          src={aboutImg}
          alt="about-img is here"
          className="h-80 sm:h-[450px] w-full object-cover relative z-20 rounded-xl object-top"
        />
        <div className="absolute z-10 w-[50%] h-[60%] button-blue top-0 right-0  rounded-xl shadow-none"></div>
        <div className="absolute z-10 w-[50%] h-[60%] button-blue bottom-0 left-0 rounded-xl shadow-none"></div>
        <div className="absolute z-30 h-full w-0 bg-third top-0 right-0 box-img"></div>
      </div>

      <div className="flex flex-col gap-5 text-left items-start justify-start w-full ">
        <div className="about-title-box">
          <p className="text-lg font-semibold flex items-center gap-2 text-primary about-title">
            <BsStars />
            About Us
          </p>
        </div>
        <div className="flex flex-wrap justify-start md:justify-start lg:max-w-xl">
          {splitH1.map((item, i) => (
            <h1
              key={i}
              className={`split-h1 text-font-primary font-extrabold lg:font-black tracking-wide text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight ${
                i === 2 && "text-secondary"
              } ${i === 5 && "text-secondary"}`}
            >
              {item}&nbsp;
            </h1>
          ))}
        </div>
        <div className="flex flex-wrap justify-start">
          {splitP.map((item, i) => (
            <h2
              key={i}
              className="split-p text-font-primary font-medium about-split2"
            >
              {item}&nbsp;
            </h2>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {whatWeOffer.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-font-primary w-64 list-about"
            >
              <BiCheckDouble className="text-xl text-secondary" />
              <h3 className="font-semibold tracking-wide">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-center mt-5 list-about" onClick={()=>navigate("/about")}>
          <ButtonBlue name={"Get Started"} />
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
