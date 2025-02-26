/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ButtonWhite = ({ name }) => {
  return (
    <div className="home-btn group">
      <Link className="button-white ">
        <div className="h-6 overflow-hidden">
          <div className="-mt-6 group-hover:mt-0 ease-linear duration-150">
            {name}
          </div>
          <div className="">{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonWhite;
