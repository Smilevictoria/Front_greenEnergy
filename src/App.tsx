import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SustainableEnergy from "./pages/SustainableEnergy";
import BuyPower from "./pages/BuyPower";
import GreenEnergyConsultant from "./pages/GreenEnergyConsultant";
import SellPower from "./pages/SellPower";
import CommonQuestionAnswer from "./pages/CommonQuestionAnswer";
import LastestNews from "./pages/LastestNews";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="main">
          <Routes>
            <Route path="/sustainable-energy" element={<SustainableEnergy />} />
            <Route path="/buy-power" element={<BuyPower />} />
            <Route path="/green-energy-consultant" element={<GreenEnergyConsultant />} />
            <Route path="/sell-power" element={<SellPower />} />
            <Route path="/common-question-answer" element={<CommonQuestionAnswer />} />
            <Route path="/lastest-news" element={<LastestNews />} />
          </Routes>
          <Home />
        </div>
        <Footer />
      </div>
    </Router>
  );
}