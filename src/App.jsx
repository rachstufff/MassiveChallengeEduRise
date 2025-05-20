import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProfilePage from "./pages/ProfilePage";

import ScholarshipHub from "./pages/ScholarshipHub/ScholarshipHub";
import Rekomendasi from "./pages/ScholarshipHub/Rekomendasi";
import EduprepTools from "./pages/EduprepTools/EduprepTools";

import PratinjauCV from "./pages/EduprepTools/PratinjauCV";
import TemplateCV from "./pages/EduprepTools/TemplateCV";
import PratinjauMotivation from "./pages/EduprepTools/PratinjauMotlet";
import TemplateMotivation from "./pages/EduprepTools/TemplateMotlet";
import SubmitEssay from "./pages/EduprepTools/SubmitEssay";
import SimulasiWawancara from "./pages/EduprepTools/SimulasiWawancara";
import TungguHasil from "./pages/EduprepTools/TungguHasil";
import LihatHasil from "./pages/EduprepTools/LihatHasil";
import HasilFeedback from "./pages/EduprepTools/HasilFeedback";

import Educonnect from "./pages/Educonnect/Educonnect";
import Diskusi from "./pages/Educonnect/Diskusi";
import Mentoring from "./pages/Educonnect/Mentoring";
import Forum from "./pages/Educonnect/Forum";

import Eduevent from "./pages/Eduevent/Eduevent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<h1>Home</h1>} />

        {/* Halaman Profile */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Halaman Scholarship Hub */}
        <Route path="/scholarshiphub" element={<ScholarshipHub />} />

        <Route path="/scholarshiphub/rekomendasi" element={<Rekomendasi />} />

        {/* Halaman Eduprep Tools */}

        <Route path="/eduprep-tools" element={<EduprepTools />} />

        <Route path="/eduprep-tools/pratinjau-cv" element={<PratinjauCV />} />

        <Route path="/eduprep-tools/template-cv" element={<TemplateCV />} />

        <Route
          path="/eduprep-tools/pratinjau-motlet"
          element={<PratinjauMotivation />}
        />
        <Route
          path="/eduprep-tools/template-motlet"
          element={<TemplateMotivation />}
        />

        <Route path="/submit-essay" element={<SubmitEssay />} />

        <Route path="/submit-essay/tunggu-hasil" element={<TungguHasil />} />

        <Route path="/lihat-hasil" element={<LihatHasil />} />

        <Route path="/hasil-feedback" element={<HasilFeedback />} />

        <Route path="/simulasi-wawancara" element={<SimulasiWawancara />} />

        {/* Halaman Educonnect */}
        <Route path="/educonnect" element={<Educonnect />} />

        <Route path="/diskusi" element={<Diskusi />} />

        <Route path="/forum" element={<Forum />} />

        <Route path="/mentoring" element={<Mentoring />} />

        {/* Eduevent */}
        <Route path="/eduevent" element={<Eduevent />} />

        {/* Halaman lain */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
