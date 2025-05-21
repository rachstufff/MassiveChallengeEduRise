import { Link } from "react-router-dom";
import "../EduprepTools/styles/pratinjau-motivation.css";
const PratinjauMotivation = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Motivation Letter</h1>
            <p>
              EduPrep hadir untuk membantu kamu mempersiapkan diri meraih
              beasiswa dan memaksimalkan peluang akademik. Ayo, mulai
              persiapanmu sekarang juga!
            </p>
            <Link to="/eduprep-tools/template-motlet" className="cta-button">
              Lihat
            </Link>
          </div>
          <div className="hero-image">
            <img src="/img/edupreptools/page3_gambar.png" alt="Contoh CV" />
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-container">
          <div className="gallery-title">
            <h2>
              Contoh <span>Motivation Letter</span>
            </h2>
            <p>
              Uraian padat tentang perjalanan akademik, riwayat kerja, dan
              keahlian yang mendukung tujuan karier.
            </p>
          </div>

          <div className="gallery-grid">
            {Array.from({ length: 9 }, (_, i) => (
              <div className="gallery-item" key={i}>
                <img
                  src={`/img/edupreptools/page3_ml${i + 1}.png`}
                  alt={`Contoh CV ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PratinjauMotivation;
