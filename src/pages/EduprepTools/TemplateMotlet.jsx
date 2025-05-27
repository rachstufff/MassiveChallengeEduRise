import { Link } from "react-router-dom";
import "../EduprepTools/styles/template-motivation.css";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
const TemplateMotivation = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container">
          <div className="page-title">
            <h1>
              Template <span>Motivation Letter</span>
            </h1>
          </div>

          {/* Motivation Letter Template */}
          <div className="cv-template">
            <div className="cv-image-container">
              <img
                src="/img/edupreptools/page5_gambar.png"
                alt="Template Motivation Letter"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="#" className="download-btn">
              Unduh Template
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TemplateMotivation;
