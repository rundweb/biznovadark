/* eslint-disable react/prop-types */

const TitleDetails = ({ texth1, texth2 }) => {
  return (
    <div className="bg-details w-full h-full bg-no-repeat bg-cover bg-center mb-5 flex items-center justify-center rounded-lg shadow-lg py-20 text-center blog-title">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl text-white font-extrabold md:text-5xl">
          {texth1}
        </h1>
        <h2 className="text-lg text-white font-semibold">{texth2}</h2>
      </div>
    </div>
  );
};

export default TitleDetails;
