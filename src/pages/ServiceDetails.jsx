// components
import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import TitleDetails from "../element/TitleDetails";
// icon
import { FaCheckDouble } from "react-icons/fa";

// data
import { technologies } from "../assets/data/data";

// images
import imageService from "../assets/image/ai.jpg";

// gsap
import gsap from "gsap";
import { useEffect } from "react";

const ServiceDetails = () => {
  useEffect(() => {
    [".blog-title",".service-content", ".service-logo"].forEach((item) => {
      gsap.fromTo(
        item,
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
      );
    });
  }, []);
  return (
    <div>
      <section className="container-primary min-h-screen font-ns mt-20 flex flex-col items-center justify-center">
        <TitleDetails
          texth1={"Service Details"}
          texth2={"Home / Service Details"}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 ">
          <div className="w-full mx-auto p-5 py-8 shadow-lg shadow-[#303030]/10 md:col-span-3 service-content overflow-hidden">
            <h1 className="text-3xl font-bold mb-6 text-font-primary service-content">
              Website Development: Digital Solutions for Your Business
            </h1>
            <p className="text-lg text-font-primary/90 mb-4 service-content">
              In today`s digital era, having a professional website is no longer
              an option but a necessity for businesses aiming to grow and reach
              more customers. Our Website Development service is here to help
              you create a modern, responsive website tailored to your business
              needs. 
            </p>
            <div className="rounded-lg overflow-hidden w-full my-5 service-content">
              <img
                src={imageService}
                alt="service image"
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-6 text-font-primary service-content">
              Why Is a Website Important?
            </h2>
            <ul className="list-disc text-font-primary/90 mt-4 service-content">
              <li className="flex items-center gap-4 mb-1">
                <FaCheckDouble className="text-primary" /> Enhance credibility
                and customer trust
              </li>
              <li className="flex items-center gap-4 mb-1">
                <FaCheckDouble className="text-primary" /> Reach a broader
                market
              </li>
              <li className="flex items-center gap-4 mb-1">
                <FaCheckDouble className="text-primary" /> Facilitate better
                customer interaction
              </li>
              <li className="flex items-center gap-4 mb-1">
                <FaCheckDouble className="text-primary" /> Increase conversions
                and sales
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-6 text-font-primary service-content">
              Our Website Development Services
            </h2>
            <p className="text-lg text-font-primary/90 my-4 service-content">
              We offer various website development services designed to meet the
              needs of businesses across different industries. Here are our main
              services:
            </p>
            <ul className="list-disc text-font-primary/90 service-content">
              <li>
                <span>Custom Website Development</span> We build websites from
                scratch with unique designs and features customized to your
                business needs. The technologies we use include HTML, CSS,
                JavaScript, React, and Tailwind CSS to ensure optimal
                performance.
              </li>
              <li>
                <span>E-Commerce Development</span> We develop fast, secure, and
                user-friendly e-commerce websites with features such as shopping
                carts, online payment systems, and product & stock management.
              </li>
              <li>
                <span>Company Profile Website</span> Make your business look
                more professional with an informative and attractive company
                profile website, complete with about us, services, portfolio,
                and contact pages.
              </li>
              <li>
                <span>Company Profile Website</span> Ideal for marketing
                campaigns, new products, or special events. We design landing
                pages that are engaging and optimized for conversions.
              </li>
              <li>
                <span>Website Maintenance & Optimization</span> We also offer
                website maintenance and optimization services to improve speed,
                security, and SEO performance, ensuring your website stays ahead
                in search engines.
              </li>
            </ul>
          </div>
          <div className="w-full h-max p-5 py-8 shadow-lg shadow-[#303030]/10 rounded-lg flex flex-col gap-5 text-center service-logo overflow-hidden">
            <h2 className="text-xl lg:text-2xl font-semibold text-font-primary service-logo">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap gap-5 text-font-primary items-center justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 w-24 cursor-pointer group service-logo"
                >
                  <div>
                    <tech.icon className="text-4xl group-hover:text-primary duration-500 ease-in-out" />
                  </div>
                  <h1 className="group-hover:text-primary duration-500 ease-in-out">
                    {tech.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactComponents />
      <FooterComponents />
    </div>
  );
};

export default ServiceDetails;
