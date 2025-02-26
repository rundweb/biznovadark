import AboutComponents from "../components/AboutComponents"
import BlogsComponents from "../components/BlogsComponents"
import ContactComponents from "../components/ContactComponents"
import FooterComponents from "../components/FooterComponents"

const About = () => {
  return (
    <div className="mt-10">
      <AboutComponents/>
      <BlogsComponents />
      <ContactComponents />
      <FooterComponents/>
    </div>
  )
}

export default About
