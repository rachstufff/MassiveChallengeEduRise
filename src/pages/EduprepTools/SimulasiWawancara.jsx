import { Link } from "react-router-dom";
const SimulasiWawancara = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Gabung ke Server Discord Kami</h1>
              <p>
                Terima kasih telah bersiap untuk simulasi wawancara! Klik tombol
                di bawah ini untuk bergabung dengan server Discord dan ikuti
                sesi wawancara secara langsung.
              </p>
              <Link to="#" className="btn-primary">
                Gabung
              </Link>
            </div>
            <div className="hero-image">
              <img
                src="/img/edupreptools/page6_gambar.png"
                alt="Simulasi Wawancara"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps">
        <div className="container">
          <h2>
            Langkah-Langkah <span>Simulasi Wawancara</span>
          </h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-icon">
                <img
                  src="/img/edupreptools/icon_earphone.png"
                  alt="Earphone Icon"
                />
              </div>
              <div className="step-content">
                <h3>Join Server Discord</h3>
                <p>
                  Masuk ke server Discord EduRise untuk memulai sesi simulasi.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/edupreptools/icon_clock.png" alt="Clock Icon" />
              </div>
              <div className="step-content">
                <h3>Jadwalkan Sesi Wawancara</h3>
                <p>
                  Pilih waktu yang tepat dan daftarkan diri untuk sesi bersama
                  mentor.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img
                  src="/img/edupreptools/icon_microphone.png"
                  alt="Microphone Icon"
                />
              </div>
              <div className="step-content">
                <h3>Wawancara di Discord</h3>
                <p>
                  Temui mentor via voice channel dan jawab pertanyaan layaknya
                  wawancara sungguhan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimulasiWawancara;
