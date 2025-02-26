import AboutComponents from "../components/AboutComponents";
import BlogsComponents from "../components/BlogsComponents";
import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import HomeComponents from "../components/HomeComponents";
import PortfolioComponents from "../components/PortfolioComponents";
import PricingComponents from "../components/PricingComponents";
import ServiceComponents from "../components/ServiceComponents";
import TestimonialComponents from "../components/TestimonialComponents";

const Home = () => {
  return (
    <>
      <HomeComponents />
      <AboutComponents />
      <ServiceComponents />
      <PortfolioComponents />
      <TestimonialComponents />
      <PricingComponents />
      <BlogsComponents />
      <ContactComponents />
      <FooterComponents/>
    </>
  );
};

export default Home;
