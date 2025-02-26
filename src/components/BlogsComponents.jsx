import { TbArrowUpRight } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
// gsap
import gsap from "gsap";
import { useEffect } from "react";

// data
import { techBlogs } from "../assets/data/data";

// icon
import { BsCalendar2Date } from "react-icons/bs";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonBlue from "../element/ButtonBlue";
const BlogsComponents = () => {
  useEffect(() => {
    [".blog-p", ".blog-h1", ".blog-h2", ".blog-button", ".blog",".button-all"].forEach(
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
  }, []);

  const blogPrimary = techBlogs[0];
  const selectedBlogs = techBlogs.slice(1, 3);
  const navigate = useNavigate()
  return (
    <section className="container-primary min-h-screen py-16 flex flex-col gap-10 items-center justify-center font-ns">
      <div className="flex flex-col gap-5 items-start justify-start w-full md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-5 md:max-w-2xl lg:max-w-4xl">
          <div className="blog-p">
            <p className="flex items-center gap-2 text-primary text-lg font-semibold">
              <BsStars /> Blogs And News
            </p>
          </div>
          <div className="blog-h1">
            <h1 className="font-black text-font-primary text-3xl md:text-6xl md:leading-tight">
              Expanding Our Knowledge & Yours, One Blog At A Time.
            </h1>
          </div>
          <div className="blog-h2">
            <h2 className="text-font-primary font-medium md:text-lg">
              All the latest news and events of our creative team.
            </h2>
          </div>
        </div>
        <div className="hidden h-28 w-28  md:flex items-center justify-center blog-button">
          <div className="p-5 border-primary md:p-0 border-2 md:border-primary/0 rounded-full hover:p-5 hover:border-primary duration-500 ease-in-out ">
            <div onClick={()=>navigate("/blog")} className="w-20 h-20 group duration-300 ease-in-out cursor-pointer bg-gradient-to-t from-secondary to-primary flex items-center justify-center rounded-full">
              <div className="h-9 overflow-hidden">
                <div className="-mt-9 group-hover:mt-0 duration-200 ease-linear">
                  <TbArrowUpRight className="text-white text-4xl" />
                </div>
                <div>
                  <TbArrowUpRight className="text-white text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center md:items-start justify-center w-full lg:flex-row">
        {/* right */}
        <div className="w-full blog">
          <div className="flex flex-col gap-5 group cursor-pointer" onClick={()=>navigate("/blogDetail")}>
            <div className="overflow-hidden">
              <img
                src={blogPrimary.imgTop}
                alt="img-blog"
                className="h-40 md:h-72 w-full object-cover rounded-t-lg group-hover:scale-110 ease-in-out duration-300"
              />
            </div>
            <div className="flex items-center justify-start gap-4">
              <div>
                <img
                  src={blogPrimary.img}
                  alt="img-blog-creator"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <p className="text-font-primary/80 text-base font-medium">
                James Rodriguez
              </p>
            </div>
            <h1 className="font-extrabold text-font-primary text-2xl group-hover:bg-gradient-to-r from-secondary to-primary inline-block group-hover:text-transparent bg-clip-text duration-300 ease-in-out">
              {blogPrimary.title}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-10 h-[1.5px] bg-font-primary/60"></div>
              <p className="text-font-primary/80 font-medium ">
                {blogPrimary.category}
              </p>
            </div>

            <h2 className="font-medium text-font-primary">
              {blogPrimary.desc}
            </h2>
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <BsCalendar2Date className="text-font-primary/80 text-xl -mt-1" />
                </div>
                <p className="text-sm font-semibold text-font-primary/80">
                  {" "}
                  {blogPrimary.date}
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
        </div>
        {/* left */}
        <div className="w-full flex flex-col gap-10 blog">
          {selectedBlogs.map((blog, index) => (
            <div className="flex flex-col gap-5 lg:flex-row group cursor-pointer" key={index} onClick={()=>navigate("/blogDetail")}>
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={blog.imgTop}
                  alt="img-blog"
                  className="h-40 md:h-72 lg:h-full w-full object-cover rounded-t-lg  lg:rounded-lg group-hover:scale-110 ease-in-out duration-300"
                />
              </div>
              <div className="flex flex-col gap-5 w-full lg:gap-4">
                <div className="flex items-center justify-start gap-4">
                  <div>
                    <img
                      src={blog.img}
                      alt="img-blog-creator"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <p className="text-font-primary/80 text-base font-medium">
                    James Rodriguez
                  </p>
                </div>
                <h1 className="font-extrabold text-font-primary text-2xl lg:text-lg group-hover:bg-gradient-to-r from-secondary to-primary inline-block group-hover:text-transparent bg-clip-text duration-300 ease-in-out">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[1.5px] bg-font-primary/60 lg:w-7"></div>
                  <p className="text-font-primary/80 font-medium lg:text-sm">
                    {blog.category}
                  </p>
                </div>
                <h2 className="font-medium text-font-primary lg:text-sm">
                  {blog.desc}
                </h2>
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <BsCalendar2Date className="text-font-primary/80 text-xl -mt-1" />
                    </div>
                    <p className="text-sm font-semibold text-font-primary/80">
                      {" "}
                      {blog.date}
                    </p>
                  </div>
                  <div>
                    <div className=" cursor-pointer bg-gradient-to-t from-secondary to-primary h-10 w-10 flex items-center justify-center rounded-md text-white">
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
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden button-all" onClick={()=>navigate("/blog")}>
        <ButtonBlue name={"See All Blog"}/>
      </div>
    </section>
  );
};

export default BlogsComponents;
