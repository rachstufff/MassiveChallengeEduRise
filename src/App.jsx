import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScholarshipHub from "./pages/ScholarshipHub";
import Rekomendasi from "./pages/Rekomendasi";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/scholarshiphub" element={<ScholarshipHub />} />

        <Route path="/scholarshiphub/rekomendasi" element={<Rekomendasi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
