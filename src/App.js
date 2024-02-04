import React from "react";
import Home from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Layouts/Introduce/index";
import Culture from "./pages/Layouts/Culture/index";
import Projects from "./pages/Layouts/Projects/index";
import Histories from "./pages/Layouts/Histories/index";
import Member from "./pages/Layouts/Member/index";
import "./style.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#introduce" element={<Introduce />} />
          <Route path="/#projects" element={<Projects />} />
          <Route path="/#culture" element={<Culture />} />
          <Route path="/#member" element={<Member />} />
          <Route path="/#histories" element={<Histories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
/*import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/index";
import Introduce from "./pages/Layouts/Introduce/index";
import Culture from "./pages/Layouts/Culture/index";
import Projects from "./pages/Layouts/Projects/index";
import Histories from "./pages/Layouts/Histories/index";
import Member from "./pages/Layouts/Member/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/introduce">팀 소개</Link>
          <Link to="/projects">프로젝트</Link>
          <Link to="/culture">팀 문화</Link>
          <Link to="/member">멤버 소개</Link>
          <Link to="/histories">팀 연혁</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/member" element={<Member />} />
          <Route path="/histories" element={<Histories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/
