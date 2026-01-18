import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import About from "./pages/franchising/about/about";
import Whywing from "./pages/franchising/why/whywing";
import OwnTheZone from "./pages/franchising/ownthezone/ownthezone";
import Investment from "./pages/franchising/investment/investment";
import Getstarted from "./pages/franchising/getstarted/getstarted";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/whywing" element={<Whywing />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/ownthezone" element={<OwnTheZone />} />
        <Route path="/getstarted" element={<Getstarted />} />
      </Routes>
    </div>
  );
}

export default App;
