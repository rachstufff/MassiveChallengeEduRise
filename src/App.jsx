import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import ScholarshipHub from "./pages/ScholarshipHub";
import Rekomendasi from "./pages/Rekomendasi";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/scholarshiphub" element={<ScholarshipHub />} />

        <Route path="/scholarshiphub/rekomendasi" element={<Rekomendasi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
