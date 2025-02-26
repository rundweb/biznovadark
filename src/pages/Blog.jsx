import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import TitleDetails from "../element/TitleDetails";

// data
import { techBlogs } from "../assets/data/data";

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// gsap
import gsap from "gsap";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    gsap.fromTo(
      ".blog-title",
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="mt-20 container-primary font-ns">
      <TitleDetails texth1={"Our Blog"} texth2={"Home / Blog"} />
      <section className="grid grid-cols-1  md:gap-10 md:grid-cols-2 py-5 lg:grid-cols-3">
        {techBlogs.map((item, i) => (
          <Link to={"/blogDetail"} className="w-full blog-title" key={i}>
            <div className="flex flex-col gap-5 group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.imgTop}
                  alt="img-blog"
                  className="h-40 md:h-52 w-full object-cover rounded-t-lg group-hover:scale-110 ease-in-out duration-300"
                />
              </div>
              <div className="flex items-center justify-start gap-4">
                <div>
                  <img
                    src={item.img}
                    alt="img-blog-creator"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <p className="text-font-primary/80 text-base font-medium">
                  James Rodriguez
                </p>
              </div>
              <h1 className="font-extrabold text-font-primary text-2xl group-hover:bg-gradient-to-r from-secondary to-primary inline-block group-hover:text-transparent bg-clip-text duration-300 ease-in-out">
                {item.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-10 h-[1.5px] bg-font-primary/60"></div>
                <p className="text-font-primary/80 font-medium ">
                  {item.category}
                </p>
              </div>

              <h2 className="font-medium text-font-primary">{item.desc}</h2>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <BsCalendar2Date className="text-font-primary/80 text-xl -mt-1" />
                  </div>
                  <p className="text-sm font-semibold text-font-primary/80">
                    {" "}
                    {item.date}
                  </p>
                </div>
                <div>
                  <div className="group cursor-pointer bg-gradient-to-t from-secondary to-primary h-12 w-12 flex items-center justify-center rounded-md text-white">
                    <div className="overflow-hidden h-7">
                      <div className="-mt-8 group-hover:mt-0 duration-200 ease-linear">
                        <FiArrowUpRight className="text-3xl" />
                      </div>
                      <div>
                        <FiArrowDownRight className="text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <ContactComponents />
      <FooterComponents />
    </div>
  );
};

export default Blog;
