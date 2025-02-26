import gsap from "gsap";
import { useEffect } from "react";
// icon
import { BsStars } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";
// swiper css
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// data
import { testimonialItem } from "../assets/data/data";
const TestimonialComponents = () => {
  useEffect(() => {
    gsap.fromTo(
      ".testimonial-p",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-p",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      ".testimonial-h1",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".testimonial-h1", start: "top bottom" },
      }
    );

    gsap.fromTo(
      ".testimonial",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".testimonial", start: "top bottom" },
      }
    );
  }, []);
  return (
    <section className="p-5 font-ns flex flex-col justify-center items-center gap-10 md:gap-16 py-16 min-h-screen">
      <div className="flex items-center flex-col justify-center gap-5">
        <div className="testimonial-p">
          <p className="flex items-center gap-2 button-blue rounded-full font-semibold text-font-primary">
            <BsStars /> Testimonial
          </p>
        </div>
        <div className="testimonial-h1">
          <h1 className="text-font-primary font-extrabold tracking-wide text-3xl text-center md:text-5xl">
            What Our Clients Say
          </h1>
        </div>
      </div>
      <div className="w-full testimonial">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {testimonialItem.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-row gap-5 px-5 py-5 border-primary/20 border-2 rounded-xl relative overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full bg-primary/10 -top-56 -right-56 shadow-2xl shadow-primary/20"></div>
                <div className="flex flex-col gap-5">
                  <div>
                    <BiSolidQuoteRight className="text-4xl text-primary" />
                  </div>
                  <div>
                    <p className="text-font-primary tracking-wide text-justify">
                      {item.comment}
                    </p>
                  </div>

                  <div className="flex flex-row gap-5 items-center mt-5">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-14 h-14 border-2 border-primary/20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col h-full">
                      <h1 className="text-font-primary font-bold text-lg tracking-wide">
                        {item.name}
                      </h1>
                      <h2 className="text-font-primary font-medium text-sm tracking-wide">
                        {item.position}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialComponents;
