import React, { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Hash from "../components/Hash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css'

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ThemeProvider theme={{ activeSection }}>
      {/* <Header activeSection={activeSection} onHeaderClick={handleHeaderClick} /> */}
      <GlobalStyle />
      {/* <Hash setActiveSection={setActiveSection} /> */}
      <Swiper
        direction="vertical"
        mousewheel={true}
        pagination={{
          clickable : true,
        }}
        modules={[Mousewheel]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
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
