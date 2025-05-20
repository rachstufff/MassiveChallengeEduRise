import { Link } from "react-router-dom";
const EduprepTools = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Siap untuk mencapai impianmu?</h1>
            <p>
              EduPrep hadir untuk membantu kamu mempersiapkan diri meraih
              beasiswa dan memaksimalkan peluang akademik. Ayo, mulai
              persiapanmu sekarang juga!
            </p>
          </div>
          <div className="hero-image">
            <img
              src="/img/edupreptools/page1_gambar.png"
              alt="Persiapan Beasiswa"
            />
          </div>
        </div>
      </section>

      {/* CV & Motivation Letter Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Sudahkah Dokumenmu <span>Mencerminkan</span> Potensimu{" "}
            <span>Sebenarnya?</span>
          </h2>
          <p className="feature-desc">
            CV dan motivation letter adalah kesan pertama. Pastikan kesan itu
            kuat, profesional, dan mencerminkan siapa kamu sebenarnya. Kami siap
            membantumu menyusunnya dengan tepat.
          </p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="document">
                <img src="/img/edupreptools/icon_dokumen.png" alt="CV Icon" />
              </div>
              <h3>CV (Curriculum Vitae)</h3>
              <p>
                Tampilkan pengalaman dan pencapaianmu secara jelas dan
                profesional.
              </p>
              <Link to="/eduprep-tools/pratinjau-cv" className="btn">
                Lihat Detail
              </Link>
            </div>
            <div className="feature-card">
              <div className="document">
                <img
                  src="/img/edupreptools/icon_dokumen.png"
                  alt="Motivation Letter Icon"
                />
              </div>
              <h3>Motivation Letter</h3>
              <p>
                Ungkapkan motivasi dan tujuanmu dengan bahasa yang kuat dan
                meyakinkan.
              </p>
              <Link to="/eduprep-tools/pratinjau-motlet" className="btn">
                Lihat Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Section */}
      <section className="essay-section">
        <div className="container">
          <h2 className="section-title">
            Apakah Essaymu <span>Sudah Cukup Meyakinkan?</span>
          </h2>
          <p className="feature-desc">
            Essay yang baik bukan soal bahasa yang rumit, tapi tentang cerita
            yang jujur dan kuat. Mulailah menulis di sini, dan biarkan kami
            bantu mengasahnya hingga siap memikat pembaca.
          </p>
          <Link to="/submit-essay" className="btn">
            Coba Tulis
          </Link>
        </div>
      </section>

      {/* Interview Preparation Section */}
      <section className="interview-section">
        <div className="container">
          <h2 className="section-title">
            Siapkah Kamu <span>Menghadapi Wawancara Seleksi?</span>
          </h2>
          <p className="feature-desc">
            Jangan biarkan kewajaran jadi penghalang. Latih dirimu lewat
            simulasi realistis dan tingkatkan rasa percaya diri untuk tampil
            meyakinkan di depan panel seleksi.
          </p>

          <div className="interview-simulator">
            <h3>Simulasi Wawancara</h3>
            <p>
              Latihan wawancara dengan alur pertanyaan nyata, umpan balik
              membangun, serta panduan untuk menyiapkan jawaban terbaik dan
              meningkatkan kepercayaan diri.
            </p>
            <Link to="/simulasi-wawancara" className="btn">
              Mulai Simulasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EduprepTools;
