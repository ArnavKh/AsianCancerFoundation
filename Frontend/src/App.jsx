import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OurTeam from "./pages/OurTeam/OurTeam.jsx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home/home.jsx";
import OurImpact from "./pages/OurImpact/OurImpact.jsx";
import OurWorkInAction from "./pages/OurWorkInAction/OurWorkInAction.jsx";
import FlagshipInitiatives from "./pages/FlagshipInitiatives/FlagshipInitiatives.jsx";
import Support from "./pages/Support/Support.jsx";
import CancerScreening from "./pages/OurWorkInAction/CancerScreening.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import TobaccoAwareness from "./pages/OurWorkInAction/TobaccoAwareness.jsx";
import VIBGYOR from "./pages/OurWorkInAction/VIBGYOR.jsx";
import MobileScreening from "./pages/OurWorkInAction/MobileScreening.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import DonateOverlay from "./DonateOverlay.jsx";
import DonateButton from "./DonateButton.jsx";

export default function App() {
  return (
    // <DonateButton/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/ourimpact" element={<OurImpact />} />
        <Route path="/workinaction" element={<OurWorkInAction />} />
        <Route path="/workinaction/medicalcamp" element={<CancerScreening />} />
        <Route path="/workinaction/tobaccoawareness" element={<TobaccoAwareness />} />
        <Route path="/workinaction/vibgyor" element={<VIBGYOR />} />
        <Route path="/workinaction/mobilescreening" element={<MobileScreening />} />
        <Route path="/flagshipninit" element={<FlagshipInitiatives />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
