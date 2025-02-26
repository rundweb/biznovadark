import PortfolioAll from "../components/PortfolioAll";
import BlogsComponents from "../components/BlogsComponents";
import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import TitleDetails from "../element/TitleDetails";

const Portfolio = () => {
  return (
    <div>
      <div className="mt-10 container-primary min-h-screen py-16 m-auto flex items-center justify-center font-ns flex-col gap-10">
        <TitleDetails texth1={"Our Portfolio"} texth2={"Home / Portfolio"}/>
        <PortfolioAll />
      </div>
      <BlogsComponents />
      <ContactComponents />
      <FooterComponents />
    </div>
  );
};

export default Portfolio;
