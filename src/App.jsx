import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import ScholarshipHub from "./pages/ScholarshipHub/ScholarshipHub";
import Rekomendasi from "./pages/ScholarshipHub/Rekomendasi";
import EduprepTools from "./pages/EduprepTools/EduprepTools";
import Footer from "./components/Footer";
import PratinjauCV from "./pages/EduprepTools/PratinjauCV";
import TemplateCV from "./pages/EduprepTools/TemplateCV";
import PratinjauMotivation from "./pages/EduprepTools/PratinjauMotlet";
import TemplateMotivation from "./pages/EduprepTools/TemplateMotlet";
import SubmitEssay from "./pages/EduprepTools/SubmitEssay";
import SimulasiWawancara from "./pages/EduprepTools/SimulasiWawancara";
import TungguHasil from "./pages/EduprepTools/TungguHasil";
import LihatHasil from "./pages/EduprepTools/LihatHasil";
import HasilFeedback from "./pages/EduprepTools/HasilFeedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/scholarshiphub" element={<ScholarshipHub />} />

        <Route path="/scholarshiphub/rekomendasi" element={<Rekomendasi />} />

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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
