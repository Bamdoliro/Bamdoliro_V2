import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header"
import Main from "./Layouts/Main"

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, HashNavigation, Navigation } from 'swiper/modules';
import 'swiper/css'

import Introduce from "./Layouts/Introduce";
import Histories from "./Layouts/Histories";
import Projects from "./Layouts/Projects";
import Culture from "./Layouts/Culture";
import Member from "./Layouts/Member"
import Wind from "./Layouts/Wind";
import Footer from "./Layouts/Footer"

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const [textNumber, setTextNumber] = useState(0)

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header />
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
      >
        <SwiperSlide data-hash="slide1">
          <Main />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <Introduce textNumber={textNumber} setTextNumber={setTextNumber} />
        </SwiperSlide>
        {
          textNumber >= 5 ? <>
            <SwiperSlide data-hash="slide3">
              <Culture />
            </SwiperSlide>
            <SwiperSlide data-hash="slide4">
              <Projects />
            </SwiperSlide>
            <SwiperSlide data-hash="slide5">
              <Histories />
            </SwiperSlide>
            <SwiperSlide data-hash="slide6">
              <Member />
            </SwiperSlide>
            <SwiperSlide data-hash="slide7">
              <Wind />
            </SwiperSlide>
            <SwiperSlide data-hash="slide8">
              <Footer />
            </SwiperSlide></>
            :
            null
          }
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
