import ServiceComponents from "../components/ServiceComponents"
import BlogsComponents from "../components/BlogsComponents"
import ContactComponents from "../components/ContactComponents"
import FooterComponents from "../components/FooterComponents"

const Service = () => {
  return (
    <div className="mt-10">
      <ServiceComponents/>
      <BlogsComponents />
      <ContactComponents />
      <FooterComponents/>
    </div>
  )
}

export default Service
