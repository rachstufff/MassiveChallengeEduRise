// src/pages/Eduevent/Eduevent.jsx
import React from 'react';
import HeroSection from "../../components/eduevent/HeroSection";
import CompetitionSection from "../../components/eduevent/CompetitionSection"; 
import WebinarSection from "../../components/eduevent/WebinarSection";     

const Eduevent = () => {
  return (
    <div>
      <HeroSection /> 
      <CompetitionSection />
      <WebinarSection />
    </div>
  );
};
export default Eduevent;
