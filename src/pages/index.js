import React, {  useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header"
import Main from "./Layouts/Main"

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from 'swiper/modules';
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

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header  />
      <GlobalStyle />
      <Swiper
        direction="vertical"
        mousewheel={true}
        pagination={{
          clickable : true,
        }}
        modules={[Mousewheel]}
        speed={1000}
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>
          <Introduce />
        </SwiperSlide>
        <SwiperSlide>
          <Culture />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <Histories />
        </SwiperSlide>
        <SwiperSlide>
          <Member />
        </SwiperSlide>
        <SwiperSlide>
          <Wind />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
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
