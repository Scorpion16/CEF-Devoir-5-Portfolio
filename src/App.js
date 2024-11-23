import { Routes, Route } from "react-router-dom";

import Footers from "./component/pages/Footers";
import Headers from "./component/pages/Headers";
import Home from "./component/pages/Home";
import Portfolio from "./component/pages/Portfolio";
import Contact from "./component/pages/Contact";
import Mentions from "./component/pages/Mentions";
import Services from "./component/pages/Services";



function App() {
  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Mentions" element={<Mentions/>}></Route>
      </Routes>
      <Footers/>
    </div>
  );
}

export default App;
