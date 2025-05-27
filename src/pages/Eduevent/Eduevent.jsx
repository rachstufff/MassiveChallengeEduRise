import HeroSection from "../../components/eduevent/HeroSection";
import CompetitionSection from "../../components/eduevent/CompetitionSection";
import WebinarSection from "../../components/eduevent/WebinarSection";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";

const Eduevent = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <HeroSection />
          <CompetitionSection />
          <WebinarSection />
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Eduevent;
