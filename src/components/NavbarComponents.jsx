/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
const NavbarComponents = ({ name, path, id, idOpen }) => {
  return (
    <>
      <Link
        to={path}
        className={`tracking-wide flex items-center justify-between text-font-primary/90 font-semibold text-lg border-b-[1px] border-neutral-200 py-3 md:hidden ${
          idOpen === id && "text-secondary"
        }`}
      >
        {name}
        <FaAngleRight />
      </Link>
      <div className="overflow-hidden group h-8 hidden md:flex">
        <div className="flex flex-col">
          <Link
            to={path}
            className=" text-secondary tracking-wide font-medium -mt-5 group-hover:mt-1 duration-200"
          >
            {name}
          </Link>
          <Link
            to={path}
            className={`text-font-primary tracking-wide font-medium ${
              idOpen === id && "text-secondary"
            }`}
          >
            {name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarComponents;
