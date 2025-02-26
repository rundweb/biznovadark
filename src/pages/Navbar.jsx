import { useEffect, useState } from "react";
import { menu } from "../assets/data/data";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import NavbarComponents from "../components/NavbarComponents";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleClick = () => {
    setOpenMenu(false);

    gsap.fromTo(
      ".icons",
      { rotate: 180 },
      { rotate: 0, duration: 1, ease: "back.out" }
    );

    gsap.fromTo(
      ".nav-link",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 1,
        ease: "back.out",
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".logo",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: "back.out",
      }
    );
  }, []);

  const itemNav = document.querySelectorAll(".item-nav");

  itemNav.forEach((item) => {
    item.addEventListener("click", () => {
      setOpenMenu(true);
    });
  });

  const [shadowNav, setShadowNav] = useState(true);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY > 10 ? setShadowNav(false) : setShadowNav(true);
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const [openMethods, setOpenMethods] = useState(0);

  const clickOpen = (index) => {
    setOpenMethods(openMethods === index ? null : index);
  };

  const navigate = useNavigate();
  return (
    <section
      className={`bg-third font-ns fixed w-full z-50 ${
        shadowNav ? "shadow-none" : "shadow-md shadow-white/5"
      } duration-300 ease-in-out`}
    >
      <div className="container-primary flex items-center justify-between">
        <div className="w-full relative z-50 nav-link logo">
          <h1
            className="text-3xl font-extrabold tracking-wide font-primary cursor-pointer text-font-primary"
            onClick={() => navigate("/")}
          >
            BIZ<span>NOVA</span>
          </h1>
        </div>
        {/* icon open menu */}
        <div className="relative z-50 icons logo md:hidden">
          {openMenu ? (
            <HiOutlineMenuAlt3
              className="text-3xl text-font-primary"
              onClick={handleClick}
            />
          ) : (
            <IoClose
              className="text-3xl text-font-primary"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
        {/* menu mobile */}
        <div
          className={`w-full min-h-screen p-5 fixed top-0 bg-third flex flex-col z-40 py-16 ${
            openMenu ? "-right-full" : "right-0"
          } duration-500 ease-linear md:hidden`}
        >
          {menu.map((item, i) => (
            <div
              key={i}
              className="nav-link item-nav"
              onClick={() => clickOpen(i)}
            >
              <NavbarComponents
                name={item.name}
                path={item.path}
                id={i}
                idOpen={openMethods}
              />
            </div>
          ))}
          <Link
            to={"/contact"}
            className="nav-link bg-primary flex items-center justify-center h-12 rounded-lg text-font-primary tracking-wide font-semibold text-lg mt-6 shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex w-full items-center gap-4 justify-center">
          {menu.map((item, i) => (
            <div key={i} className="logo" onClick={() => clickOpen(i)}>
              <NavbarComponents
                name={item.name}
                path={item.path}
                id={i}
                idOpen={openMethods}
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-full items-center justify-end logo">
          <Link to={"/contact"} className="button-blue group text-font-primary">
            Contact Us
            <div className="h-5 w-5 overflow-hidden">
              <div className="relative flex items-center justify-center flex-col gap-2">
                <FiArrowUpRight className="text-xl -mt-7 group-hover:mt-0 duration-150 ease-linear" />
                <FiArrowUpRight className="text-xl group-hover:mt-0 duration-150 ease-linear" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
