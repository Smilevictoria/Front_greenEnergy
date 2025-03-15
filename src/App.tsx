import { BrowserRouter as Router, Routes, Route, useLocation, Navigate  } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SustainableEnergy from "./pages/SustainableEnergy";
import BuyPower from "./pages/BuyPower";
import GreenEnergyConsultant from "./pages/GreenEnergyConsultant";
import SellPower from "./pages/SellPower";
import CommonQuestionAnswer from "./pages/CommonQuestionAnswer";
import LastestNews from "./pages/LastestNews";
import HomePage from "./pages/HomePage";
import './App.css';

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hideLayoutPaths = ["/HomePage"];
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="showPage">
      {!hideLayout && <Navbar />}
    <Routes>
          <Route path="/" element={<Navigate to="/HomePage" />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/sustainable-energy" element={<SustainableEnergy />} />
          <Route path="/buy-power" element={<BuyPower />} />
          <Route path="/green-energy-consultant" element={<GreenEnergyConsultant />} />
          <Route path="/sell-power" element={<SellPower />} />
          <Route path="/common-question-answer" element={<CommonQuestionAnswer />} />
          <Route path="/lastest-news" element={<LastestNews />} />
    </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}