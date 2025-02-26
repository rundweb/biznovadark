// data
import { useEffect } from "react";
import { blogDetails, techBlogs } from "../assets/data/data";
// img
import detailIMg from "../assets/image/testimonial.jpg";
import BlogsComponents from "../components/BlogsComponents";
import FooterComponents from "../components/FooterComponents";
// gsap
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import TitleDetails from "../element/TitleDetails";
const BlogDetails = () => {
  useEffect(() => {
    [".blog-title",".detail-blog", ".detail-popular", ".detail-writer"].forEach((item) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 1}
      );
    });
  }, []);
  const blogItem = blogDetails[0];
  const navigate = useNavigate()
  return (
    <div>
      <section className="container-primary min-h-screen font-ns mt-20 flex flex-col items-center justify-center">
        <TitleDetails texth1={"Blog Details"} texth2={"Home / Blog Details"}/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
          <div className="w-full mx-auto p-6 h-max bg-third shadow-lg shadow-[#303030]/10 rounded-lg md:col-span-2 detail-blog">
            <img
              src={blogItem.img}
              alt={blogItem.title}
              className="w-full h-64 object-cover rounded-md detail-blog"
            />
            <h1 className="text-3xl font-bold mt-4 detail-blog text-font-primary">{blogItem.title}</h1>
            <p className="text-sm text-font-primary/70 mt-4 detail-blog">
              {blogItem.date} • {blogItem.category}
            </p>
            <div className="mt-4 text-font-primary/80 detail-blog">
              {blogItem.desc.map((item, index) => (
                <p key={index} className="mt-4">
                  {item.icon} <span className="font-bold">{item.bold}</span>
                  {item.text}
                </p>
              ))}
            </div>

            <div className="flex gap-5 items-center mt-6 text-font-primary/80 detail-blog">
              <span>❤️ {blogItem.love}</span>
              <span>💬 {blogItem.comment}</span>
            </div>
          </div>

          <div className="w-full  gap-5 md:gap-10 flex flex-col">
            <div className="w-full h-max mx-auto p-5 bg-third shadow-lg shadow-white/10 rounded-lg flex items-start justify-start flex-col gap-5 detail-popular">
              <h1 className="text-font-primary font-bold text-xl detail-popular">
                Popular Blog
              </h1>
              {techBlogs.slice(0, 2).map((item, i) => (
                <div key={i} className="flex flex-col gap-5 w-full detail-popular cursor-pointer group" onClick={()=>navigate("/blog")}>
                  <div className="overflow-hidden detail-popular rounded-md">
                    <img
                      src={item.imgTop}
                      alt="detail img"
                      className="h-36 w-full object-cover rounded-md  group-hover:scale-110 duration-500 ease-in-out"
                    />
                  </div>
                  <div className="text-font-primary flex flex-col gap-2 detail-popular">
                    <h1 className="font-semibold text-lg group-hover:text-secondary duration-500 ease-in-out">{item.title}</h1>
                    <h2 className="italic detail">{item.date}</h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-max mx-auto p-5 bg-third shadow-lg shadow-[#303030]/10 rounded-lg flex items-center justify-center flex-col gap-5 detail-writer">
              <img
                src={detailIMg}
                alt="image detail writer"
                className="rounded-full h-24 w-24 detail-writer"
              />
              <div className="flex flex-col gap-5 text-center">
                <h1 className="text-font-primary font-bold  text-xl detail-writer">
                  About Writer
                </h1>
                <p className="text-font-primary detail-writer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  rem a, recusandae animi corporis at exercitationem quidem
                  similique. Ipsa, accusantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogsComponents />
      <FooterComponents />
    </div>
  );
};

export default BlogDetails;
