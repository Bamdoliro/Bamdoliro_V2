import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Main from "../pages/Layouts/Main/index";
import Introduce from "../pages/Layouts/Introduce/index";
import Culture from "../pages/Layouts/Culture/index";
import Histories from "../pages/Layouts/Histories/index";
import Projects from "../pages/Layouts/Projects/index";
import Member from "../pages/Layouts/Member/index";
import Wind from "../pages/Layouts/Wind/index";
import { Container } from "../components/Project/style";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

const Contain = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default Home;
