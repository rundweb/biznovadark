/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
const ButtonBlue = ({ name }) => {
  return (
    <div className=" group">
      <Link className="button-blue group">
        <div className="h-6 overflow-hidden">
          <div className="-mt-6 group-hover:mt-0 ease-linear duration-150 flex items-center justify-center gap-2 text-font-primary">
            {name}
            <FiArrowUpRight className="text-xl"/>
          </div>
          <div className=" flex items-center justify-center gap-2 text-font-primary">
            {name}
            <FiArrowUpRight className="text-xl"/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonBlue;
