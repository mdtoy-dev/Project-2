import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import FlagGame from "./components/FlagGame";
import Explore from "./pages/Explore";
import Capitals from "./components/countryCapitals";
import Random from "./components/Random";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/score" element={<Score />} />
          <Route path="/memory" element={<Cards />} />
          <Route path="/countries" element={<FlagGame />} />
          <Route path="/capitals" element={<Capitals />} />
          <Route path="/random" element={<Random />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
