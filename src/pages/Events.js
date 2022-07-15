import { useState, useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import image1 from "../images/sunday1.jpg";
import image2 from "../images/monday2.jpg";
import image3 from "../images/monday1.jpg";
import image4 from "../images/wednesday3.jpg";
import image5 from "../images/wednesday1.jpeg";
import image6 from "../images/friday1.jpg";

const Events = () => {
  const { currentColor } = useStateContext();
  const [articles] = useState([
    { src: image1, day: "Sunday", title: "Sunday Service", id: 1 },
    { src: image2, day: "Monday", title: "Foundation School", id: 2 },
    { src: image3, day: "Tuesday", title: "Leader's Meeting", id: 3 },
    { src: image4, day: "Wednesday", title: "Mid-week Service", id: 4 },
    { src: image5, day: "Thursday", title: "Evangelism/Soul-winning", id: 5 },
    { src: image6, day: "Friday", title: "Prayer Meeting", id: 6 },
  ]);

  return (
    <div className="events px-2 my-10 mx-auto">
      <h2
        style={{ backgroundColor: currentColor }}
        className="mb-10 text-base md:text-xl capitalize rounded-full px-4 py-2 text-white w-fit"
      >
        Weekly Events
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="relative dark:bg-secondary-dark-bg bgr-white w-[290px] md:w-[350px] h-full mx-auto rounded-lg">
              <div className="rounded-lg rounded-b-none overflow-hidden">
                <img
                  src={article.src}
                  alt={article.title}
                  className="w-full h-64 object-cover block"
                />
              </div>
              <div className="h-52 flex flex-col justify-center p-4">
                <span className="text-base dark:text-gray-200 mb-2">{article.day}</span>
                <span className="font-semibold dark:text-gray-200 text-2xl">{article.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
