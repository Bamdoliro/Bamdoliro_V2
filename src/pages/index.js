import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Main from "./Layouts/Main";
import Introduce from "./Layouts/Introduce";
import Histories from "./Layouts/Histories";
import Projects from "./Layouts/Projects";
import Culture from "./Layouts/Culture";
import Member from "./Layouts/Member";
import Wind from "./Layouts/Wind";
//import Footer from "./Layouts/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, HashNavigation, Navigation } from "swiper/modules";
import "swiper/css";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSlideChange = (swiper) => {
    const hash = swiper.slides[swiper.activeIndex].dataset.hash;
    setActiveSection(hash);
  };

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header activeSection={activeSection} />
      <GlobalStyle />
      <Swiper
        hashNavigation={{
          watchState: true,
        }}
        touchRatio={0}
        direction="vertical"
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, HashNavigation, Navigation]}
        speed={1000}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide data-hash="main">
          <Main />
        </SwiperSlide>
        <SwiperSlide data-hash="introduce">
          {(props) => <Introduce {...props} />}
        </SwiperSlide>
        <SwiperSlide data-hash="culture">
          {(props) => <Culture {...props} />}
        </SwiperSlide>
        <SwiperSlide data-hash="projects">
          <Projects />
        </SwiperSlide>
        <SwiperSlide data-hash="histories">
          <Histories />
        </SwiperSlide>
        <SwiperSlide data-hash="member">
          <Member />
        </SwiperSlide>
        <SwiperSlide data-hash="wind">
          <Wind />
        </SwiperSlide>
        {/*
          <SwiperSlide data-hash="footer">
          <Footer />
        </SwiperSlide>
        */}
      </Swiper>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
  }
  
`;

export default Home;
