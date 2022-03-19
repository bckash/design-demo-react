
import NavSmall from "./NavSmall";
import DodWhite from "./DodWhite";
import DodBlack from "./DodBlack";
import DodDesign from "./DodDesign";
import DodDetail from "./DodDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./Description";

const Dod = () => {

  const descDod = (
    <p>
      Limited edition t-shirts, promoting undeground rap record label from Gdansk, Poland. Co-designed logotype, general layout and details. Co-managed production in cooperation with <a target="_blank" href="https://morosport.pl/">Moro Sport</a>.
    </p>
  )

  return (
    <Router>
      <section className="menu-title__cont">
          <NavSmall />
          <Description desc={descDod} />
          <Routes>
            <Route path="/" element={<DodWhite/> } />
            <Route path="/dodwhite" element={<DodWhite/> } />
            <Route path="/dodblack" element={<DodBlack/> } />
            <Route path="/doddesign" element={<DodDesign/> } />
            <Route path="/doddetail" element={<DodDetail/> } />
          </Routes>
      </section>
    </Router>
  )
}
export default Dod;