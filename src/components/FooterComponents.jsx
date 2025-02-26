// data
import { Link } from "react-router-dom";
import { techBlogs, menu, menuDetails } from "../assets/data/data";
// icon
import { BsCalendar2Date } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
// gsap
import gsap from "gsap";
import { useEffect } from "react";
const FooterComponents = () => {
  const dataBlog = techBlogs.slice(1, 3);

  useEffect(() => {
    [
      ".footer-blog",
      ".footer-links",
      ".footer-details",
      ".footer-about",
    ].forEach((item) => {
      gsap.fromTo(
        item,
        { y: 75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top bottom" },
        }
      );
    });
  }, []);

  return (
    <div className="container-primary flex flex-col gap-10 pt-16 font-ns">
      <div className="flex items-center justify-center text-center flex-wrap gap-10 md:items-start md:justify-between md:text-start">
        <div className="flex flex-col gap-2 w-full md:max-w-[260px] footer-blog">
          <h1 className="font-bold text-font-primary text-lg mb-2">
            From Our Blog
          </h1>
          {dataBlog.map((item, i) => (
            <Link
              to={"/blogDetail"}
              key={i}
              className="flex flex-col gap-2 cursor-pointer group footer-blog"
            >
              <h1 className=" text-font-primary text-base group-hover:text-secondary duration-500 ease-in-out">
                {item.title}
              </h1>
              <div className="flex items-center justify-center gap-2 text-font-primary text-sm italic md:justify-start">
                <div>
                  <BsCalendar2Date />
                </div>
                <p>{item.date}</p>
                <p className="font-semibold group-hover:font-bold duration-500 ease-in-out">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full md:max-w-[130px] items-center footer-links">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-font-primary text-lg mb-2">
              Quick Links
            </h1>
            {menu.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-font-primary text-base group footer-links"
              >
                <div className="h-6 overflow-hidden">
                  <div className="-mt-6 text-secondary group-hover:mt-0 duration-150 ease-linear">
                    {item.name}
                  </div>
                  <div>{item.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:max-w-[140px]  items-center footer-details">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-font-primary text-lg mb-2">
              Pages Detail
            </h1>
            {menuDetails.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-font-primary text-base group footer-details"
              >
                <div className="h-6 overflow-hidden">
                  <div className="-mt-6 text-secondary group-hover:mt-0 duration-150 ease-linear">
                    {item.name}
                  </div>
                  <div>{item.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-center justify-center md:max-w-[280px] footer-about">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="font-bold text-font-primary text-lg mb-2 footer-about">
              About Us
            </h1>
            <p className="text-font-primary text-base max-w-xs footer-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              accusamus aliquam ad voluptas fugiat.
            </p>
            <div className="flex flex-row gap-2 mt-2 footer-about">
              <a
                href="https://x.com/home?lang=id" target="_blank"
                className="w-10 h-10 border-2 border-font-primary/10 rounded-full flex items-center justify-center group hover:scale-110 duration-300 ease-in-out"
              >
                <FaTwitter className="text-base text-font-primary group-hover:text-secondary duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.facebook.com/?locale=id_ID" target="_blank"
                className="w-10 h-10 border-2 border-font-primary/10 rounded-full flex items-center justify-center group hover:scale-110 duration-300 ease-in-out"
              >
                <FaFacebookF className="text-base text-font-primary group-hover:text-secondary duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.youtube.com/" target="_blank"
                className="w-10 h-10 border-2 border-font-primary/10 rounded-full flex items-center justify-center group hover:scale-110 duration-300 ease-in-out"
              >
                <FaYoutube className="text-base text-font-primary group-hover:text-secondary duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center text-center pt-5 border-t-2 border-font-primary/10 sm:flex-row sm:justify-between ">
        <p className="text-font-primary text-sm font-semibold">
          Copyright &copy; 2025 <span>BIZNOVA</span>, All rights reserved.
        </p>
        <p className="text-sm text-secondary font-semibold tracking-wide">
          BIZNOVA DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default FooterComponents;
