import { Link } from "react-router-dom";
import "../EduprepTools/styles/pratinjau-cv.css";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
const PratinjauCv = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <img src="/img/edupreptools/page2_gambar.png" alt="Contoh CV" />
          </div>
          <div className="hero-content">
            <h1>CV (Curriculum Vitae)</h1>
            <p>
              EduPrep hadir untuk membantu kamu mempersiapkan diri meraih
              beasiswa dan memaksimalkan peluang akademik. Ayo, mulai
              persiapanmu sekarang juga!
            </p>
            <Link to="/eduprep-tools/template-cv" className="cta-button">
              Lihat
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-container">
          <div className="gallery-title">
            <h2>
              Contoh CV <span>(Curriculum Vitae)</span>
            </h2>
            <p>
              Beberapa contoh CV yang dapat dijadikan referensi untuk membuat CV
              Anda
            </p>
          </div>

          <div className="gallery-grid">
            {Array.from({ length: 9 }, (_, i) => (
              <div className="gallery-item" key={i}>
                <img
                  src={`/img/edupreptools/page2_cv${i + 1}.png`}
                  alt={`Contoh CV ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PratinjauCv;
