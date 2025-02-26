import { BsStars } from "react-icons/bs";
import { services } from "../assets/data/data";
import gsap from "gsap";
import { useEffect } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const ServiceComponents = () => {
  const serviceH1 = "Empowering Your Business With Smart Solutions";
  const splitService = serviceH1.split(" ");

  useEffect(() => {
    gsap.fromTo(
      ".service-title",
      { y: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".service-title-box",
          start: "top bottom",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".service-h1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ".service-h1",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".service-lis-text",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-box",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".service-list",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-list-box",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".service-list-text",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-list-box",
          start: "top bottom",
        },
      }
    );
  }, []);
  return (
    <section className="container-primary min-h-screen w-full p-5 py-16 font-ns flex items-center justify-center flex-col gap-10 md:gap-14 ">
      <div className="flex flex-col gap-5 items-center justify-center text-center ">
        <div className="service-title-box">
          <div className="service-title">
            <p className="button-blue rounded-full text-base font-semibold text-font-primary">
              <BsStars />
              Our Service
            </p>
          </div>
        </div>
        <div className="overflow-hidden flex items-center flex-wrap justify-center max-w-2xl ">
          {splitService.map((item, index) => (
            <h1
              key={index}
              className={`service-h1 text-font-primary font-extrabold lg:font-black tracking-wide
            text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight`}
            >
              {item}&nbsp;
            </h1>
          ))}
        </div>
      </div>
      <div className="service-box flex flex-wrap items-start sm:justify-center gap-5 w-full">
        {services.map((item, i) => (
          <Link to={"/serviceDetail"} key={i} className="service-lis-text">
            <div className="flex flex-col gap-5 p-8 rounded-xl shadow-2xl shadow-[#303030]/10 w-full sm:max-w-96 cursor-pointer group hover:scale-105 hover:z-20 relative duration-500 ease-in-out service-list-box overflow-hidden bg-third">
              <div className="opacity-0 duration-500 ease-in-out group-hover:opacity-100 absolute right-5  md:right-8 top-8 w-12 h-12 flex items-center justify-center bg-gradient-to-t from-secondary to-primary rounded-full">
                <LuArrowUpRight className="text-2xl text-font-primary" />
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-t from-secondary to-primary rounded-full service-list">
                <item.icon className="text-2xl text-font-primary" />
              </div>
              <div className="service-list-text">
                <h1 className="text-xl font-bold text-font-primary tracking-wide  group-hover:bg-gradient-to-r from-primary  to-secondary w-max group-hover:text-transparent group-hover:bg-clip-text duration-500 ease-in-out relative">
                  {item.title}
                </h1>
              </div>
              <p className="text-font-primary/80 sm:text-base service-list-text">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponents;
