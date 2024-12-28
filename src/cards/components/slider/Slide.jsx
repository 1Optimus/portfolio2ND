import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import Play from "../../../assets/play.png";
import Github from "../../../assets/github.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App({ data }) {
  App.propTypes = {
    data: PropTypes.string.isRequired,     
    };
  const goTo = (toSite) => {
    console.log(toSite);
    if (toSite === 1) {
      window.open(data.demo, "_blank");
    } else {
      window.open(data.github, "_blank");
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              // eslint-disable-next-line no-undef
              src={require(`../../../assets/${image}`)}
              alt={`${data.id} ${index + 1}`}
            />
          </SwiperSlide>
        ))}
        <div className="button-container">
          {data.demo !== "null" && (
            <img
              src={Play}
              className="carousel-button"
              alt="playIcon"
              onClick={() => goTo(1)}
            />
          )}
          <img
            src={Github}
            className="carousel-button"
            alt="playIcon"
            onClick={() => goTo(2)}
          />
        </div>
      </Swiper>
    </>
  );
}
