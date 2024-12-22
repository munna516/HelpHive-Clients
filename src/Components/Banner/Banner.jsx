// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../../assets/Image/slider1.jpg";
import slider2 from "../../assets/Image/slider2.jpg";
import slider3 from "../../assets/Image/slider3.jpg";
const Banner = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Slide
            image={slider3}
            text="Join Hands Build Communities & Empowering Change Through Volunteerism. Be the Spark That Inspires and Connect Every Corner of the World!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slider2}
            text="Unite for a Purpose Together We Can Make a Difference. Discover Opportunities to Give Back and  Through Compassionate Action!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slider1}
            text="Your Time Their Hope Volunteer Today and Be a Part of Transformative Impact. Together We Create Brighter Tomorrows!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
