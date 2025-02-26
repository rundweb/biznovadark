// icon
import { IoTimeSharp } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
// gsap
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ContactComponents = () => {
  useEffect(() => {
    [".contact-p", ".contact-h1", ".contact-h2", ".contact-service"].forEach(
      (item) => {
        gsap.fromTo(
          item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top bottom" },
          }
        );
      }
    );
    [".contact-box", ".contact-form"].forEach((item) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top bottom" },
        }
      );
    });
  }, []);
  return (
    <section className="container-primary min-h-screen flex items-center justify-center w-full py-16 flex-col gap-16 font-ns">
      <div className="flex w-full items-center justify-center flex-col gap-5 text-center">
        <div className="contact-p">
          <p className="button-blue rounded-full font-semibold text-lg text-font-primary">
            <BsStars /> Contact Us
          </p>
        </div>
        <div className="contact-h1">
          <h1 className="text-font-primary font-extrabold text-4xl md:text-5xl mt-2">
            We`d love to here from you
          </h1>
        </div>
        <div className="contact-h2">
          <h2 className="text-font-primary font-medium">
            Here`s what some of my satisfied clients have to say about my work
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
          <div className=" contact-service flex items-center justify-center gap-2 text-font-primary text-sm font-medium border-primary/10 border-2 h-10 px-4 rounded-full">
            <IoTimeSharp className="text-primary text-xl" />
            <p>24 / 7 Assistance</p>
          </div>
          <div className=" contact-service flex items-center justify-center gap-2 text-font-primary text-sm font-medium border-primary/10 border-2 h-10 px-4 rounded-full">
            <AiFillThunderbolt className="text-primary text-xl" />
            <p>Quick Change Resolutions</p>
          </div>
          <div className=" contact-service flex items-center justify-center gap-2 text-font-primary text-sm font-medium border-primary/10 border-2 h-10 px-4 rounded-full">
            <BsStars className="text-primary text-xl" />
            <p>Flexible Working Hours</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center w-full lg:flex-row">
        <div className="w-full relative p-5  sm:max-w-lg contact-box overflow-hidden">
          <div className="border-2 border-primary absolute w-[75%] h-[75%] z-0 left-0 top-0 rounded-lg"></div>
          <div className="border-2 border-primary absolute w-[75%] h-[75%] z-0 right-0 bottom-0 rounded-lg"></div>
          <div className="w-full bg-black rounded-lg p-5 md:py-10 flex flex-col gap-5 relative z-10 items-center justify-center">
            <div className="w-full p-5  bg-third flex flex-wrap items-center justify-between gap-4 rounded-lg contact-box">
              <div>
                <p className="text-font-primary text-sm font-medium">
                  You can Email Me Here
                </p>
                <h1 className="text-font-primary font-medium">
                  Example@gmail.com
                </h1>
              </div>
              <Link to={"https://mail.google.com/"}>
                <div className="button-blue text-lg p-0 w-10 h-10 cursor-pointer group">
                  <div className="flex items-center w-5 overflow-hidden gap-2">
                    <div className="-ml-6 group-hover:ml-[2px] duration-200 ease-linear">
                      <HiArrowRight />
                    </div>
                    <div>
                      <HiArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full p-5 bg-third flex flex-wrap items-center justify-between gap-4 rounded-lg contact-box">
              <div>
                <p className="text-font-primary text-sm font-medium">
                  Give Me Call On
                </p>
                <h1 className="text-font-primary font-medium">
                  +61 8123 4567 892
                </h1>
              </div>
              <Link to={"https://web.whatsapp.com/"}>
                <div className="button-blue text-lg p-0 w-10 h-10 cursor-pointer group">
                  <div className="flex items-center w-5 overflow-hidden gap-2">
                    <div className="-ml-6 group-hover:ml-[2px] duration-200 ease-linear">
                      <HiArrowRight />
                    </div>
                    <div>
                      <HiArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full p-5 bg-third flex flex-wrap items-center justify-between gap-4 rounded-lg contact-box">
              <div>
                <p className="text-font-primary text-sm font-medium">
                  Location
                </p>
                <h1 className="text-font-primary font-medium">
                  Indonesia West Java
                </h1>
              </div>
              <Link to={"https://www.google.com/maps"}>
                <div className="button-blue text-lg p-0 w-10 h-10 cursor-pointer group">
                  <div className="flex items-center w-5 overflow-hidden gap-2">
                    <div className="-ml-6 group-hover:ml-[2px] duration-200 ease-linear">
                      <HiArrowRight />
                    </div>
                    <div>
                      <HiArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-black p-5 py-8 rounded-lg flex flex-col gap-4 contact-form overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 contact-form">
              <div className="w-full relative group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full h-12 rounded-lg outline-primary p-5 text-font-primary bg-third"
                />
              </div>
              <div className="w-full relative group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-12 rounded-lg outline-primary p-5 text-font-primary bg-third"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 contact-form">
              <div className="w-full relative group">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full h-12 rounded-lg outline-primary p-5 text-font-primary bg-third"
                />
              </div>
              <div className="w-full relative group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-12 rounded-lg outline-primary p-5 text-font-primary bg-third"
                />
              </div>
            </div>
            <div className="contact-form">
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="Your Massage here.."
                className="w-full rounded-lg p-5 outline-primary text-font-primary bg-third"
              ></textarea>
            </div>
            <Link to={"/"} className="contact-form ">
              <button className="group w-full bg-gradient-to-t from-secondary to-primary h-12 rounded-lg text-font-primary font-semibold text-lg">
                <div className="h-7 overflow-hidden">
                  <div className="-mt-7 group-hover:mt-0 duration-200 ease-linear">
                    Send Massage
                  </div>
                  <div>Send Massage</div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponents;
