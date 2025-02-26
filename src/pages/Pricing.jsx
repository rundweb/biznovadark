import PricingComponents from "../components/PricingComponents"
import BlogsComponents from "../components/BlogsComponents"
import ContactComponents from "../components/ContactComponents"
import FooterComponents from "../components/FooterComponents"

const Pricing = () => {
  return (
    <div className="mt-10">
      <PricingComponents/>
      <BlogsComponents />
      <ContactComponents />
      <FooterComponents/>
    </div>
  )
}

export default Pricing
