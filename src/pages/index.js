import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Main from "./Layouts/Main";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, HashNavigation, Navigation } from "swiper/modules";
import "swiper/css";

import Introduce from "./Layouts/Introduce";
import Histories from "./Layouts/Histories";
import Projects from "./Layouts/Projects";
import Culture from "./Layouts/Culture";
import Member from "./Layouts/Member";
import Wind from "./Layouts/Wind";
import Footer from "./Layouts/Footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const [iTextNumber, setITextNumber] = useState(0);
  const [cTextNumber, setCTextNumber] = useState(0);

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
        autoHeight={true}
      >
        <SwiperSlide data-hash="main">
          <Main />
        </SwiperSlide>
        <SwiperSlide data-hash="introduce">
          <Introduce textNumber={iTextNumber} setTextNumber={setITextNumber} />
        </SwiperSlide>
        {iTextNumber >= 5 ? (
          <>
            <SwiperSlide data-hash="culture">
              <Culture
                textNumber={cTextNumber}
                setTextNumber={setCTextNumber}
              />
            </SwiperSlide>
            {cTextNumber >= 3 ? (
              <>
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
                <SwiperSlide data-hash="footer">
                  <Footer />
                </SwiperSlide>
              </>
            ) : null}
          </>
        ) : null}
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