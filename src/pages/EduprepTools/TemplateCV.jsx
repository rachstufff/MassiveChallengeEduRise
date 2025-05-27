import { Link } from "react-router-dom";
import "../EduprepTools/styles/template-cv.css";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
const TemplateCv = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container">
          <div className="page-title">
            <h1>
              Template CV <span>(Curriculum Vitae)</span>
            </h1>
          </div>

          {/* CV Template */}
          <div className="cv-template">
            <div className="cv-image-container">
              <img
                src="/img/edupreptools/page4_gambar.png"
                alt="Template CV"
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

export default TemplateCv;
