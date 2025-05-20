import HeroSection from "../../components/eduevent/HeroSection";
import CompetitionSection from "../../components/eduevent/CompetitionSection";
import WebinarSection from "../../components/eduevent/WebinarSection";

const Eduevent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <CompetitionSection />
        <WebinarSection />
      </main>
    </div>
  );
};
export default Eduevent;
